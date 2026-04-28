## Research finding

The current app uses:

```text
https://web.whatsapp.com/send?phone=917004483089&text=...
```

That can be blocked or behave badly in embedded previews because WhatsApp Web often refuses iframe-like contexts, redirects, or popup behavior.

WhatsApp’s official basic click-to-chat format is:

```text
https://wa.me/<phone>?text=<encoded message>
```

For this clinic it should be:

```text
https://wa.me/917004483089?text=Hello%20Dr.%20Neha%2C%20I%20would%20like%20to%20book%20an%20appointment.
```

This is the best non-API option because it lets WhatsApp decide the correct route: mobile app, WhatsApp Web, or the fallback `api.whatsapp.com` page.

## Plan

1. Update the shared WhatsApp helper
   - Change `src/lib/whatsapp.ts` from `web.whatsapp.com/send` to the official `wa.me` click-to-chat link.
   - Keep phone number and default message centralized.
   - Keep message encoding with `encodeURIComponent`.

2. Make the floating WhatsApp logo a simple direct link
   - Keep it as a normal `<a>` tag with `target="_blank"` and `rel="noopener noreferrer"`.
   - It will open the official `wa.me` link directly instead of forcing WhatsApp Web.

3. Change the appointment form redirect behavior
   - Replace `window.open(...)` with a temporary real anchor click created from the user’s submit action, or use `window.location.href` if needed.
   - This avoids popup-blocker issues that can happen with `window.open`, especially inside Lovable preview frames.
   - The user will still be sent to WhatsApp with the appointment message pre-filled.

4. Add a visible fallback link after form submit
   - If the browser blocks the redirect, show a toast/message like: “If WhatsApp did not open, tap here.”
   - The fallback link will use the same `wa.me` URL.

## Technical details

Files to edit:

```text
src/lib/whatsapp.ts
src/components/WhatsAppButton.tsx
src/components/ContactSection.tsx
```

Expected output format:

```text
https://wa.me/917004483089?text=<encoded appointment message>
```

This avoids the WhatsApp API entirely and uses only basic click-to-chat links.