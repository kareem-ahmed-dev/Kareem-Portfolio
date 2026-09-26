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
        
        # -> Click the 'العربية' button to switch the site to Arabic, then click the 'EN' button to switch back to English and verify the English headline is restored.
        # العربية button
        elem = page.get_by_role("button", name="العربية")
        await elem.click(timeout=10000)
        
        # -> Click the 'العربية' button to switch the site to Arabic, then click the 'EN' button to switch back to English and verify the English headline is restored.
        # EN button
        elem = page.get_by_role("button", name="EN")
        await elem.click(timeout=10000)
        
        # --> Assertions to verify final state
        
        # --> After toggling back, the site content is displayed in English and the page shows the English language active.
        # Assert-outcome: passed
        # Assert: The navigation link text is 'Home', indicating English content is shown.
        await expect(page.locator("xpath=/html/body/div[2]/header/div/nav/a[1]").nth(0)).to_have_text("Home", timeout=15000), "The navigation link text is 'Home', indicating English content is shown."
        # Assert-outcome: passed
        # Assert: The 'EN' language button is active (aria-pressed=true), indicating English was restored.
        await expect(page.get_by_role("button", name="EN", exact=True).nth(0)).to_have_attribute("aria-pressed", "true", timeout=15000), "The 'EN' language button is active (aria-pressed=true), indicating English was restored."
        await asyncio.sleep(5)

    finally:
        if context:
            await context.close()
        if browser:
            await browser.close()
        if pw:
            await pw.stop()

asyncio.run(run_test())
    