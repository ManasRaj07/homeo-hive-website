The URL is correct: `https://wa.me/+917004483089`.

What is happening is that `wa.me` redirects internally to `api.whatsapp.com`. Inside the Lovable preview iframe, that redirected WhatsApp page is blocked by browser/WhatsApp security, so you see `api.whatsapp.com is blocked ERR_BLOCKED_BY_RESPONSE`. When you paste the same link directly in the browser, it works because it is not inside the Lovable preview frame.

Plan to fix the click behavior as much as possible from the app side:

1. Use one central WhatsApp URL/helper
   - Keep `https://wa.me/+917004483089` in `src/lib/whatsapp.ts`.
   - Avoid duplicating the URL separately in components.

2. Update the floating WhatsApp icon
   - In `src/components/WhatsAppButton.tsx`, import the WhatsApp helper.
   - Add an `onClick` handler that prevents Lovable preview from trying to load WhatsApp inside the iframe.
   - Open the link through a safer helper instead of relying only on the anchor tag.

3. Update “Book via WhatsApp”
   - In `src/components/ContactSection.tsx`, remove the local `WHATSAPP_URL` duplicate.
   - On successful form submit, call the same safe WhatsApp opener.

4. Improve the opener helper
   - In `src/lib/whatsapp.ts`, adjust `openWhatsAppLink()` to prefer escaping the preview iframe when possible.
   - If iframe escape is blocked, fall back to opening a real new tab.
   - If both fail, navigate the current page as the last fallback.

Technical details:

```text
Files to edit:
- src/lib/whatsapp.ts
- src/components/WhatsAppButton.tsx
- src/components/ContactSection.tsx

Final WhatsApp URL remains:
https://wa.me/+917004483089
```

Important note: even after this improvement, Lovable preview may still block external WhatsApp navigation in some cases because that is a preview-environment limitation. On the published site, the same link should open normally.