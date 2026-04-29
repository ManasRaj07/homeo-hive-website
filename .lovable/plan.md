## What is happening

The WhatsApp link itself is already in the correct `wa.me` format, but the problem is still happening because the app is being viewed inside the Lovable preview iframe. WhatsApp blocks being displayed inside embedded frames for security/clickjacking protection, so if the preview environment intercepts or reuses the same frame, WhatsApp shows the blocked/refused page again.

This is not caused by the phone number or message format anymore. It is a navigation-context issue: WhatsApp must be opened outside the embedded preview.

## Research finding

WhatsApp and WhatsApp Web cannot be embedded in iframes. This is enforced by browser security headers such as `X-Frame-Options` / frame protection. The reliable workaround is not to embed or navigate the iframe, but to send the user to WhatsApp from the top-level browser context or a real new tab.

## Plan

1. Add a safer WhatsApp opener helper
   - Keep `createWhatsAppLink()` as the central URL generator.
   - Add a function such as `openWhatsAppLink(url)` in `src/lib/whatsapp.ts`.
   - This function will:
     - Detect when the site is running inside an iframe.
     - First try to open a real new tab using `window.open(url, "_blank", "noopener,noreferrer")` from the user click/submit event.
     - If blocked or still inside a frame, try assigning `window.top.location.href = url` to break out of the embedded preview.
     - Fall back to `window.location.href = url` only as the last option.

2. Change the floating WhatsApp logo from passive link to controlled click
   - Update `src/components/WhatsAppButton.tsx` to use `onClick` with the new opener helper.
   - Keep the `href`, `target="_blank"`, and `rel="noopener noreferrer"` attributes for accessibility and fallback behavior.
   - Prevent the iframe from handling the link before our opener runs.

3. Change the appointment form redirect to use the same helper
   - Update `src/components/ContactSection.tsx` so form submit calls `openWhatsAppLink(url)` instead of creating and clicking a temporary anchor.
   - Keep the toast fallback link, because it is useful if browsers block automatic navigation.
   - Make the fallback link also use the same safe opener behavior if possible.

4. Add a visible fallback message for preview limitations
   - If WhatsApp still cannot open automatically, the toast will clearly say: “If WhatsApp did not open, click Open WhatsApp.”
   - The fallback will remain a normal new-tab link for real browsers.

## Technical details

Files to edit:

```text
src/lib/whatsapp.ts
src/components/WhatsAppButton.tsx
src/components/ContactSection.tsx
```

The final URL remains:

```text
https://wa.me/917004483089?text=<encoded message>
```

The change is about how the browser opens that URL, not the URL itself.

## Expected result

- On the published site, WhatsApp opens normally in a new tab/app.
- Inside Lovable preview, the code will try harder to escape the iframe instead of letting WhatsApp load inside the embedded preview.
- If the browser blocks every automatic attempt, the user still gets a clear manual “Open WhatsApp” link.