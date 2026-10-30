# House Of BN website

A responsive, static landing page for House Of BN, built with semantic HTML, CSS, and vanilla JavaScript.

## Project files

- `index.html` — page structure, content, SEO metadata, and favicon reference
- `styles.css` — responsive visual system and reduced-motion styles
- `script.js` — mobile navigation, current year, and contact-form validation/mailto behavior
- `assets/house-of-bn-logo.png` — supplied House Of BN logo

## Preview locally

No build tools or dependencies are required.

1. Extract the project ZIP.
2. Open a terminal in the `house-of-bn-website` folder.
3. Start a local static server, for example:

   ```bash
   python -m http.server 8000
   ```

4. Visit `http://localhost:8000`.

You can also open `index.html` directly, although a local server is a better preview of hosting behavior.

## Configure before publishing

1. Open `script.js`.
2. Replace `YOUR-CONTACT-EMAIL@example.com` with the confirmed House Of BN enquiry email address.
3. Review the training descriptions and confirm programme details, schedules, entry requirements, fees, and availability before publishing.
4. If the business has approved phone, address, social, or other contact details, add them to the page. They have intentionally been omitted because none were supplied.
5. Confirm that the Google Fonts connection is acceptable for your hosting/privacy requirements. The page falls back to system sans-serif fonts if the external font service is unavailable.

The contact form validates the required fields and opens the visitor's email application using a prefilled `mailto:` message after a real recipient address is configured. It does not submit to a server or store form data. Until the placeholder is replaced, the page displays an explanatory setup message instead of pretending to send the enquiry.

## Deploy with GitHub Pages

1. Create a GitHub repository and upload the **contents** of this project folder (keep `index.html`, `styles.css`, `script.js`, and `assets/` together at the repository root).
2. In the repository, open **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select your publishing branch (usually `main`) and the `/ (root)` folder, then save.
5. Wait for GitHub Pages to publish and open the provided site URL.

All local CSS, JavaScript, logo, and favicon paths are relative, so the site can run from a repository subpath such as `https://username.github.io/repository-name/`.

## Assumptions and placeholders

- No verified business email, phone number, physical address, social profile, client list, testimonials, certifications, or project results were provided. These have not been invented.
- The contact email in `script.js` is an explicit placeholder and must be replaced.
- CBT&A Level 04 and Level 05 copy is intentionally general. Confirm the exact programme scope and any accreditation/qualification details before publishing.
- The visual content uses the supplied logo and original CSS-built graphic elements; no fabricated customer logos or reviews are included.
