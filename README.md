# EPICURE Ramen & Noodles

A responsive, multi-page restaurant website built with semantic HTML, custom CSS, Tailwind's browser CDN, and vanilla JavaScript. It has no build step or server-side code.

## Run locally

Open `index.html` in a modern browser, or serve this folder with any static file server. The stylesheet, script, and all page links are relative, so the site can also be hosted as a static website.

## Pages

- `index.html` — Signature Bowls, the broth-focused home page
- `home-2.html` — Ramen Ritual, a distinct editorial home page
- `menu.html` — ramen menu grouped by broth
- `story.html` — restaurant story and cooking philosophy
- `contact.html` — visit details and enquiry form

Signature Bowls and Ramen Ritual use separate logo marks under the EPICURE name. The sticky header provides site-wide theme, RTL/LTR direction, and cart controls; the theme, text direction, and cart save the selected preference or cart contents in local browser storage. The menu presents nine bowls in a three-column grid for each of its five broth styles; add bowls to the cart to see quantities and a calculated subtotal. The cart can prefill the Contact page's order enquiry, but does not place or transmit an order. The Contact page also lets visitors request a reservation. Both forms validate in the browser and display a success state; without a backend or form service, they do not transmit or store requests.

Photos are loaded from Unsplash and fonts from Google Fonts. Tailwind is included via its browser CDN, and GSAP is loaded on pages that use restrained reveal animations; the custom site styling lives in `styles.css`.
