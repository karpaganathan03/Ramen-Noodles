(() => {
  /* ==========================================================================
     EPICURE RAMEN & NOODLES - CORE ENGINE
     Elite Brothy Aesthetic | Dual Home Pages | Eat-Up Style Menu System
     ========================================================================== */

  const headerHost = document.querySelector("[data-site-header]");
  const footerHost = document.querySelector("[data-site-footer]");
  const logoFile = "assets/logo-steam.svg";

  // Shared Sticky Site Header with Uniform CTA & Distinct Home Page Names
  const header = `
    <header class="site-header">
      <nav class="nav-shell" aria-label="Main navigation">
        <a class="brand" href="index.html" aria-label="Epicure Ramen and Noodles home">
          <img class="brand-mark" src="${logoFile}" alt="Epicure Logo" width="40" height="40" />
          <span class="brand-name">Epicure<small>Ramen &amp; Noodles</small></span>
        </a>

        <button class="menu-toggle" type="button" aria-label="Open navigation" aria-expanded="false" aria-controls="primary-links">☰</button>

        <ul class="nav-links" id="primary-links">
          <li class="nav-dropdown">
            <button class="nav-button" type="button" aria-expanded="false" aria-haspopup="true">
              Home <span class="ms-1 text-[11px] opacity-70">▾</span>
            </button>
            <div class="dropdown-menu" aria-label="Choose home experience">
              <a href="index.html">
                <strong>The Broth House</strong>
                <span>Artisanal 18-hour simmered broths, dining ritual &amp; signature craft bowls</span>
              </a>
              <a href="home-2.html">
                <strong>Midnight Noodle Bar</strong>
                <span>Late-night izakaya vibe, custom night bowls &amp; street-side slurps</span>
              </a>
            </div>
          </li>
          <li><a href="menu.html">Menu</a></li>
          <li><a href="story.html">Our Story</a></li>
          <li><a href="contact.html">Contact &amp; Visit</a></li>
          <li class="pt-2 md:hidden"><a class="cta-primary cta-full" href="contact.html#order-panel">Order Pickup</a></li>
        </ul>

        <div class="nav-actions">
          <button class="icon-btn theme-toggle" type="button" aria-label="Switch theme mode" title="Toggle light or dark mode">◐</button>
          <button class="icon-btn direction-toggle" type="button" aria-label="Switch text direction" title="Toggle RTL / LTR layout">⇄</button>
          <button class="cart-toggle" type="button" aria-expanded="false" aria-controls="site-cart" title="View your order">
            Cart <span data-cart-count>0</span>
          </button>
          <a class="cta-primary" href="contact.html#order-panel">Order Pickup</a>
        </div>
      </nav>
    </header>

    <aside class="cart-panel" id="site-cart" data-cart-panel aria-labelledby="cart-heading" hidden>
      <div class="cart-panel-head">
        <h2 id="cart-heading">Your Order</h2>
        <button class="cart-close" type="button" aria-label="Close cart">×</button>
      </div>
      <div class="cart-lines" data-cart-lines></div>
      <div class="cart-total">
        <span>Subtotal</span>
        <strong data-cart-total>₹0</strong>
      </div>
      <a class="cta-primary cta-full cart-checkout" href="contact.html?cart=1#order-panel">Send Order Enquiry</a>
    </aside>

    <div class="scroll-progress" role="progressbar" aria-label="Page scroll progress" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0">
      <span></span>
    </div>
  `;

  const year = new Date().getFullYear();
  // Shared Site Footer
  const footer = `
    <footer class="site-footer">
      <div class="wrap">
        <div class="grid gap-10 pb-12 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <a class="brand" href="index.html">
              <img class="brand-mark" src="${logoFile}" alt="" width="38" height="38" />
              <span class="brand-name">Epicure<small>Ramen &amp; Noodles</small></span>
            </a>
            <p class="mt-4 max-w-sm text-[13.5px] leading-7 text-[var(--muted)]">
              Handcrafted bowls made daily from scratch. 18-hour slow-cooked broths, artisanal wheat noodles, and a warm seat waiting for you in Indiranagar.
            </p>
            <div class="mt-4 flex items-center gap-3 text-[var(--gold)] text-xs font-semibold tracking-wider uppercase">
              <span>Crafted with Soul</span> • <span>Bengaluru</span>
            </div>
          </div>

          <div>
            <h3 class="mb-4 text-sm font-bold uppercase tracking-wider text-[var(--ink)]">Experience</h3>
            <div class="grid gap-2 text-[13.5px] text-[var(--muted)]">
              <a href="index.html" class="hover:text-[var(--chili)]">The Broth House (Home 1)</a>
              <a href="home-2.html" class="hover:text-[var(--chili)]">Midnight Noodle Bar (Home 2)</a>
              <a href="menu.html" class="hover:text-[var(--chili)]">Signature Menu</a>
              <a href="story.html" class="hover:text-[var(--chili)]">Our Heritage &amp; Craft</a>
              <a href="contact.html" class="hover:text-[var(--chili)]">Contact &amp; Reservations</a>
            </div>
          </div>

          <div>
            <h3 class="mb-4 text-sm font-bold uppercase tracking-wider text-[var(--ink)]">Visit Us</h3>
            <p class="text-[13.5px] leading-7 text-[var(--muted)]">
              42 Noodle Lane, Indiranagar<br>
              Bengaluru, Karnataka 560038<br>
              <a href="tel:+918012345678" class="text-[var(--ink)] font-medium hover:text-[var(--chili)]">+91 80 1234 5678</a><br>
              <a href="mailto:hello@epicure-ramen.com" class="text-[var(--muted)] hover:text-[var(--chili)]">hello@epicure-ramen.com</a>
            </p>
          </div>

          <div>
            <h3 class="mb-4 text-sm font-bold uppercase tracking-wider text-[var(--ink)]">Hours</h3>
            <p class="text-[13.5px] leading-7 text-[var(--muted)]">
              <strong class="text-[var(--ink)] font-semibold">Lunch:</strong> 12:00 PM – 3:30 PM<br>
              <strong class="text-[var(--ink)] font-semibold">Dinner:</strong> 6:00 PM – 11:30 PM<br>
              <strong class="text-[var(--gold)] font-semibold">Midnight Izakaya (Fri-Sat):</strong><br>
              Until 2:00 AM
            </p>
            <a class="cta-primary mt-4" href="contact.html#order-panel">Order Pickup</a>
          </div>
        </div>

        <div class="flex flex-wrap items-center justify-between gap-4 border-t border-[var(--line)] pt-6 text-[12.5px] text-[var(--muted)]">
          <span>&copy; ${year} Epicure Ramen &amp; Noodles House. All rights reserved.</span>
          <div class="flex items-center gap-6">
            <a href="menu.html" class="hover:text-[var(--ink)]">Menu</a>
            <a href="story.html" class="hover:text-[var(--ink)]">Story</a>
            <a href="contact.html" class="hover:text-[var(--ink)]">Reservations</a>
            <a class="cta-ghost ink" href="contact.html#order-panel">Order Pickup</a>
          </div>
        </div>
      </div>
    </footer>
  `;

  if (headerHost) headerHost.innerHTML = header;
  if (footerHost) footerHost.innerHTML = footer;

  /* ==========================================================================
     THEME (LIGHT / DARK) & DIRECTION (LTR / RTL)
     Default theme is DARK for the elite Tatsu brothy aesthetic!
     ========================================================================== */
  const body = document.body;
  const themeButton = document.querySelector(".theme-toggle");
  const directionButton = document.querySelector(".direction-toggle");

  const setTheme = (theme) => {
    const isLight = theme === "light";
    body.classList.toggle("light", isLight);
    body.classList.toggle("dark", !isLight);
    document.documentElement.classList.toggle("light", isLight);
    document.documentElement.classList.toggle("dark", !isLight);
    const metaTheme = document.querySelector('meta[name="theme-color"]');
    if (metaTheme) {
      metaTheme.setAttribute("content", isLight ? "#FAF9F6" : "#181615");
    }
    if (themeButton) {
      themeButton.textContent = isLight ? "☀" : "◐";
      themeButton.setAttribute(
        "aria-label",
        `Switch to ${isLight ? "dark" : "light"} mode`,
      );
      themeButton.setAttribute(
        "title",
        `Theme: ${isLight ? "Soft Cream Light" : "Charcoal Dark"}. Click to toggle`,
      );
    }
  };

  const savedTheme = localStorage.getItem("ramen-theme") || "light";
  setTheme(savedTheme);

  themeButton?.addEventListener("click", () => {
    const next = document.documentElement.classList.contains("light")
      ? "dark"
      : "light";
    localStorage.setItem("ramen-theme", next);
    setTheme(next);
  });

  const setDirection = (direction) => {
    document.documentElement.dir = direction;
    if (directionButton) {
      const isRtl = direction === "rtl";
      directionButton.textContent = isRtl ? "⇆" : "⇄";
      directionButton.setAttribute(
        "aria-label",
        `Switch to ${isRtl ? "left-to-right" : "right-to-left"} layout`,
      );
      directionButton.setAttribute(
        "title",
        `Layout: ${isRtl ? "Right-to-Left (⇆)" : "Left-to-Right (⇄)"}. Click to toggle`,
      );
    }
  };

  setDirection(localStorage.getItem("ramen-direction") || "ltr");
  directionButton?.addEventListener("click", () => {
    const next = document.documentElement.dir === "rtl" ? "ltr" : "rtl";
    localStorage.setItem("ramen-direction", next);
    setDirection(next);
  });

  // Mobile Navigation Toggle
  const navToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  navToggle?.addEventListener("click", () => {
    const open = navToggle.getAttribute("aria-expanded") !== "true";
    navToggle.setAttribute("aria-expanded", String(open));
    navToggle.setAttribute(
      "aria-label",
      open ? "Close navigation" : "Open navigation",
    );
    navToggle.textContent = open ? "×" : "☰";
    navLinks?.classList.toggle("is-open", open);
  });

  // Active Link Tracking & Home Dropdown Toggle
  const currentPage = location.pathname.split("/").pop() || "index.html";
  const homeButton = document.querySelector(".nav-button");
  const homeDropdown = document.querySelector(".nav-dropdown");

  const markCurrentPage = (page) => {
    navLinks?.querySelectorAll("a").forEach((link) => {
      const href = link.getAttribute("href");
      if (href === page) link.setAttribute("aria-current", "page");
      else link.removeAttribute("aria-current");
    });
    homeButton?.classList.toggle(
      "is-current",
      page === "index.html" || page === "home-2.html",
    );
  };
  markCurrentPage(currentPage);

  homeButton?.addEventListener("click", (event) => {
    event.stopPropagation();
    const open = homeButton.getAttribute("aria-expanded") !== "true";
    homeButton.setAttribute("aria-expanded", String(open));
    homeDropdown?.classList.toggle("open", open);
  });

  document.addEventListener("click", (event) => {
    if (homeDropdown && !homeDropdown.contains(event.target)) {
      homeDropdown.classList.remove("open");
      homeButton?.setAttribute("aria-expanded", "false");
    }
  });

  // Scroll Progress Bar
  const progressBar = document.querySelector(".scroll-progress");
  const updateScrollProgress = () => {
    const maxScroll =
      document.documentElement.scrollHeight - window.innerHeight;
    const percent =
      maxScroll > 0
        ? Math.min(100, Math.max(0, (window.scrollY / maxScroll) * 100))
        : 0;
    progressBar?.style.setProperty("--scroll-progress", `${percent}%`);
    progressBar?.setAttribute("aria-valuenow", String(Math.round(percent)));
  };
  window.addEventListener("scroll", updateScrollProgress, { passive: true });
  window.addEventListener("resize", updateScrollProgress);
  requestAnimationFrame(updateScrollProgress);

  /* ==========================================================================
     SHOPPING CART ENGINE
     ========================================================================== */
  const cartKey = "epicure-cart-v2";
  const readCart = () => {
    try {
      const saved = JSON.parse(localStorage.getItem(cartKey) || "{}");
      if (!saved || typeof saved !== "object" || Array.isArray(saved))
        return {};
      return saved;
    } catch {
      return {};
    }
  };

  let cart = readCart();

  const saveCart = () => {
    localStorage.setItem(cartKey, JSON.stringify(cart));
    renderCart();
  };

  const renderCart = () => {
    const cartLines = document.querySelector("[data-cart-lines]");
    if (!cartLines) return;
    cartLines.replaceChildren();
    let count = 0;
    let subtotal = 0;

    Object.entries(cart).forEach(([id, item]) => {
      count += item.quantity;
      const linePrice = item.price * item.quantity;
      subtotal += linePrice;

      const row = document.createElement("div");
      row.className = "cart-line";
      row.innerHTML = `
        <span class="cart-line-name">
          <strong>${item.name}</strong>
          <small>₹${linePrice}${item.customization ? ` · ${item.customization}` : ""}</small>
        </span>
        <span class="cart-quantity">
          <button type="button" data-cart-change="${id}" data-change="-1" aria-label="Decrease quantity">−</button>
          <span>${item.quantity}</span>
          <button type="button" data-cart-change="${id}" data-change="1" aria-label="Increase quantity">+</button>
        </span>
      `;
      cartLines.append(row);
    });

    if (!count) {
      const empty = document.createElement("p");
      empty.className = "cart-empty";
      empty.textContent =
        "Your bowl order is empty. Pick a signature broth to begin.";
      cartLines.append(empty);
    }

    document.querySelectorAll("[data-cart-count]").forEach((node) => {
      node.textContent = String(count);
    });

    const total = document.querySelector("[data-cart-total]");
    if (total) total.textContent = `₹${subtotal}`;
  };

  const cartToggle = document.querySelector(".cart-toggle");
  const cartPanel = document.querySelector("[data-cart-panel]");

  const closeCart = () => {
    if (cartPanel) cartPanel.hidden = true;
    cartToggle?.setAttribute("aria-expanded", "false");
  };

  cartToggle?.addEventListener("click", () => {
    const open = cartToggle.getAttribute("aria-expanded") !== "true";
    cartToggle.setAttribute("aria-expanded", String(open));
    if (cartPanel) cartPanel.hidden = !open;
  });

  document.querySelector(".cart-close")?.addEventListener("click", closeCart);
  document
    .querySelector(".cart-checkout")
    ?.addEventListener("click", closeCart);

  document.addEventListener("click", (event) => {
    const change = event.target.closest("[data-cart-change]");
    if (!change) return;
    const id = change.dataset.cartChange;
    const quantity = (cart[id]?.quantity || 0) + Number(change.dataset.change);
    if (quantity < 1) delete cart[id];
    else cart[id].quantity = quantity;
    saveCart();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    homeDropdown?.classList.remove("open");
    homeButton?.setAttribute("aria-expanded", "false");
    navLinks?.classList.remove("is-open");
    closeCart();
    document.querySelector("[data-menu-detail]")?.classList.add("is-closed");
  });

  renderCart();

  /* ==========================================================================
     EXPANDED DISH DATASET (80+ items across Chef's Kitchen & Broth Styles)
     Filled completely with unique ramen & noodles - no empty state!
     ========================================================================== */
  const IMG = {
    kitchen:
      "https://images.unsplash.com/photo-1547928576-a4a33237cbc3?auto=format&fit=crop&w=900&q=85",
    tonkotsu:
      "https://images.unsplash.com/photo-1612927601601-6638404737ce?auto=format&fit=crop&w=900&q=85",
    shoyu:
      "https://images.unsplash.com/photo-1553163147-622ab57be1c7?auto=format&fit=crop&w=900&q=85",
    miso: "https://images.unsplash.com/photo-1607301406259-dfb186e15de8?auto=format&fit=crop&w=900&q=85",
    shio: "https://images.unsplash.com/photo-1594998893017-36147cbcae05?auto=format&fit=crop&w=900&q=85",
    spicy:
      "https://images.unsplash.com/photo-1574484284002-952d92456975?auto=format&fit=crop&w=900&q=85",
    noodles:
      "https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?auto=format&fit=crop&w=900&q=85",
    sides:
      "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?auto=format&fit=crop&w=900&q=85",
    drinks:
      "https://images.unsplash.com/photo-1526318896980-cf78c088247c?auto=format&fit=crop&w=900&q=85",
    desserts:
      "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=900&q=85",
  };

  const MENU = [
    // 0. CHEF'S KITCHEN (Signature House Creations & Rare Tare Bowls)
    {
      id: "kitch-truffle-paitan",
      name: "Truffle Butter Chicken Paitan",
      price: 540,
      cat: "kitchen",
      spice: "mild",
      diet: ["gluten-free"],
      cal: 650,
      protein: 32,
      tag: "Chef's Choice",
      desc: "Velvety collagen-rich chicken bone emulsion infused with shaved Italian black truffles, tender chicken chashu, and ajitama egg.",
    },
    {
      id: "kitch-lobster-miso",
      name: "Lobster & Crab Butter Miso",
      price: 590,
      cat: "kitchen",
      spice: "mild",
      diet: [],
      cal: 680,
      protein: 36,
      tag: "Signature",
      desc: "Decadent Hokkaido seafood miso broth loaded with sweet butter-poached crab, charred sweet corn, and thick springy wheat noodles.",
    },
    {
      id: "kitch-smoked-duck-shoyu",
      name: "Smoked Duck Breast Shoyu",
      price: 520,
      cat: "kitchen",
      spice: "mild",
      diet: [],
      cal: 590,
      protein: 30,
      tag: "New",
      desc: "Applewood-smoked tender duck breast slices on aged 100-year cedar tamari broth with mountain sansho pepper oil and braised leeks.",
    },
    {
      id: "kitch-tsukemen-dip",
      name: "Crispy Tsukemen Dipping Noodles",
      price: 490,
      cat: "kitchen",
      spice: "medium",
      diet: [],
      cal: 720,
      protein: 34,
      tag: "Bestseller",
      desc: "Thick chilled noodles served with an ultra-concentrated 24-hour pork and seafood dipping broth, lime wedge, and seared chashu.",
    },
    {
      id: "kitch-mala-beef-ramen",
      name: "Mala Szechuan Beef Brisket Ramen",
      price: 510,
      cat: "kitchen",
      spice: "hot",
      diet: [],
      cal: 660,
      protein: 33,
      tag: "Spicy",
      desc: "12-hour slow-braised beef brisket simmered in tingling red Sichuan peppercorn broth with crisp lotus root chips and baby bok choy.",
    },
    {
      id: "kitch-spicy-mazemen",
      name: "Spicy Tokyo Mazemen (Dry Ramen)",
      price: 440,
      cat: "kitchen",
      spice: "medium",
      diet: [],
      cal: 580,
      protein: 26,
      tag: "Bestseller",
      desc: "Brothless artisan noodles dry-tossed in garlic-chili tare with spiced minced pork, molten onsen egg, nori powder, and scallions.",
    },
    {
      id: "kitch-kimchi-jigae-ramen",
      name: "Kimchi & Pork Belly Jigae Ramen",
      price: 470,
      cat: "kitchen",
      spice: "hot",
      diet: [],
      cal: 610,
      protein: 29,
      tag: "Spicy",
      desc: "House-fermented spicy kimchi broth, melting pork belly, organic silken tofu, and spring onions for a restorative, fiery slurp.",
    },
    {
      id: "kitch-truffle-mushroom-maze",
      name: "Black Truffle Mushroom Mazemen",
      price: 460,
      cat: "kitchen",
      spice: "mild",
      diet: ["vegetarian", "vegan"],
      cal: 510,
      protein: 20,
      tag: "Vegan",
      desc: "Brothless dry ramen tossed in roasted wild mushroom puree, cold-pressed truffle oil, king oyster steaks, and crispy garlic chips.",
    },
    {
      id: "kitch-softshell-crab-shio",
      name: "Crispy Soft-Shell Crab Shio",
      price: 560,
      cat: "kitchen",
      spice: "mild",
      diet: [],
      cal: 630,
      protein: 31,
      tag: "Chef's Choice",
      desc: "Crisp golden whole soft-shell crab resting on pristine sea salt and kombu dashi broth with yuzu citrus oil and seaweed.",
    },
    {
      id: "kitch-gf-golden-paitan",
      name: "Gluten-Free Golden Chicken Paitan",
      price: 480,
      cat: "kitchen",
      spice: "mild",
      diet: ["gluten-free"],
      cal: 520,
      protein: 28,
      tag: "Gluten-Free",
      desc: "Rich and comforting chicken bone broth paired with springy gluten-free artisan rice noodles, chicken chashu, and ajitama egg.",
    },

    // 1. TONKOTSU BROTHS (Rich & Creamy 18-hr Simmer)
    {
      id: "house-tonkotsu",
      name: "House Signature Tonkotsu",
      price: 420,
      cat: "tonkotsu",
      spice: "mild",
      diet: [],
      cal: 620,
      protein: 28,
      tag: "Bestseller",
      desc: "18-hour silky pork bone broth, tender chashu, ajitama egg, wood-ear mushrooms, scallions.",
    },
    {
      id: "black-garlic-tonkotsu",
      name: "Mayu Black Garlic Tonkotsu",
      price: 460,
      cat: "tonkotsu",
      spice: "mild",
      diet: [],
      cal: 640,
      protein: 29,
      tag: "Chef's Choice",
      desc: "Our rich house tonkotsu layered with 7-stage roasted black garlic oil and crisp shallots.",
    },
    {
      id: "sesame-tonkotsu",
      name: "Toasted Sesame Tonkotsu",
      price: 440,
      cat: "tonkotsu",
      spice: "mild",
      diet: [],
      cal: 630,
      protein: 27,
      tag: "",
      desc: "Creamy pork marrow emulsion with stone-ground white sesame, chashu, and nori.",
    },
    {
      id: "chili-tonkotsu",
      name: "Chili Velvet Tonkotsu",
      price: 470,
      cat: "tonkotsu",
      spice: "medium",
      diet: [],
      cal: 650,
      protein: 28,
      tag: "Spicy",
      desc: "Velvety broth lifted with house Chiu Chow chili crunch, braised bamboo, and fresh greens.",
    },
    {
      id: "ginger-tonkotsu",
      name: "Warming Ginger Tonkotsu",
      price: 450,
      cat: "tonkotsu",
      spice: "mild",
      diet: [],
      cal: 610,
      protein: 27,
      tag: "",
      desc: "Silky broth infused with shredded highland ginger and scallion oil for a clean soothing slurp.",
    },
    {
      id: "tantan-tonkotsu",
      name: "Tantanmen Pork Tonkotsu",
      price: 480,
      cat: "tonkotsu",
      spice: "hot",
      diet: [],
      cal: 670,
      protein: 30,
      tag: "Spicy",
      desc: "Spiced minced pork, Sichuan chili paste, crushed peanuts, and rich tonkotsu broth.",
    },
    {
      id: "mushroom-tonkotsu",
      name: "Charred Shiitake Tonkotsu",
      price: 450,
      cat: "tonkotsu",
      spice: "mild",
      diet: [],
      cal: 590,
      protein: 24,
      tag: "",
      desc: "Pork bone broth paired with butter-seared wild mushrooms and cracked black pepper.",
    },
    {
      id: "tonkotsu-deluxe",
      name: "Epicure Tonkotsu Deluxe",
      price: 520,
      cat: "tonkotsu",
      spice: "mild",
      diet: [],
      cal: 720,
      protein: 34,
      tag: "Bestseller",
      desc: "Double chashu belly, whole seasoned ajitama egg, nori sheet, menma bamboo, and aroma oil.",
    },
    {
      id: "vegan-cashew-tonkotsu",
      name: "Creamy Plant Tonkotsu",
      price: 440,
      cat: "tonkotsu",
      spice: "mild",
      diet: ["vegetarian", "vegan"],
      cal: 540,
      protein: 21,
      tag: "Vegan",
      desc: "Creamy roasted cashew, oat, and mushroom broth with torched tofu steaks and black garlic oil.",
    },
    {
      id: "gf-house-tonkotsu",
      name: "Gluten-Free Tonkotsu Rice Bowl",
      price: 450,
      cat: "tonkotsu",
      spice: "mild",
      diet: ["gluten-free"],
      cal: 580,
      protein: 26,
      tag: "Gluten-Free",
      desc: "18-hour pork broth served over artisanal springy rice noodles with chashu and bamboo.",
    },

    // 2. SHOYU BROTHS (Savory & Clear Umami)
    {
      id: "tokyo-shoyu",
      name: "Tokyo Classic Shoyu",
      price: 390,
      cat: "shoyu",
      spice: "mild",
      diet: [],
      cal: 520,
      protein: 26,
      tag: "Bestseller",
      desc: "Barrel-aged soy tare, golden chicken broth, slow-braised chashu, and fresh spring onions.",
    },
    {
      id: "chashu-shoyu",
      name: "Double Chashu Shoyu",
      price: 440,
      cat: "shoyu",
      spice: "mild",
      diet: [],
      cal: 580,
      protein: 30,
      tag: "",
      desc: "Four slices of melting pork belly, seasoned soy broth, nori, and bamboo shoot crunch.",
    },
    {
      id: "mushroom-shoyu",
      name: "Wild Forest Mushroom Shoyu",
      price: 410,
      cat: "shoyu",
      spice: "mild",
      diet: ["vegetarian"],
      cal: 490,
      protein: 18,
      tag: "Vegetarian",
      desc: "Kombu and dried shiitake reduction, charred king oyster mushrooms, spring greens.",
    },
    {
      id: "ginger-chicken-shoyu",
      name: "Ginger Chicken Shoyu",
      price: 430,
      cat: "shoyu",
      spice: "mild",
      diet: [],
      cal: 540,
      protein: 28,
      tag: "",
      desc: "Free-range chicken broth, aged tamari tare, poached chicken breast, and ginger julienne.",
    },
    {
      id: "crispy-tofu-shoyu",
      name: "Crispy Tofu Shoyu",
      price: 400,
      cat: "shoyu",
      spice: "mild",
      diet: ["vegetarian", "vegan"],
      cal: 470,
      protein: 16,
      tag: "Vegan",
      desc: "Golden fried organic tofu, soy dashi, seasonal leafy greens, and sesame seed finish.",
    },
    {
      id: "wagyu-shoyu",
      name: "Wagyu Beef Shoyu",
      price: 540,
      cat: "shoyu",
      spice: "mild",
      diet: [],
      cal: 630,
      protein: 33,
      tag: "Chef's Choice",
      desc: "Tender seared beef slices, rich beef-bone shoyu broth, scallions, and truffle oil mist.",
    },
    {
      id: "spicy-chicken-shoyu",
      name: "Spicy Bird Shoyu",
      price: 450,
      cat: "shoyu",
      spice: "medium",
      diet: [],
      cal: 560,
      protein: 28,
      tag: "Spicy",
      desc: "Savory chicken broth with toasted chili oil, tender chicken chashu, and bok choy.",
    },
    {
      id: "fire-tokyo-shoyu",
      name: "Habanero Shoyu Blast",
      price: 460,
      cat: "shoyu",
      spice: "hot",
      diet: [],
      cal: 550,
      protein: 27,
      tag: "Spicy",
      desc: "Classic soy tare heated with roasted habanero chili oil, braised pork, and crunchy scallions.",
    },
    {
      id: "gf-tamari-shoyu",
      name: "Gluten-Free Tamari Shoyu",
      price: 420,
      cat: "shoyu",
      spice: "mild",
      diet: ["gluten-free"],
      cal: 480,
      protein: 24,
      tag: "Gluten-Free",
      desc: "100% wheat-free aged organic tamari soy tare, chicken broth, and gluten-free noodles.",
    },
    {
      id: "shoyu-deluxe",
      name: "Tokyo Shoyu Deluxe",
      price: 490,
      cat: "shoyu",
      spice: "mild",
      diet: [],
      cal: 640,
      protein: 32,
      tag: "",
      desc: "Loaded with braised pork, ajitama egg, bamboo shoots, narutomaki, and crispy nori.",
    },

    // 3. MISO BROTHS (Deep, Toasted & Hearty)
    {
      id: "hokkaido-miso",
      name: "Hokkaido Butter Corn Miso",
      price: 430,
      cat: "miso",
      spice: "mild",
      diet: [],
      cal: 610,
      protein: 26,
      tag: "Bestseller",
      desc: "Toasted red and white miso, sweet Hokkaido butter, charred sweet corn, and tender pork.",
    },
    {
      id: "garden-miso",
      name: "Garden Harvest Miso",
      price: 390,
      cat: "miso",
      spice: "mild",
      diet: ["vegetarian"],
      cal: 480,
      protein: 16,
      tag: "Vegetarian",
      desc: "Earthy fermented miso, braised tofu cubes, steamed bok choy, corn, and scallions.",
    },
    {
      id: "black-sesame-miso",
      name: "Kurogoma Black Sesame Miso",
      price: 450,
      cat: "miso",
      spice: "mild",
      diet: [],
      cal: 600,
      protein: 24,
      tag: "",
      desc: "Rich roasted black sesame paste, savory miso tare, chashu slices, and roasted garlic.",
    },
    {
      id: "chili-miso",
      name: "Fiery Fire Miso",
      price: 460,
      cat: "miso",
      spice: "medium",
      diet: [],
      cal: 620,
      protein: 25,
      tag: "Spicy",
      desc: "Gochujang chili miso paste, chili-charred corn, chashu, and hot sesame oil.",
    },
    {
      id: "volcano-extreme-miso",
      name: "Volcano Extra-Hot Miso",
      price: 480,
      cat: "miso",
      spice: "extra",
      diet: [],
      cal: 640,
      protein: 27,
      tag: "Spicy",
      desc: "Triple chili blend, ghost pepper oil, toasted miso, braised pork, and crispy shallots.",
    },
    {
      id: "roasted-garlic-miso",
      name: "Roasted Garlic Miso",
      price: 450,
      cat: "miso",
      spice: "mild",
      diet: [],
      cal: 590,
      protein: 24,
      tag: "",
      desc: "Slow-roasted whole garlic cloves mashed into a rich winter miso broth with scallions.",
    },
    {
      id: "sesame-butter-miso",
      name: "Creamy Sesame Butter Miso",
      price: 460,
      cat: "miso",
      spice: "mild",
      diet: [],
      cal: 650,
      protein: 25,
      tag: "",
      desc: "Rich and nutty miso with whipped grass-fed butter, white sesame, and soft egg.",
    },
    {
      id: "mushroom-miso",
      name: "Truffled Shiitake Miso",
      price: 470,
      cat: "miso",
      spice: "mild",
      diet: ["vegetarian"],
      cal: 520,
      protein: 18,
      tag: "Vegetarian",
      desc: "Deep umami miso broth, assorted forest mushrooms, truffle glaze, and spring onions.",
    },
    {
      id: "tofu-miso",
      name: "Silken Tofu Miso",
      price: 410,
      cat: "miso",
      spice: "mild",
      diet: ["vegetarian", "vegan"],
      cal: 470,
      protein: 17,
      tag: "Vegan",
      desc: "Delicate silken tofu, organic white miso, wood-ear mushrooms, and seaweed.",
    },
    {
      id: "gf-miso-bowl",
      name: "Gluten-Free Rice Miso",
      price: 440,
      cat: "miso",
      spice: "mild",
      diet: ["gluten-free"],
      cal: 550,
      protein: 22,
      tag: "Gluten-Free",
      desc: "Fermented certified gluten-free miso with springy rice noodles, sweet corn, and chicken.",
    },

    // 4. SHIO BROTHS (Clean, Sea Salt & Citrus)
    {
      id: "yuzu-shio",
      name: "Yuzu Citrus Shio",
      price: 400,
      cat: "shio",
      spice: "mild",
      diet: [],
      cal: 480,
      protein: 24,
      tag: "New",
      desc: "Sea salt tare infused with fresh Japanese yuzu zest, clear chicken broth, and chicken chashu.",
    },
    {
      id: "sesame-shio",
      name: "Toasted Sesame Shio",
      price: 410,
      cat: "shio",
      spice: "mild",
      diet: [],
      cal: 500,
      protein: 23,
      tag: "",
      desc: "Delicate golden sea salt broth with white sesame seeds, bamboo shoots, and ajitama egg.",
    },
    {
      id: "ginger-shio",
      name: "Highland Ginger Shio",
      price: 420,
      cat: "shio",
      spice: "mild",
      diet: [],
      cal: 510,
      protein: 25,
      tag: "",
      desc: "Aromatic crushed ginger simmered in crystal clear broth with poached chicken and greens.",
    },
    {
      id: "spicy-citrus-shio",
      name: "Yuzu Kosho Spicy Shio",
      price: 430,
      cat: "shio",
      spice: "medium",
      diet: [],
      cal: 490,
      protein: 24,
      tag: "Spicy",
      desc: "Fermented green chili and yuzu kosho pepper paste melted into delicate salt broth.",
    },
    {
      id: "tofu-shio",
      name: "Silken Tofu & Seaweed Shio",
      price: 390,
      cat: "shio",
      spice: "mild",
      diet: ["vegetarian", "vegan"],
      cal: 430,
      protein: 15,
      tag: "Vegan",
      desc: "Mineral-rich kombu broth, tender organic tofu, wakame seaweed, and sweet scallions.",
    },
    {
      id: "classic-chicken-shio",
      name: "Pure Heritage Chicken Shio",
      price: 390,
      cat: "shio",
      spice: "mild",
      diet: [],
      cal: 470,
      protein: 26,
      tag: "",
      desc: "Light and soul-satisfying chicken broth with charred spring onion and crispy nori.",
    },
    {
      id: "seaweed-shio",
      name: "Triple Seaweed Shio",
      price: 410,
      cat: "shio",
      spice: "mild",
      diet: ["vegetarian"],
      cal: 440,
      protein: 14,
      tag: "Vegetarian",
      desc: "Kombu, nori, and wakame seaweed broth with roasted sesame seeds and tender bamboo.",
    },
    {
      id: "mushroom-shio",
      name: "King Oyster Shio",
      price: 410,
      cat: "shio",
      spice: "mild",
      diet: ["vegetarian"],
      cal: 450,
      protein: 16,
      tag: "",
      desc: "Clear dashi broth with lightly torched king oyster mushrooms and delicate greens.",
    },
    {
      id: "gf-yuzu-shio",
      name: "Gluten-Free Yuzu Shio",
      price: 420,
      cat: "shio",
      spice: "mild",
      diet: ["gluten-free"],
      cal: 460,
      protein: 22,
      tag: "Gluten-Free",
      desc: "Clear sea salt citrus broth paired with springy rice noodles, poached chicken, and greens.",
    },
    {
      id: "shio-deluxe",
      name: "Crystal Shio Deluxe",
      price: 480,
      cat: "shio",
      spice: "mild",
      diet: [],
      cal: 560,
      protein: 30,
      tag: "",
      desc: "Free-range chicken, whole seasoned egg, yuzu peel, chashu, and tender greens.",
    },

    // 5. SPICY & TANTANMEN (Warm, Fiery & Bold)
    {
      id: "fire-miso",
      name: "Volcano Fire Miso",
      price: 450,
      cat: "spicy",
      spice: "hot",
      diet: [],
      cal: 640,
      protein: 26,
      tag: "Spicy",
      desc: "Bold toasted miso paste blended with ghost pepper chili crisp, pork belly, and sesame.",
    },
    {
      id: "chili-garlic-tonkotsu",
      name: "Spicy Garlic Tonkotsu",
      price: 470,
      cat: "spicy",
      spice: "hot",
      diet: [],
      cal: 680,
      protein: 29,
      tag: "Bestseller",
      desc: "Creamy pork marrow soup with roasted chili oil, crushed fried garlic, and ajitama egg.",
    },
    {
      id: "red-dragon-miso",
      name: "Red Dragon Extreme Miso",
      price: 490,
      cat: "spicy",
      spice: "extra",
      diet: [],
      cal: 700,
      protein: 28,
      tag: "Spicy",
      desc: "Warning: Extra hot! Triple chili paste, habanero tare, pork chashu, and fiery chili threads.",
    },
    {
      id: "chili-sesame-shoyu",
      name: "Chili Sesame Shoyu",
      price: 450,
      cat: "spicy",
      spice: "medium",
      diet: [],
      cal: 560,
      protein: 25,
      tag: "",
      desc: "Savory soy broth spiced with roasted red peppers, sesame oil, and tender pork.",
    },
    {
      id: "spicy-sesame-shoyu",
      name: "Spicy Dan Dan Shoyu",
      price: 460,
      cat: "spicy",
      spice: "medium",
      diet: [],
      cal: 570,
      protein: 25,
      tag: "",
      desc: "Sesame-forward soy tare with ground spiced chicken, chili oil, and scallions.",
    },
    {
      id: "spicy-mushroom-miso",
      name: "Spicy Forest Miso",
      price: 470,
      cat: "spicy",
      spice: "hot",
      diet: ["vegetarian"],
      cal: 540,
      protein: 18,
      tag: "Vegetarian",
      desc: "Earthy mushrooms, bold miso, and warming chili.",
    },
    {
      id: "fire-tofu",
      name: "Fiery Tofu Bowl",
      price: 440,
      cat: "spicy",
      spice: "hot",
      diet: ["vegetarian", "vegan"],
      cal: 510,
      protein: 17,
      tag: "Vegan",
      desc: "Crisp seasoned tofu steaks in chili miso broth with sweet corn and roasted sesame.",
    },
    {
      id: "chili-chicken-shio",
      name: "Chili Citrus Chicken Shio",
      price: 450,
      cat: "spicy",
      spice: "medium",
      diet: [],
      cal: 520,
      protein: 27,
      tag: "",
      desc: "Bright salt broth with poached chicken breast, yuzu zest, and chili oil drizzle.",
    },
    {
      id: "gf-spicy-tantan",
      name: "Gluten-Free Spicy Tantan",
      price: 480,
      cat: "spicy",
      spice: "hot",
      diet: ["gluten-free"],
      cal: 590,
      protein: 25,
      tag: "Gluten-Free",
      desc: "Toasted sesame chili broth with minced chicken, bok choy, and springy rice noodles.",
    },
    {
      id: "dragon-tonkotsu",
      name: "Dragon Breath Tonkotsu",
      price: 500,
      cat: "spicy",
      spice: "extra",
      diet: [],
      cal: 730,
      protein: 32,
      tag: "Spicy",
      desc: "Our richest tonkotsu broth spiced with raw red chili puree and garlic cloves.",
    },

    // 6. HAND-PULLED & WOK NOODLES (Eat-Up Reference Style)
    {
      id: "spicy-garlic-noodles",
      name: "Spicy Garlic Noodles",
      price: 410,
      cat: "noodles",
      spice: "medium",
      diet: [],
      cal: 520,
      protein: 20,
      tag: "Bestseller",
      desc: "Handcrafted wheat noodles wok-tossed in bold garlic chili butter, fresh chilies, and scallions.",
    },
    {
      id: "teriyaki-chicken-noodles",
      name: "Teriyaki Glazed Noodles",
      price: 430,
      cat: "noodles",
      spice: "mild",
      diet: [],
      cal: 560,
      protein: 28,
      tag: "",
      desc: "Sweet, savory, and satisfying wok noodles with caramelized chicken, broccoli, and sesame.",
    },
    {
      id: "wok-seared-steak-noodles",
      name: "Wok-Seared Steak Noodles",
      price: 490,
      cat: "noodles",
      spice: "mild",
      diet: [],
      cal: 620,
      protein: 32,
      tag: "Chef's Choice",
      desc: "Garlicky, juicy seared steak cubes tossed with thick springy noodles and greens.",
    },
    {
      id: "veggie-delight-noodles",
      name: "Veggie Delight Chow Mein",
      price: 380,
      cat: "noodles",
      spice: "mild",
      diet: ["vegetarian", "vegan"],
      cal: 450,
      protein: 16,
      tag: "Vegan",
      desc: "Fresh seasonal vegetables, lotus root, crisp tofu, and hand-pulled noodles in light soy glaze.",
    },
    {
      id: "mango-chili-noodles",
      name: "Mango Chili Noodles",
      price: 410,
      cat: "noodles",
      spice: "medium",
      diet: ["vegetarian"],
      cal: 510,
      protein: 18,
      tag: "New",
      desc: "Sweet Alphonso mango glaze paired with bird's eye chili heat and chewy wheat noodles.",
    },
    {
      id: "creamy-peanut-noodles",
      name: "Creamy Peanut Noodles",
      price: 420,
      cat: "noodles",
      spice: "mild",
      diet: ["vegetarian"],
      cal: 580,
      protein: 20,
      tag: "",
      desc: "Rich, nutty, comforting peanut-sesame sauce coated over warm springy noodles with cucumber.",
    },
    {
      id: "spicy-dandan-wok",
      name: "Spicy Dan Dan Wok Noodles",
      price: 440,
      cat: "noodles",
      spice: "hot",
      diet: [],
      cal: 610,
      protein: 25,
      tag: "Spicy",
      desc: "Fiery wok-tossed noodles with spiced ground pork, crushed peanuts, and fresh cilantro.",
    },
    {
      id: "gf-singapore-noodles",
      name: "Gluten-Free Singapore Wok Vermicelli",
      price: 420,
      cat: "noodles",
      spice: "medium",
      diet: ["gluten-free"],
      cal: 460,
      protein: 18,
      tag: "Gluten-Free",
      desc: "Thin rice noodles wok-charred with mild yellow curry powder, bell peppers, eggs, and scallions.",
    },
  ];

  // Default dish image paths to local assets/images photos
  MENU.forEach((item) => {
    if (item.id === "kitch-mala-beef-ramen" || item.name.includes("Mala Szechuan")) {
      item.image = "assets/images/Wok-Seared Steak Noodles.jpg";
    } else if (item.id === "kitch-spicy-mazemen" || item.name.includes("Tokyo Mazemen")) {
      item.image = "assets/images/Black Truffle Mushroom Mazemen.jpg";
    } else {
      item.image = `assets/images/${item.name}.jpg`;
    }
  });

  const CATS = [
    {
      id: "kitchen",
      label: "Chef's Kitchen",
      count: 10,
      hint: "Signature house creations & rare tare bowls",
    },
    {
      id: "tonkotsu",
      label: "Tonkotsu",
      count: 10,
      hint: "Rich & creamy 18-hr pork bone",
    },
    {
      id: "shoyu",
      label: "Tokyo Shoyu",
      count: 10,
      hint: "Savory & clear umami soy",
    },
    {
      id: "miso",
      label: "Hokkaido Miso",
      count: 10,
      hint: "Toasted & hearty fermented miso",
    },
    {
      id: "shio",
      label: "Yuzu Shio",
      count: 10,
      hint: "Clean sea salt & yuzu citrus",
    },
    {
      id: "spicy",
      label: "Spicy & Tantan",
      count: 10,
      hint: "Fiery chili crisp & tantanmen",
    },
    {
      id: "noodles",
      label: "Wok Noodles",
      count: 8,
      hint: "Hand-pulled & wok-tossed",
    },
  ];

  const PROTEIN_OPTIONS = [
    { id: "tofu", label: "Silken Tofu", extra: 0, cal: 80, badge: "Vegan" },
    {
      id: "chicken",
      label: "Braised Chicken",
      extra: 50,
      cal: 140,
      badge: "Classic",
    },
    {
      id: "chashu",
      label: "Pork Belly Chashu",
      extra: 80,
      cal: 210,
      badge: "Signature",
    },
    {
      id: "shrimp",
      label: "Jumbo Shrimp",
      extra: 90,
      cal: 110,
      badge: "Seafood",
    },
  ];

  const TOPPING_OPTIONS = [
    { id: "egg", label: "Ajitama Egg", extra: 70 },
    { id: "bamboo", label: "Menma Bamboo", extra: 40 },
    { id: "mushrooms", label: "Shiitake Mushrooms", extra: 40 },
    { id: "black-garlic", label: "Black Garlic Oil", extra: 30 },
    { id: "corn", label: "Sweet Corn", extra: 20 },
    { id: "bokchoy", label: "Fresh Bok Choy", extra: 30 },
    { id: "chili", label: "Extra Chili Crisp", extra: 20 },
    { id: "onions", label: "Green Onions", extra: 20 },
  ];

  const SPICE_LEVELS = ["Mild", "Medium", "Hot", "Extra Hot"];

  // Favorites tracking
  const heartsKey = "epicure-favorites";
  const readHearts = () => {
    try {
      return JSON.parse(localStorage.getItem(heartsKey) || "[]");
    } catch {
      return [];
    }
  };
  let hearts = new Set(readHearts());
  const toggleHeart = (id) => {
    if (hearts.has(id)) hearts.delete(id);
    else hearts.add(id);
    localStorage.setItem(heartsKey, JSON.stringify([...hearts]));
  };

  /* ==========================================================================
     INTERACTIVE MENU BOARD (Eat-Up 3-Column Interface)
     ========================================================================== */
  const initializeMenuBoard = () => {
    const board = document.querySelector("[data-menu-board]");
    if (!board) return;

    // Check URL hash for category
    const hash = location.hash.replace("#", "");
    const initialCat = CATS.some((c) => c.id === hash) ? hash : "kitchen";

    const state = {
      cat: initialCat,
      chip: "all",
      spice: new Set(),
      diet: new Set(),
      sort: "popular",
      selectedItem: MENU.find((m) => m.cat === initialCat) || MENU[0],
      activeTab: "customize",
      selectedProtein: "chicken",
      selectedToppings: new Set(["egg"]),
      spiceLevelIndex: 1, // Medium
      noodleFirmness: "Classic",
      quantity: 1,
    };

    // Filter items based on active criteria
    const getFilteredItems = () => {
      let items = MENU.filter((item) => item.cat === state.cat);

      // Chips
      if (state.chip === "best")
        items = items.filter(
          (item) =>
            item.tag === "Bestseller" ||
            item.tag === "Chef's Choice" ||
            item.tag === "Signature",
        );
      if (state.chip === "spicy")
        items = items.filter((item) => item.spice !== "mild");
      if (state.chip === "veg")
        items = items.filter(
          (item) =>
            item.diet.includes("vegetarian") || item.diet.includes("vegan"),
        );
      if (state.chip === "new")
        items = items.filter((item) => item.tag === "New");

      // Checkbox filters
      if (state.spice.size)
        items = items.filter((item) => state.spice.has(item.spice));
      if (state.diet.size)
        items = items.filter((item) =>
          [...state.diet].some((d) => item.diet.includes(d)),
        );

      // Sort
      if (state.sort === "low")
        items = [...items].sort((a, b) => a.price - b.price);
      if (state.sort === "high")
        items = [...items].sort((a, b) => b.price - a.price);
      if (state.sort === "new")
        items = [...items].sort(
          (a, b) => (b.tag === "New") - (a.tag === "New"),
        );

      return items;
    };

    // Render Center Grid of Dish Cards
    const renderDishesGrid = () => {
      const grid = board.querySelector("[data-menu-grid]");
      const countLabel = board.querySelector("[data-menu-count]");
      const heading = board.querySelector("[data-menu-heading]");

      const currentCatObj = CATS.find((c) => c.id === state.cat) || CATS[0];
      if (heading) heading.textContent = currentCatObj.label;

      const items = getFilteredItems();
      if (countLabel)
        countLabel.textContent = `${items.length} crafted dishes · ${currentCatObj.hint}`;

      if (!grid) return;

      const staticCards = Array.from(grid.querySelectorAll(".dish-card"));
      if (staticCards.length > 0) {
        const allowedIds = new Set(items.map((i) => i.id));
        let emptyBanner = grid.querySelector("[data-empty-banner]");

        if (items.length === 0) {
          staticCards.forEach((c) => (c.style.display = "none"));
          if (!emptyBanner) {
            emptyBanner = document.createElement("div");
            emptyBanner.setAttribute("data-empty-banner", "");
            emptyBanner.className =
              "col-span-full py-8 text-center text-[var(--muted)] rounded-2xl border border-[var(--line)] bg-[var(--raised)] p-6";
            emptyBanner.innerHTML = `
              <p class="text-base font-semibold text-[var(--ink)] mb-2">No bowls in this specific broth matched all filters.</p>
              <p class="text-xs text-[var(--muted)] mb-4">Try clearing your filters or check out our other signature bowls.</p>
              <button class="cta-primary" type="button" data-reset-filters>Clear All Filters</button>
            `;
            grid.append(emptyBanner);
            emptyBanner
              .querySelector("[data-reset-filters]")
              ?.addEventListener("click", () => {
                state.chip = "all";
                state.spice.clear();
                state.diet.clear();
                board
                  .querySelectorAll("[data-spice-filter], [data-diet-filter]")
                  .forEach((input) => (input.checked = false));
                board
                  .querySelectorAll(".chip")
                  .forEach((chip) =>
                    chip.setAttribute(
                      "aria-pressed",
                      chip.dataset.chip === "all" ? "true" : "false",
                    ),
                  );
                renderDishesGrid();
              });
          } else {
            emptyBanner.style.display = "block";
          }
        } else {
          if (emptyBanner) emptyBanner.style.display = "none";
          staticCards.forEach((card) => {
            const isVisible = allowedIds.has(card.dataset.dishId);
            card.style.display = isVisible ? "flex" : "none";
            if (isVisible) {
              card.classList.toggle(
                "is-active",
                state.selectedItem?.id === card.dataset.dishId,
              );
            }
          });
          // If sorted, re-order matching cards
          if (state.sort !== "popular") {
            items.forEach((item) => {
              const card = grid.querySelector(`[data-dish-id="${item.id}"]`);
              if (card) grid.appendChild(card);
            });
          }
        }
        return;
      }

      grid.replaceChildren();

      // If no dishes match the exact combination, show helpful alternatives so it's never empty!
      if (items.length === 0) {
        const fallbacks = MENU.filter((m) => m.cat === "kitchen").slice(0, 3);
        grid.innerHTML = `
          <div class="col-span-full py-8 text-center text-[var(--muted)] rounded-2xl border border-[var(--line)] bg-[var(--raised)] p-6">
            <p class="text-base font-semibold text-[var(--ink)] mb-2">No bowls in this specific broth matched all filters.</p>
            <p class="text-xs text-[var(--muted)] mb-4">Try clearing your filters or check out these signature bowls from our Chef's Kitchen:</p>
            <button class="cta-primary" type="button" data-reset-filters>Clear All Filters</button>
          </div>
        `;
        fallbacks.forEach((item) => {
          const card = document.createElement("article");
          card.className = "dish-card";
          const imgUrl = IMG[item.cat] || IMG.kitchen;
          card.innerHTML = `
            <div class="dish-media">
              <img src="${imgUrl}" alt="${item.name}" loading="lazy" />
              <span class="dish-badge">${item.tag || "Chef's Special"}</span>
            </div>
            <div class="dish-content">
              <div class="dish-header-row">
                <h3 class="dish-title">${item.name}</h3>
                <span class="dish-price">₹${item.price}</span>
              </div>
              <p class="dish-desc">${item.desc}</p>
              <div class="dish-footer-row">
                <div class="dish-meta-info"><span>⚡ ${item.cal} cal</span><span>💪 ${item.protein}g protein</span></div>
                <button class="dish-add-circle" type="button" data-quick-add="${item.id}">+</button>
              </div>
            </div>
          `;
          card.addEventListener("click", () => {
            state.selectedItem = item;
            renderDrawer();
          });
          card
            .querySelector("[data-quick-add]")
            ?.addEventListener("click", (e) => {
              e.stopPropagation();
              cart[`${item.id}-quick`] = {
                name: item.name,
                price: item.price,
                quantity: 1,
                customization: "Standard Recipe",
              };
              saveCart();
            });
          grid.append(card);
        });

        grid
          .querySelector("[data-reset-filters]")
          ?.addEventListener("click", () => {
            state.chip = "all";
            state.spice.clear();
            state.diet.clear();
            board
              .querySelectorAll("[data-spice-filter], [data-diet-filter]")
              .forEach((input) => (input.checked = false));
            board
              .querySelectorAll(".chip")
              .forEach((chip) =>
                chip.setAttribute("aria-pressed", chip.dataset.chip === "all"),
              );
            renderDishesGrid();
          });
        return;
      }

      items.forEach((item) => {
        const card = document.createElement("article");
        card.className = `dish-card ${state.selectedItem?.id === item.id ? "is-active" : ""}`;
        card.dataset.dishId = item.id;

        const isFav = hearts.has(item.id);
        const imgUrl = IMG[item.cat] || IMG.tonkotsu;
        const chiliIcon =
          item.spice === "mild"
            ? "🌱"
            : item.spice === "medium"
              ? "🌶️"
              : item.spice === "hot"
                ? "🌶️🌶️"
                : "🔥";

        card.innerHTML = `
          <div class="dish-media">
            <img src="${imgUrl}" alt="${item.name}" loading="lazy" />
            ${item.tag ? `<span class="dish-badge ${item.diet.includes("vegetarian") || item.diet.includes("vegan") ? "veg" : item.tag === "New" ? "new" : ""}">${item.tag}</span>` : ""}
            <button class="dish-fav-btn ${isFav ? "active" : ""}" type="button" aria-label="Save ${item.name} to favorites" data-fav-id="${item.id}">
              ${isFav ? "♥" : "♡"}
            </button>
          </div>
          <div class="dish-content">
            <div class="dish-header-row">
              <h3 class="dish-title">${item.name} <span class="text-sm">${chiliIcon}</span></h3>
              <span class="dish-price">₹${item.price}</span>
            </div>
            <p class="dish-desc">${item.desc}</p>
            <div class="dish-footer-row">
              <div class="dish-meta-info">
                <span>⚡ ${item.cal} cal</span>
                <span>💪 ${item.protein}g protein</span>
              </div>
              <button class="dish-add-circle" type="button" aria-label="Add ${item.name} to order" data-quick-add="${item.id}">+</button>
            </div>
          </div>
        `;

        // Click on card opens customization drawer
        card.addEventListener("click", (e) => {
          if (
            e.target.closest("[data-fav-id]") ||
            e.target.closest("[data-quick-add]")
          )
            return;
          state.selectedItem = item;
          state.quantity = 1;
          renderDrawer();
          board
            .querySelectorAll(".dish-card")
            .forEach((c) => c.classList.remove("is-active"));
          card.classList.add("is-active");
          const detail = board.querySelector("[data-menu-detail]");
          detail?.classList.remove("is-closed");
        });

        // Favorite button click
        card.querySelector("[data-fav-id]")?.addEventListener("click", (e) => {
          e.stopPropagation();
          toggleHeart(item.id);
          card
            .querySelector("[data-fav-id]")
            .classList.toggle("active", hearts.has(item.id));
          card.querySelector("[data-fav-id]").textContent = hearts.has(item.id)
            ? "♥"
            : "♡";
        });

        // Quick add button
        card
          .querySelector("[data-quick-add]")
          ?.addEventListener("click", (e) => {
            e.stopPropagation();
            const cartId = `${item.id}-classic`;
            if (!cart[cartId]) {
              cart[cartId] = {
                name: item.name,
                price: item.price,
                quantity: 1,
                customization: "Standard Recipe",
              };
            } else {
              cart[cartId].quantity += 1;
            }
            saveCart();
            const btn = card.querySelector("[data-quick-add]");
            btn.textContent = "✓";
            btn.style.background = "#2e7d32";
            setTimeout(() => {
              btn.textContent = "+";
              btn.style.background = "";
            }, 900);
          });

        grid.append(card);
      });
    };

    // Calculate current customized total
    const getCalculatedPrice = () => {
      if (!state.selectedItem) return 0;
      let total = state.selectedItem.price;

      const prot = PROTEIN_OPTIONS.find((p) => p.id === state.selectedProtein);
      if (prot) total += prot.extra;

      state.selectedToppings.forEach((topId) => {
        const top = TOPPING_OPTIONS.find((t) => t.id === topId);
        if (top) total += top.extra;
      });

      return total * state.quantity;
    };

    // Render Right Customization Drawer (Eat-Up Panel)
    const renderDrawer = () => {
      const detail = board.querySelector("[data-menu-detail]");
      if (!detail) return;
      const item = state.selectedItem || MENU[0];
      const imgUrl = item.image || (IMG[item.cat] || IMG.tonkotsu);
      const currentPrice = getCalculatedPrice();

      detail.innerHTML = `
        <div class="detail-head">
          <div class="detail-img-wrap">
            <img src="${imgUrl}" alt="${item.name}" />
            <button class="detail-close-btn" type="button" aria-label="Close customization panel" data-close-drawer>×</button>
          </div>
          <div class="detail-title-row">
            <div>
              <h2 class="detail-title">${item.name}</h2>
              <p class="m-0 text-xs font-semibold uppercase tracking-wider text-[var(--gold)]">
                ${item.cal} kcal · ${item.protein}g protein
              </p>
            </div>
            <span class="detail-base-price">₹${item.price}</span>
          </div>
          <p class="detail-desc">${item.desc}</p>

          <div class="detail-price-row">
            <span class="text-sm font-semibold text-[var(--muted)]">Portion Size:</span>
            <div class="detail-qty-picker">
              <button class="detail-qty-btn" type="button" data-qty-change="-1" aria-label="Decrease quantity">−</button>
              <span class="detail-qty-num">${state.quantity}</span>
              <button class="detail-qty-btn" type="button" data-qty-change="1" aria-label="Increase quantity">+</button>
            </div>
          </div>
        </div>

        <div class="detail-tabs" role="tablist">
          <button class="detail-tab" type="button" role="tab" data-tab="customize" aria-selected="${state.activeTab === "customize"}">Customize</button>
          <button class="detail-tab" type="button" role="tab" data-tab="nutrition" aria-selected="${state.activeTab === "nutrition"}">Nutrition</button>
          <button class="detail-tab" type="button" role="tab" data-tab="ingredients" aria-selected="${state.activeTab === "ingredients"}">Ingredients</button>
        </div>

        <div class="detail-tab-body">
          ${
            state.activeTab === "customize"
              ? `
            <!-- Protein Selection -->
            <div class="option-group-title">
              <span>Choose Your Protein</span>
              <small>Required</small>
            </div>
            <div class="protein-grid" role="radiogroup" aria-label="Choose your protein">
              ${PROTEIN_OPTIONS.map(
                (prot) => `
                <div class="protein-card" role="radio" aria-checked="${state.selectedProtein === prot.id}" data-protein="${prot.id}">
                  <strong>${prot.label}</strong>
                  <span>${prot.extra > 0 ? `+₹${prot.extra}` : "Included"}</span>
                </div>
              `,
              ).join("")}
            </div>

            <!-- Extra Toppings -->
            <div class="option-group-title">
              <span>Add Extra Toppings</span>
              <small>Optional</small>
            </div>
            <div class="toppings-grid">
              ${TOPPING_OPTIONS.map(
                (top) => `
                <label class="topping-item" aria-checked="${state.selectedToppings.has(top.id)}">
                  <input type="checkbox" data-topping="${top.id}" ${state.selectedToppings.has(top.id) ? "checked" : ""} />
                  <span class="flex-1">${top.label}</span>
                  <strong class="text-xs text-[var(--gold)]">+₹${top.extra}</strong>
                </label>
              `,
              ).join("")}
            </div>

            <!-- Spice Level Slider -->
            <div class="spice-slider-box">
              <div class="option-group-title">
                <span>Spice Level: <strong class="text-[var(--chili)]">${SPICE_LEVELS[state.spiceLevelIndex]}</strong></span>
                <small>Kitchen Calibration</small>
              </div>
              <input class="spice-range-slider" type="range" min="0" max="3" step="1" value="${state.spiceLevelIndex}" data-spice-slider />
              <div class="spice-labels-row">
                <span class="${state.spiceLevelIndex === 0 ? "active" : ""}">Mild</span>
                <span class="${state.spiceLevelIndex === 1 ? "active" : ""}">Medium</span>
                <span class="${state.spiceLevelIndex === 2 ? "active" : ""}">Hot</span>
                <span class="${state.spiceLevelIndex === 3 ? "active" : ""}">Extra Hot</span>
              </div>
            </div>
          `
              : state.activeTab === "nutrition"
                ? `
            <div class="py-4 text-[13.5px] leading-7 text-[var(--muted)]">
              <div class="flex justify-between border-b border-[var(--line)] py-2"><span>Calories</span><strong class="text-[var(--ink)]">${item.cal} kcal</strong></div>
              <div class="flex justify-between border-b border-[var(--line)] py-2"><span>Protein</span><strong class="text-[var(--ink)]">${item.protein} g</strong></div>
              <div class="flex justify-between border-b border-[var(--line)] py-2"><span>Total Fat</span><strong class="text-[var(--ink)]">18 g</strong></div>
              <div class="flex justify-between border-b border-[var(--line)] py-2"><span>Carbohydrates</span><strong class="text-[var(--ink)]">68 g</strong></div>
              <div class="flex justify-between border-b border-[var(--line)] py-2"><span>Dietary Fiber</span><strong class="text-[var(--ink)]">5 g</strong></div>
              <div class="flex justify-between border-b border-[var(--line)] py-2"><span>Sodium</span><strong class="text-[var(--ink)]">980 mg</strong></div>
              <p class="mt-4 text-xs italic">Values calculated based on standard house recipe with fresh wheat noodles.</p>
            </div>
          `
                : `
            <div class="py-4 text-[13.5px] leading-7 text-[var(--muted)]">
              <h4 class="font-semibold text-[var(--ink)] text-sm mb-1">House Broth Base</h4>
              <p class="mb-3">Simmered 18 hours with filtered spring water, roasted allium, aged tamari tare, and kombu dashi.</p>
              <h4 class="font-semibold text-[var(--ink)] text-sm mb-1">Handmade Noodles</h4>
              <p class="mb-3">32% hydration spring wheat flour, mineral-balanced kansui water, aged for 24 hours.</p>
              <h4 class="font-semibold text-[var(--ink)] text-sm mb-1">Toppings</h4>
              <p>Pasture-raised eggs marinated in mirin tare, fresh menma shoots, negi scallions, nori seaweed.</p>
            </div>
          `
          }
        </div>

        <div class="detail-cta-sticky">
          <button class="cta-primary cta-full" type="button" data-add-customized-cart>
            Add to Order — ₹${currentPrice}
          </button>
        </div>
      `;

      // Drawer interactions
      detail
        .querySelector("[data-close-drawer]")
        ?.addEventListener("click", () => {
          detail.classList.add("is-closed");
        });

      detail.querySelectorAll("[data-tab]").forEach((tabBtn) => {
        tabBtn.addEventListener("click", () => {
          state.activeTab = tabBtn.dataset.tab;
          renderDrawer();
        });
      });

      detail
        .querySelector("[data-qty-change='-1']")
        ?.addEventListener("click", () => {
          if (state.quantity > 1) {
            state.quantity -= 1;
            renderDrawer();
          }
        });
      detail
        .querySelector("[data-qty-change='1']")
        ?.addEventListener("click", () => {
          state.quantity += 1;
          renderDrawer();
        });

      detail.querySelectorAll("[data-protein]").forEach((protBtn) => {
        protBtn.addEventListener("click", () => {
          state.selectedProtein = protBtn.dataset.protein;
          renderDrawer();
        });
      });

      detail.querySelectorAll("[data-topping]").forEach((topCheckbox) => {
        topCheckbox.addEventListener("change", (e) => {
          const topId = e.target.dataset.topping;
          if (e.target.checked) state.selectedToppings.add(topId);
          else state.selectedToppings.delete(topId);
          renderDrawer();
        });
      });

      detail
        .querySelector("[data-spice-slider]")
        ?.addEventListener("input", (e) => {
          state.spiceLevelIndex = Number(e.target.value);
          const label = detail.querySelector(".spice-slider-box strong");
          if (label) label.textContent = SPICE_LEVELS[state.spiceLevelIndex];
          const labels = detail.querySelectorAll(".spice-labels-row span");
          labels.forEach((span, idx) =>
            span.classList.toggle("active", idx === state.spiceLevelIndex),
          );
        });

      // Add to Cart action from Drawer
      detail
        .querySelector("[data-add-customized-cart]")
        ?.addEventListener("click", () => {
          const item = state.selectedItem;
          const prot =
            PROTEIN_OPTIONS.find((p) => p.id === state.selectedProtein)
              ?.label || "Standard";
          const topLabels = [...state.selectedToppings]
            .map((t) => TOPPING_OPTIONS.find((o) => o.id === t)?.label)
            .filter(Boolean);
          const customizationSummary = `${prot} · ${SPICE_LEVELS[state.spiceLevelIndex]}${topLabels.length ? ` · +${topLabels.join(", ")}` : ""}`;

          const cartId = `${item.id}-${state.selectedProtein}-${[...state.selectedToppings].sort().join("-")}-${state.spiceLevelIndex}`;
          const unitPrice = getCalculatedPrice() / state.quantity;

          if (!cart[cartId]) {
            cart[cartId] = {
              name: item.name,
              price: unitPrice,
              quantity: state.quantity,
              customization: customizationSummary,
            };
          } else {
            cart[cartId].quantity += state.quantity;
          }

          saveCart();

          const addBtn = detail.querySelector("[data-add-customized-cart]");
          addBtn.textContent = "✓ Added to Order!";
          addBtn.style.background = "#2e7d32";
          setTimeout(() => {
            renderDrawer();
          }, 1000);
        });
    };

    // Render "You Might Also Love" section at bottom
    const renderAlsoLove = () => {
      const container = board.querySelector("[data-also-love-grid]");
      if (!container) return;
      const suggestions = MENU.filter(
        (m) =>
          m.cat !== state.cat &&
          (m.tag === "Bestseller" ||
            m.tag === "Chef's Choice" ||
            m.tag === "Popular" ||
            m.tag === "New"),
      ).slice(0, 4);

      container.replaceChildren();
      suggestions.forEach((sug) => {
        const card = document.createElement("div");
        card.className = "also-love-card";
        const imgUrl = sug.image || (IMG[sug.cat] || IMG.tonkotsu);
        card.innerHTML = `
          <img src="${imgUrl}" alt="${sug.name}" />
          <div class="also-love-info flex-1">
            <strong>${sug.name}</strong>
            <span>₹${sug.price}</span>
          </div>
          <button class="dish-add-circle" type="button" aria-label="Add ${sug.name}" data-sug-add="${sug.id}">+</button>
        `;

        card.querySelector("[data-sug-add]")?.addEventListener("click", (e) => {
          e.stopPropagation();
          const cartId = `${sug.id}-quick`;
          if (!cart[cartId]) {
            cart[cartId] = {
              name: sug.name,
              price: sug.price,
              quantity: 1,
              customization: "Signature Bowl",
            };
          } else {
            cart[cartId].quantity += 1;
          }
          saveCart();
          const btn = card.querySelector("[data-sug-add]");
          btn.textContent = "✓";
          btn.style.background = "#2e7d32";
          setTimeout(() => {
            btn.textContent = "+";
            btn.style.background = "";
          }, 800);
        });

        container.append(card);
      });
    };

    const setCategory = (cat) => {
      state.cat = cat;
      board
        .querySelectorAll(".menu-cat")
        .forEach((b) =>
          b.setAttribute(
            "aria-current",
            b.dataset.cat === cat ? "true" : "false",
          ),
        );
      state.selectedItem = MENU.find((m) => m.cat === cat) || MENU[0];
      renderDishesGrid();
      renderDrawer();
    };

    // Category button clicks in sidebar
    board.querySelectorAll(".menu-cat").forEach((btn) => {
      btn.addEventListener("click", () => {
        setCategory(btn.dataset.cat);
      });
    });

    window.addEventListener("hashchange", () => {
      const h = location.hash.replace("#", "");
      if (CATS.some((c) => c.id === h)) {
        setCategory(h);
      }
    });

    // Chip filter clicks
    board.querySelectorAll(".chip").forEach((chip) => {
      chip.addEventListener("click", () => {
        const chipVal = chip.dataset.chip;
        state.chip = chipVal;
        board
          .querySelectorAll(".chip")
          .forEach((c) =>
            c.setAttribute(
              "aria-pressed",
              c.dataset.chip === chipVal ? "true" : "false",
            ),
          );
        renderDishesGrid();
      });
    });

    // Checkbox filters
    board.querySelectorAll("[data-spice-filter]").forEach((input) => {
      input.addEventListener("change", (e) => {
        if (e.target.checked) state.spice.add(e.target.value);
        else state.spice.delete(e.target.value);
        renderDishesGrid();
      });
    });

    board.querySelectorAll("[data-diet-filter]").forEach((input) => {
      input.addEventListener("change", (e) => {
        if (e.target.checked) state.diet.add(e.target.value);
        else state.diet.delete(e.target.value);
        renderDishesGrid();
      });
    });

    // Sort select
    board.querySelector("[data-sort]")?.addEventListener("change", (e) => {
      state.sort = e.target.value;
      renderDishesGrid();
    });

    // Clear filters button
    board
      .querySelector("[data-clear-filters]")
      ?.addEventListener("click", () => {
        state.chip = "all";
        state.spice.clear();
        state.diet.clear();
        board
          .querySelectorAll("[data-spice-filter], [data-diet-filter]")
          .forEach((i) => (i.checked = false));
        board
          .querySelectorAll(".chip")
          .forEach((c) =>
            c.setAttribute("aria-pressed", c.dataset.chip === "all"),
          );
        renderDishesGrid();
      });

    // Synchronize static dish cards from HTML and attach delegated handlers
    const staticDishCards = Array.from(board.querySelectorAll("[data-menu-grid] .dish-card"));
    if (staticDishCards.length > 0) {
      staticDishCards.forEach((card) => {
        const id = card.dataset.dishId;
        const img = card.querySelector("img");
        const m = MENU.find((x) => x.id === id);
        if (m && img) {
          m.image = img.getAttribute("src");
        }
        const isFav = hearts.has(id);
        const favBtn = card.querySelector("[data-fav-id]");
        if (favBtn) {
          favBtn.classList.toggle("active", isFav);
          favBtn.textContent = isFav ? "♥" : "♡";
        }
      });

      const menuGrid = board.querySelector("[data-menu-grid]");
      menuGrid?.addEventListener("click", (e) => {
        const favBtn = e.target.closest("[data-fav-id]");
        if (favBtn) {
          e.stopPropagation();
          const favId = favBtn.dataset.favId;
          toggleHeart(favId);
          const isFav = hearts.has(favId);
          favBtn.classList.toggle("active", isFav);
          favBtn.textContent = isFav ? "♥" : "♡";
          return;
        }

        const addBtn = e.target.closest("[data-quick-add]");
        if (addBtn) {
          e.stopPropagation();
          const itemId = addBtn.dataset.quickAdd;
          const item = MENU.find((m) => m.id === itemId);
          if (item) {
            const cartId = `${item.id}-classic`;
            if (!cart[cartId]) {
              cart[cartId] = {
                name: item.name,
                price: item.price,
                quantity: 1,
                customization: "Standard Recipe",
              };
            } else {
              cart[cartId].quantity += 1;
            }
            saveCart();
            addBtn.textContent = "✓";
            addBtn.style.background = "#2e7d32";
            setTimeout(() => {
              addBtn.textContent = "+";
              addBtn.style.background = "";
            }, 900);
          }
          return;
        }

        const card = e.target.closest(".dish-card");
        if (card) {
          const itemId = card.dataset.dishId;
          const item = MENU.find((m) => m.id === itemId);
          if (item) {
            const cardImg = card.querySelector("img");
            if (cardImg) item.image = cardImg.getAttribute("src");
            state.selectedItem = item;
            state.quantity = 1;
            board.querySelectorAll(".dish-card").forEach((c) => c.classList.remove("is-active"));
            card.classList.add("is-active");
            renderDrawer();
            const detail = board.querySelector("[data-menu-detail]");
            detail?.classList.remove("is-closed");
          }
        }
      });
    }

    // Initial renders
    setCategory(initialCat);
    renderAlsoLove();
  };

  /* ==========================================================================
     CONTACT PAGE & ORDER ENQUIRY / RESERVATION TABS & ACCORDION
     ========================================================================== */
  const initializeContactPage = () => {
    const contactCard = document.querySelector("#enquiry");
    if (!contactCard) return;

    const tabButtons = contactCard.querySelectorAll("[data-contact-tab]");
    const tabPanels = contactCard.querySelectorAll(".form-panel");

    const switchTab = (tabId) => {
      tabButtons.forEach((btn) => {
        const selected = btn.dataset.contactTab === tabId;
        btn.setAttribute("aria-selected", String(selected));
      });
      tabPanels.forEach((panel) => {
        panel.hidden = panel.id !== tabId;
      });
    };

    tabButtons.forEach((btn) => {
      btn.addEventListener("click", () => switchTab(btn.dataset.contactTab));
    });

    const applyTabFromHash = () => {
      if (
        location.hash === "#order-panel" ||
        location.search.includes("cart=1")
      ) {
        switchTab("order-panel");
      } else if (location.hash === "#reserve") {
        switchTab("reserve");
      } else if (location.hash === "#catering") {
        switchTab("catering");
      }
    };

    applyTabFromHash();
    window.addEventListener("hashchange", applyTabFromHash);

    const orderItemsSummary = document.querySelector("[data-order-cart-items]");
    if (orderItemsSummary) {
      const items = Object.values(cart);
      if (items.length > 0) {
        let html =
          '<ul class="list-disc ps-5 space-y-1 mb-3 text-xs text-[var(--gold)]">';
        let total = 0;
        items.forEach((item) => {
          const lineTotal = item.price * item.quantity;
          total += lineTotal;
          html += `<li><strong>${item.quantity}x ${item.name}</strong> (${item.customization || "Standard"}) — ₹${lineTotal}</li>`;
        });
        html += `</ul><div class="font-bold text-sm text-[var(--ink)] mb-4">Estimated Total: ₹${total}</div>`;
        orderItemsSummary.innerHTML = html;
      }
    }

    // Reservation Form Validation
    const resForm = document.querySelector("#reservation-form");
    resForm?.addEventListener("submit", (e) => {
      e.preventDefault();
      let valid = true;
      const name = resForm.querySelector("#reserve-name");
      const phone = resForm.querySelector("#reserve-phone");
      const date = resForm.querySelector("#reserve-date");
      const time = resForm.querySelector("#reserve-time");

      if (!name.value.trim()) {
        name.setAttribute("aria-invalid", "true");
        document.querySelector("#reserve-name-error").textContent =
          "Please provide your name.";
        valid = false;
      } else {
        name.removeAttribute("aria-invalid");
        document.querySelector("#reserve-name-error").textContent = "";
      }

      if (!phone.value.trim() || phone.value.replace(/\D/g, "").length < 10) {
        phone.setAttribute("aria-invalid", "true");
        document.querySelector("#reserve-phone-error").textContent =
          "Please enter a valid 10-digit phone number.";
        valid = false;
      } else {
        phone.removeAttribute("aria-invalid");
        document.querySelector("#reserve-phone-error").textContent = "";
      }

      if (!date.value) {
        date.setAttribute("aria-invalid", "true");
        document.querySelector("#reserve-date-error").textContent =
          "Please select a date.";
        valid = false;
      } else {
        date.removeAttribute("aria-invalid");
        document.querySelector("#reserve-date-error").textContent = "";
      }

      if (!time.value) {
        time.setAttribute("aria-invalid", "true");
        document.querySelector("#reserve-time-error").textContent =
          "Please choose a dining time.";
        valid = false;
      } else {
        time.removeAttribute("aria-invalid");
        document.querySelector("#reserve-time-error").textContent = "";
      }

      if (valid) {
        const successBox = document.querySelector("#reservation-success");
        if (successBox) {
          successBox.hidden = false;
          successBox.innerHTML = `
            <strong>Reservation Request Received!</strong><br>
            Thank you, ${name.value.trim()}. We have logged your request for ${date.value} at ${time.value}.
            Our host will call you at ${phone.value} to confirm your table within 2 hours.
          `;
          resForm.reset();
        }
      }
    });

    // Order Pickup Form Validation
    const orderForm = document.querySelector("#order-form");
    orderForm?.addEventListener("submit", (e) => {
      e.preventDefault();
      let valid = true;
      const name = orderForm.querySelector("#order-name");
      const phone = orderForm.querySelector("#order-phone");
      const pickupTime = orderForm.querySelector("#order-pickup-time");

      if (!name.value.trim()) {
        name.setAttribute("aria-invalid", "true");
        document.querySelector("#order-name-error").textContent =
          "Please enter your name.";
        valid = false;
      } else {
        name.removeAttribute("aria-invalid");
        document.querySelector("#order-name-error").textContent = "";
      }

      if (!phone.value.trim() || phone.value.replace(/\D/g, "").length < 10) {
        phone.setAttribute("aria-invalid", "true");
        document.querySelector("#order-phone-error").textContent =
          "Please enter a valid phone number.";
        valid = false;
      } else {
        phone.removeAttribute("aria-invalid");
        document.querySelector("#order-phone-error").textContent = "";
      }

      if (!pickupTime.value) {
        pickupTime.setAttribute("aria-invalid", "true");
        document.querySelector("#order-time-error").textContent =
          "Please pick an approximate pickup time.";
        valid = false;
      } else {
        pickupTime.removeAttribute("aria-invalid");
        document.querySelector("#order-time-error").textContent = "";
      }

      if (valid) {
        const successBox = document.querySelector("#order-success");
        if (successBox) {
          successBox.hidden = false;
          successBox.innerHTML = `
            <strong>Order Enquiry Received!</strong><br>
            We have your order details and requested pickup time (${pickupTime.value}).
            The kitchen will prepare your broth containers fresh so everything stays piping hot!
          `;
          orderForm.reset();
        }
      }
    });

    // FAQ Accordion
    document.querySelectorAll(".faq-trigger").forEach((trigger) => {
      trigger.addEventListener("click", () => {
        const item = trigger.closest(".faq-item");
        item.classList.toggle("open");
      });
    });
  };

  /* ==========================================================================
     INTERACTIVE CRAVING SELECTOR (Home 1 - The Broth House)
     ========================================================================== */
  const initializeCravingSelector = () => {
    const cravingRoot = document.querySelector("[data-craving-root]");
    if (!cravingRoot) return;

    const cards = cravingRoot.querySelectorAll("[data-craving-btn]");
    const resultBox = cravingRoot.querySelector("[data-craving-result]");

    const cravingMap = {
      comfort: {
        title: "House Signature Tonkotsu",
        desc: "When you need pure, unhurried warmth: 18 hours of simmering produces a rich, milky collagen emulsion that hugs every noodle.",
        link: "menu.html#tonkotsu",
        badge: "Rich & Creamy",
      },
      clarity: {
        title: "Tokyo Classic Shoyu or Yuzu Shio",
        desc: "Bright, pristine, and comforting without heaviness. Made with aged tamari or sea salt and sun-dried Japanese yuzu zest.",
        link: "menu.html#shio",
        badge: "Light & Delicate",
      },
      heat: {
        title: "Volcano Fire Miso or Spicy Garlic Tonkotsu",
        desc: "An invigorating chili bloom that awakens your senses, featuring roasted Sichuan pepper oil and slow-toasted red miso.",
        link: "menu.html#spicy",
        badge: "Warm & Fiery",
      },
      earthy: {
        title: "Kurogoma Black Sesame Miso",
        desc: "Deep, nutty, and soulful. Stone-ground black sesame and fermented Hokkaido miso create an unforgettable umami bowl.",
        link: "menu.html#miso",
        badge: "Deep & Nutty",
      },
    };

    cards.forEach((btn) => {
      btn.addEventListener("click", () => {
        const cravingKey = btn.dataset.cravingBtn;
        cards.forEach((b) =>
          b.classList.remove("active", "border-[var(--chili)]"),
        );
        btn.classList.add("active", "border-[var(--chili)]");

        const data = cravingMap[cravingKey] || cravingMap.comfort;
        if (resultBox) {
          resultBox.innerHTML = `
            <div class="rounded-2xl border border-[var(--line)] bg-[var(--raised)] p-6 transition-all duration-300">
              <span class="inline-block px-3 py-1 mb-2 rounded-full text-xs font-bold uppercase tracking-wider bg-[var(--chili)] text-white">${data.badge}</span>
              <h3 class="text-2xl font-display font-semibold text-[var(--ink)] mb-2">${data.title}</h3>
              <p class="text-sm text-[var(--muted)] leading-relaxed mb-4">${data.desc}</p>
              <a class="cta-primary" href="${data.link}">View This Broth Style on Menu</a>
            </div>
          `;
        }
      });
    });
  };

  /* ==========================================================================
     PAGE INITIALIZER
     ========================================================================== */
  const initPage = () => {
    initializeMenuBoard();
    initializeContactPage();
    initializeCravingSelector();
    updateScrollProgress();
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initPage);
  } else {
    initPage();
  }

  window.initializeEpicurePage = initPage;
})();
