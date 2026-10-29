# EPICURE Ramen & Noodles

A responsive, multi-page restaurant website built with semantic HTML, custom CSS, Tailwind's browser CDN, vanilla JavaScript, and a dependency-free Node.js server for contact-form validation.

## Run locally

With Node.js 18 or newer, run `node server.js` from the project directory and open `http://127.0.0.1:3000`. The server hosts the site and validates reservation, order pickup, and catering submissions. Set `PORT` or `HOST` to override the defaults.

Run the backend validation tests with `node --test contact-validation.test.js`.

## Pages

- `index.html` — Signature Bowls, the broth-focused home page
- `home-2.html` — Ramen Ritual, a distinct editorial home page
- `menu.html` — ramen menu grouped by broth
- `story.html` — restaurant story and cooking philosophy
- `contact.html` — visit details and enquiry form

Signature Bowls and Ramen Ritual use separate logo marks under the EPICURE name. The sticky header provides site-wide theme, RTL/LTR direction, and cart controls; the theme, text direction, and cart save the selected preference or cart contents in local browser storage. The menu presents nine bowls in a three-column grid for each of its five broth styles; add bowls to the cart to see quantities and a calculated subtotal. The cart can prefill the Contact page's order enquiry. The Contact page's reservation, order pickup, and catering forms validate in the browser and on the server. The server validates submissions but does not store or forward enquiries.

Photos are loaded from Unsplash and fonts from Google Fonts. Tailwind is included via its browser CDN, and GSAP is loaded on pages that use restrained reveal animations; the custom site styling lives in `styles.css`.
