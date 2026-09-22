# TestSprite AI Testing Report

**Project:** kareem-ahmed-portfolio  
**Date:** 2026-09-22  

---

## 1. Document Metadata
- **Project Name:** kareem-ahmed-portfolio
- **Date:** 2026-09-22
- **Framework:** Next.js 16.3.3
- **Test Mode:** Development (port 3000)
- **Prepared by:** TestSprite AI

---

## 2. Requirement Validation Summary

### REQ-01: Contact Form Submission

#### Test TC001 — Submit the contact form successfully
- **Status:** Failed
- **Analysis:** The contact form was filled and submitted but no success confirmation appeared. 0 matches for success keywords. Form fields remained populated. Root cause: Web3Forms key likely blocked/rate-limited due to being exposed in public GitHub repo.
- **Result:** https://www.testsprite.com/dashboard/mcp/tests/f11e371d-ffc6-5952-b08c-fd87a9c97510/test/8f466921-7cef-4790-a178-5455458a004a

#### Test TC007 — Language switchable after form submission
- **Status:** Failed
- **Analysis:** Same root cause as TC001 — form submitted but no visible success message. Language switching itself worked correctly but the test dependency (form success) could not be verified.
- **Result:** https://www.testsprite.com/dashboard/mcp/tests/f11e371d-ffc6-5952-b08c-fd87a9c97510/test/cec3f678-b50f-49ed-9d35-b0e9ef6df154

---

### REQ-02: Language Switching

#### Test TC002 — Switch the site language to Arabic
- **Status:** Passed
- **Analysis:** Language toggle worked correctly. All UI text switched to Arabic (RTL).
- **Result:** https://www.testsprite.com/dashboard/mcp/tests/f11e371d-ffc6-5952-b08c-fd87a9c97510/test/92328555-21b1-43b3-b7af-7ec1cfb5fcc7

#### Test TC005 — Switch the site language back to English
- **Status:** Passed
- **Analysis:** Language toggled back to English correctly from Arabic.
- **Result:** https://www.testsprite.com/dashboard/mcp/tests/f11e371d-ffc6-5952-b08c-fd87a9c97510/test/459a9e3d-8451-41a8-8ba7-8b419598c349

---

### REQ-03: Theme Switching

#### Test TC003 — Switch the site theme to dark mode
- **Status:** Passed
- **Analysis:** Dark mode activated successfully. Background and text colors changed correctly.
- **Result:** https://www.testsprite.com/dashboard/mcp/tests/f11e371d-ffc6-5952-b08c-fd87a9c97510/test/3c3a3eaa-9f7f-4405-8488-d946330a2138

#### Test TC006 — Switch the site theme back to light mode
- **Status:** Passed
- **Analysis:** Theme toggled back to light mode correctly.
- **Result:** https://www.testsprite.com/dashboard/mcp/tests/f11e371d-ffc6-5952-b08c-fd87a9c97510/test/03816619-587d-4c7c-9542-6c50dca0bd6c

---

### REQ-04: Page Stability

#### Test TC004 — Keep the landing page usable after changing language and theme
- **Status:** Passed
- **Analysis:** Page remained fully interactive and stable after combining both language and theme changes.
- **Result:** https://www.testsprite.com/dashboard/mcp/tests/f11e371d-ffc6-5952-b08c-fd87a9c97510/test/7aa44fee-d28a-4cda-b760-2b87e51f4dd6

---

## 3. Coverage & Matching Metrics

**71.43%** of tests passed.

| Requirement | Total Tests | Passed | Failed |
|---|---|---|---|
| Contact Form Submission | 2 | 0 | 2 |
| Language Switching | 2 | 2 | 0 |
| Theme Switching | 2 | 2 | 0 |
| Page Stability | 1 | 1 | 0 |
| **Total** | **7** | **5** | **2** |

---

## 4. Key Gaps / Risks

1. **Contact form not showing success state** — The Web3Forms API key is hardcoded and publicly exposed in the GitHub repo. It is likely blocked or rate-limited, causing the API to silently fail. The form UI has no error state, so the user sees nothing on failure.

2. **No form error handling** — If the Web3Forms API call fails (network error, invalid key, rate limit), the user receives zero feedback. An error state should be added to `contact.tsx`.

3. **No loading/disabled button state** — The submit button remains active during the API call, allowing double submissions.
