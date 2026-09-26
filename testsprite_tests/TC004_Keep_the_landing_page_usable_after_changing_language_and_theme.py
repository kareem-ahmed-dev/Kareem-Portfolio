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
        
        # -> Click the 'العربية' language button to switch the site language to Arabic.
        # العربية button
        elem = page.get_by_role("button", name="العربية")
        await elem.click(timeout=10000)
        
        # -> Click the 'Theme' toggle button to switch the site theme.
        # Theme button
        elem = page.get_by_role("button", name="Theme")
        await elem.click(timeout=10000)
        
        # -> Click the 'Theme' toggle button to switch the site theme.
        # Contact Me link
        elem = page.locator("#home").get_by_role("link", name="Contact Me")
        await elem.click(timeout=10000)
        
        # -> Fill the 'Name', 'Email', and 'Message' fields with valid test values and click the 'Send Message' button to submit the contact form.
        # Your name text field
        elem = page.get_by_role("textbox", name="Name")
        await elem.wait_for(state="visible", timeout=10000)
        await elem.fill("Test User")
        
        # -> Fill the 'Name', 'Email', and 'Message' fields with valid test values and click the 'Send Message' button to submit the contact form.
        # you@example.com email field
        elem = page.get_by_role("textbox", name="Email")
        await elem.wait_for(state="visible", timeout=10000)
        await elem.fill("test.user@example.com")
        
        # -> Fill the 'Name', 'Email', and 'Message' fields with valid test values and click the 'Send Message' button to submit the contact form.
        # Tell me about your project… text area
        elem = page.get_by_role("textbox", name="Message")
        await elem.wait_for(state="visible", timeout=10000)
        await elem.fill("This is a test message submitted as part of QA to verify contact form functionality after language and theme toggles.")
        
        # -> Fill the 'Name', 'Email', and 'Message' fields with valid test values and click the 'Send Message' button to submit the contact form.
        # Send Message button
        elem = page.get_by_role("button", name="Send Message")
        await elem.click(timeout=10000)
        
        # --> Assertions to verify final state
        
        # --> A success confirmation is visible after submitting the contact form.
        await page.locator("div").filter(has_text=re.compile(r"^Message sent!Thanks for reaching out — I'll get back to you soon\.$")).locator("span").nth(0).scroll_into_view_if_needed()
        # Assert-outcome: passed
        # Assert: Confirmation message is visible on the contact section.
        await expect(page.locator("div").filter(has_text=re.compile(r"^Message sent!Thanks for reaching out — I'll get back to you soon\.$")).locator("span").nth(0)).to_be_visible(timeout=15000), "Confirmation message is visible on the contact section."
        await asyncio.sleep(5)

    finally:
        if context:
            await context.close()
        if browser:
            await browser.close()
        if pw:
            await pw.stop()

asyncio.run(run_test())
    