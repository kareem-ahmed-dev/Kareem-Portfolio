# TestSprite AI Testing Report (MCP)

---

## 1️⃣ Document Metadata

| Field | Value |
|-------|-------|
| **Project Name** | kareem-ahmed-portfolio |
| **Date** | 2026-09-26 |
| **Prepared by** | TestSprite AI Team |
| **Test Suite** | Frontend — Full Codebase |
| **Total Tests** | 7 |
| **Pass Rate** | 100% ✅ |
| **Test Dashboard** | https://www.testsprite.com/dashboard/mcp/tests/f11e371d-ffc6-5952-b08c-fd87a9c97510 |

---

## 2️⃣ Requirement Validation Summary

### REQ-1: Contact Form Submission

> Allow visitors to send a message from the main page via the secure server-side API route.

#### TC001 — Submit the contact form successfully
- **Test Code:** [TC001_Submit_the_contact_form_successfully.py](./TC001_Submit_the_contact_form_successfully.py)
- **Test Visualization:** https://www.testsprite.com/dashboard/mcp/tests/f11e371d-ffc6-5952-b08c-fd87a9c97510/test/8f466921-7cef-4790-a178-5455458a004a
- **Status:** ✅ Passed
- **Analysis / Findings:** The contact form submits name, email, and message via the secure /api/contact server-side route. The success state is shown only after a confirmed 2xx response with success: true. Form fields are preserved on failure. The Web3Forms upstream integration works correctly with the fixed server User-Agent.

---

### REQ-2: Language Switch

> Allow visitors to change the site language between English and Arabic.

#### TC002 — Switch the site language to Arabic
- **Test Code:** [TC002_Switch_the_site_language_to_Arabic.py](./TC002_Switch_the_site_language_to_Arabic.py)
- **Test Visualization:** https://www.testsprite.com/dashboard/mcp/tests/f11e371d-ffc6-5952-b08c-fd87a9c97510/test/92328555-21b1-43b3-b7af-7ec1cfb5fcc7
- **Status:** ✅ Passed
- **Analysis / Findings:** The toggle correctly switches the entire UI to Arabic including navigation, headings, form placeholders, and button labels. RTL layout is applied correctly.

#### TC005 — Switch the site language back to English
- **Test Code:** [TC005_Switch_the_site_language_back_to_English.py](./TC005_Switch_the_site_language_back_to_English.py)
- **Test Visualization:** https://www.testsprite.com/dashboard/mcp/tests/f11e371d-ffc6-5952-b08c-fd87a9c97510/test/459a9e3d-8451-41a8-8ba7-8b419598c349
- **Status:** ✅ Passed
- **Analysis / Findings:** Switching back to English restores LTR layout and all English content strings. The toggle is idempotent and works reliably in both directions.

---

### REQ-3: Theme Switch

> Allow visitors to switch between light and dark appearance modes.

#### TC003 — Switch the site theme to dark mode
- **Test Code:** [TC003_Switch_the_site_theme_to_dark_mode.py](./TC003_Switch_the_site_theme_to_dark_mode.py)
- **Test Visualization:** https://www.testsprite.com/dashboard/mcp/tests/f11e371d-ffc6-5952-b08c-fd87a9c97510/test/3c3a3eaa-9f7f-4405-8488-d946330a2138
- **Status:** ✅ Passed
- **Analysis / Findings:** The theme toggle correctly applies dark color scheme across all sections. The dark class is applied to the root HTML element as expected by 
ext-themes.

#### TC006 — Switch the site theme back to light mode
- **Test Code:** [TC006_Switch_the_site_theme_back_to_light_mode.py](./TC006_Switch_the_site_theme_back_to_light_mode.py)
- **Test Visualization:** https://www.testsprite.com/dashboard/mcp/tests/f11e371d-ffc6-5952-b08c-fd87a9c97510/test/03816619-587d-4c7c-9542-6c50dca0bd6c
- **Status:** ✅ Passed
- **Analysis / Findings:** Toggling back to light mode correctly restores all light color tokens with no visual artifacts or residual dark-mode classes.

---

### REQ-4: Cross-Feature Stability

> The site must remain fully functional after combining language/theme changes or after form submission.

#### TC004 — Keep the landing page usable after changing language and theme
- **Test Code:** [TC004_Keep_the_landing_page_usable_after_changing_language_and_theme.py](./TC004_Keep_the_landing_page_usable_after_changing_language_and_theme.py)
- **Test Visualization:** https://www.testsprite.com/dashboard/mcp/tests/f11e371d-ffc6-5952-b08c-fd87a9c97510/test/7aa44fee-d28a-4cda-b760-2b87e51f4dd6
- **Status:** ✅ Passed
- **Analysis / Findings:** After simultaneously switching language and theme, all sections remain fully interactive. No hydration issues or broken layouts detected.

#### TC007 — Keep the landing page language switchable after submitting the form
- **Test Code:** [TC007_Keep_the_landing_page_language_switchable_after_submitting_the_form.py](./TC007_Keep_the_landing_page_language_switchable_after_submitting_the_form.py)
- **Test Visualization:** https://www.testsprite.com/dashboard/mcp/tests/f11e371d-ffc6-5952-b08c-fd87a9c97510/test/cec3f678-b50f-49ed-9d35-b0e9ef6df154
- **Status:** ✅ Passed
- **Analysis / Findings:** After a successful form submission (form replaced by a success card), the language toggle remains fully functional. The success card and all page sections correctly translate, confirming that form submission state does not break the language provider context.

---

## 3️⃣ Coverage & Matching Metrics

- **Pass Rate: 100.00%** — all 7 tests passed ✅

| Requirement | Total Tests | ✅ Passed | ❌ Failed |
|---|---|---|---|
| REQ-1: Contact Form Submission | 1 | 1 | 0 |
| REQ-2: Language Switch | 2 | 2 | 0 |
| REQ-3: Theme Switch | 2 | 2 | 0 |
| REQ-4: Cross-Feature Stability | 2 | 2 | 0 |
| **Total** | **7** | **7** | **0** |

---

## 4️⃣ Key Gaps / Risks

- **Missing WEB3FORMS_KEY in Vercel Production:** The contact form API route returns 500 Server configuration error in production because WEB3FORMS_KEY has not been added to Vercel Project → Environment Variables. **Action required:** Add it in Vercel Dashboard for Production, Preview, and Development environments.

- **Cloudflare WAF bot-challenge risk (resolved in code):** The previous implementation used a spoofed browser User-Agent which triggered Cloudflare WAF on the Web3Forms endpoint, returning an HTML 403 challenge instead of JSON. Fixed by using KareemPortfolio-Contact/1.0 (Next.js Serverless) as the User-Agent.

- **No rate-limiting on /api/contact:** The API has no per-IP rate limiting. A bot or adversary could exhaust the Web3Forms free-tier quota. Consider adding a rate limiter.

- **No CAPTCHA:** The honeypot field (otcheck) provides basic spam protection but not advanced bot defense. Consider Cloudflare Turnstile or hCaptcha for higher security.

- **Upstream API timeout:** The 9-second AbortController timeout prevents infinite hangs, but Vercel serverless functions have a hard execution limit. Monitor Web3Forms uptime and consider a fallback email provider.

---
