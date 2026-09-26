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
        
        # -> Click the 'Contact' link in the navigation to open the contact section
        # Contact link
        elem = page.get_by_role("link", name="Contact", exact=True)
        await elem.click(timeout=10000)
        
        # -> Fill the Name, Email, and Message fields and click the 'Send Message' button to submit the contact form.
        # Your name text field
        elem = page.get_by_role("textbox", name="Name")
        await elem.wait_for(state="visible", timeout=10000)
        await elem.fill("Test User")
        
        # -> Fill the Name, Email, and Message fields and click the 'Send Message' button to submit the contact form.
        # you@example.com email field
        elem = page.get_by_role("textbox", name="Email")
        await elem.wait_for(state="visible", timeout=10000)
        await elem.fill("test.user@example.com")
        
        # -> Fill the Name, Email, and Message fields and click the 'Send Message' button to submit the contact form.
        # Tell me about your project… text area
        elem = page.get_by_role("textbox", name="Message")
        await elem.wait_for(state="visible", timeout=10000)
        await elem.fill("This is a test message submitted by an automated QA check to verify the contact form.")
        
        # -> Fill the Name, Email, and Message fields and click the 'Send Message' button to submit the contact form.
        # Send Message button
        elem = page.get_by_role("button", name="Send Message")
        await elem.click(timeout=10000)
        
        # -> Click the 'العربية' language button to switch the landing page to Arabic.
        # العربية button
        elem = page.get_by_role("button", name="العربية")
        await elem.click(timeout=10000)
        
        # -> Verify the Arabic success message 'تم إرسال الرسالة!' is visible on the page, then click the 'EN' language button to switch back to English.
        # EN button
        elem = page.get_by_role("button", name="EN")
        await elem.click(timeout=10000)
        
        # -> Click the 'Contact' navigation link to confirm it's still clickable and the page remains interactive.
        # Contact link
        elem = page.get_by_role("link", name="Contact", exact=True)
        await elem.click(timeout=10000)
        
        # -> Click the 'Contact' navigation link to confirm it's still clickable and the page remains interactive.
        # Contact Me link
        elem = page.get_by_role("banner").get_by_role("link", name="Contact Me")
        await elem.click(timeout=10000)
        
        # -> Click the 'العربية' language button to switch the page to Arabic and verify the Arabic success message 'تم إرسال الرسالة!' appears, then confirm the 'Contact' link remains usable.
        # العربية button
        elem = page.get_by_role("button", name="العربية")
        await elem.click(timeout=10000)
        
        # -> Click the 'تواصل معي' link to confirm the contact navigation is still clickable and the page remains interactive.
        # تواصل معي link
        elem = page.get_by_label("Primary").get_by_role("link", name="تواصل معي")
        await elem.click(timeout=10000)
        
        # -> Click the 'تواصل معي' link to confirm the contact navigation is still clickable and the page remains interactive.
        # تواصل معي link
        elem = page.locator("div").filter(has_text=re.compile(r"^ENالعربيةالمظهرتواصل معي$")).get_by_role("link")
        await elem.click(timeout=10000)
        
        # --> Assertions to verify final state
        
        # --> The Arabic success confirmation 'تم إرسال الرسالة!' is visible after submission and language switching.
        # Assert-outcome: passed
        # Assert: Arabic success message 'تم إرسال الرسالة!' is visible in the contact area.
        await expect(page.locator("#contact").nth(0)).to_contain_text("\u062a\u0645 \u0625\u0631\u0633\u0627\u0644 \u0627\u0644\u0631\u0633\u0627\u0644\u0629!", timeout=15000), "Arabic success message '\u062a\u0645 \u0625\u0631\u0633\u0627\u0644 \u0627\u0644\u0631\u0633\u0627\u0644\u0629!' is visible in the contact area."
        
        # --> The contact navigation link ('تواصل معي') remains usable after submitting the form and switching languages.
        await page.get_by_label("Primary").get_by_role("link", name="تواصل معي").nth(0).scroll_into_view_if_needed()
        # Assert-outcome: passed
        # Assert: The 'تواصل معي' navigation link is visible in the header.
        await expect(page.get_by_label("Primary").get_by_role("link", name="تواصل معي").nth(0)).to_be_visible(timeout=15000), "The '\u062a\u0648\u0627\u0635\u0644 \u0645\u0639\u064a' navigation link is visible in the header."
        await asyncio.sleep(5)

    finally:
        if context:
            await context.close()
        if browser:
            await browser.close()
        if pw:
            await pw.stop()

asyncio.run(run_test())
    