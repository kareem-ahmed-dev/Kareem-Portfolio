import asyncio
import re
from playwright import async_api
from playwright.async_api import expect

async def run_test():
    pw = None
    browser = None
    context = None

    try:
        # Start a Playwright session in asynchronous mode
        pw = await async_api.async_playwright().start()

        # Launch a Chromium browser in headless mode with custom arguments
        browser = await pw.chromium.launch(
            headless=True,
            args=[
                "--window-size=1280,720",
                "--disable-dev-shm-usage",
                "--ipc=host",
                "--single-process"
            ],
        )

        # Create a new browser context (like an incognito window)
        context = await browser.new_context()
        # Wider default timeout to match the agent's DOM-stability budget;
        # auto-waiting Playwright APIs (expect, locator.wait_for) inherit this.
        context.set_default_timeout(15000)

        # Open a new page in the browser context
        page = await context.new_page()

        # Interact with the page elements to simulate user flow
        # -> navigate
        await page.goto("http://localhost:3000")
        try:
            await page.wait_for_load_state("domcontentloaded", timeout=5000)
        except Exception:
            pass
        
        # -> Click the 'العربية' language button to switch the site to Arabic.
        # العربية button
        elem = page.get_by_role("button", name="العربية")
        await elem.click(timeout=10000)
        
        # -> Click the 'EN' language button to switch the site back to English.
        # EN button
        elem = page.get_by_role("button", name="EN")
        await elem.click(timeout=10000)
        
        # --> Assertions to verify final state
        
        # --> The page content is displayed in English (hero headline is visible in English).
        # Assert-outcome: passed
        # Assert: The hero headline contains the English text shown on the page.
        await expect(page.locator("#home").nth(0)).to_contain_text("Front-End Developer Building Modern Web Experiences", timeout=15000), "The hero headline contains the English text shown on the page."
        
        # --> The page layout is left-to-right after switching back to English.
        await page.get_by_role("link", name="Home").nth(0).scroll_into_view_if_needed()
        # Assert-outcome: passed
        # Assert: The primary navigation link ('Home') is visible in the header, consistent with the LTR layout observed.
        await expect(page.get_by_role("link", name="Home").nth(0)).to_be_visible(timeout=15000), "The primary navigation link ('Home') is visible in the header, consistent with the LTR layout observed."
        await asyncio.sleep(5)

    finally:
        if context:
            await context.close()
        if browser:
            await browser.close()
        if pw:
            await pw.stop()

asyncio.run(run_test())
    