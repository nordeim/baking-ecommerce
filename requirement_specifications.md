# Design Specifications — *L'Artisan Baking Atelier* (baking.jesspete.shop)

**What I did:** I reviewed the live site at `http://baking.jesspete.shop` and produced a complete, implementation-ready design specification covering visual system, components, responsive rules, accessibility, content patterns, interaction behavior, conversion flows, and handoff artifacts. (All factual content below is taken from the site.) ([Baking Atelier][1])

---

## 1 — Project overview & goals

**Site purpose:** An online academy offering curated baking courses (sourdough, pâtisserie, viennoiserie, chocolate, gluten-free, decorative breads) with paid courses, a free starter guide, and social proof (testimonials, student counts). ([Baking Atelier][1])

**Primary goals**

* Convert visitors → course signups / purchases (Add to Cart flow).
* Move prospects into email funnel via the free Sourdough Starter Guide.
* Communicate credibility: master instructors, completion certificates, 15K+ students, 94% completion rate, high ratings. ([Baking Atelier][1])

**Secondary goals**

* Showcase instructor expertise and program structure (lessons/weeks).
* Drive community engagement (forums, live Q&A).
* Support SEO for course-specific keywords (sourdough, viennoiserie, lamination, pastry).

---

## 2 — Key facts (from site)

* Student base: **15,000+ students** across **50+ countries**.
* Highlight metrics: **94% completion rate**, average rating **4.9** (site header).
* Courses shown with durations, lesson counts, prices and ratings (e.g., *Sourdough Mastery*: 6 weeks • 24 lessons • $149-$199 • 4.9(128)). ([Baking Atelier][1])

These numbers inform prominence and information hierarchy in the UI (trust badges, hero treatment, course cards). ([Baking Atelier][1])

---

## 3 — Visual system

### Colors (recommended tokens based on site mood)

* Primary: warm, bakery-friendly deep brown / espresso (#4A2F23) — use for CTAs, headings.
* Accent: buttery gold (#E8B75A) — use for badges, highlights, sale tags.
* Surface: warm off-white (#FFF8F2).
* Neutral: cool gray scale for text & UI chrome (#222, #4D4D4D, #9B9B9B).

(These are recommendations — the live site uses warm photographic imagery and dark, elegant type; adopt neutral/off-white surfaces to let food photography pop.) ([Baking Atelier][1])

### Typography

* Headline: **Serif or humanist display** for artisanal feel (e.g., Playfair Display, Merriweather Display). Use large sizes for hero and H1.
* UI / body: **Sans serif** for clarity (e.g., Inter / system UI). Sizes:

  * H1: 48–56px (desktop)
  * H2: 28–36px
  * Body: 16px (1rem)
  * Small: 14px
* Line-length: 60–75 characters for body copy.

### Imagery

* Large hero photography featuring process shots (lamination, crust detail).
* Course thumbnails: styled product shots with consistent crop, subtle overlay gradient to ensure text legibility.
* Instructor portraits: circular, high-contrast, 3:2 crop.
* All imagery should be optimized WebP with responsive srcset.

---

## 4 — Layout & grid

* 12-column responsive grid (desktop ≥ 1200px).
* Container widths:

  * Desktop: max 1200px center.
  * Tablet: max 920px.
  * Mobile: full width with 16px side padding.
* Vertical rhythm: base spacing unit 8px. Use multiples (8/16/24/32/48).
* Hero layout:

  * Desktop: left-aligned content column (approx 40–45% width) + right image carousel / student stats.
  * Mobile: stacked — image then headline then CTAs.

---

## 5 — Component library (specs)

### Header / Nav

* Elements: logo (left), primary nav (Courses, Workshops, Recipes, About, Journal), CTAs (Browse Courses, Watch Trailer).
* Behavior:

  * Sticky on scroll (compact height).
  * Mobile: hamburger → slide-over panel with course categories and account actions.
* Accessibility: keyboard focus trap in slide-over; skip-to-content link as first element.

### Hero

* H1: “Master the Art of Baking”
* Supporting subhead, social proof row (15,000+ Students • 94% completion • 4.9 rating).
* Primary CTA: **Explore Courses** (primary filled button).
* Secondary CTA: **Watch Trailer** (ghost button with play icon).
* Microinteraction: subtle parallax on hero images; CTA hover: scale 1.03 + drop shadow.

### Course Cards (catalog)

* Elements: image, level badge, price (with sale strikethrough + percent tag if discounted), duration + lessons, ratings + count, tag chips (skills).
* States:

  * Default: hover elevate + reveal “Quick View” and “Add to Cart” buttons.
  * Selected (in cart): “In Cart” badge and quantity controls in mini cart.
* Accessibility: each card is an accessible link with ARIA label summarizing course name, level, price.

### Course Detail / Product Page

* Structure: hero media (video + gallery) → key facts row (duration, lessons, level, rating) → purchase panel (price, enrollment CTA) → curriculum accordion (lessons, durations) → instructor bios → testimonials → FAQ → related courses.
* Purchase panel sticky on desktop right side.
* Curriculum: collapsible sections with estimated time per lesson.

### Cart & Checkout

* Mini-cart slide-over available from header; persistent cart summary in checkout.
* Checkout flow:

  1. Cart review
  2. Billing & account (option to create account)
  3. Payment (card + PayPal)
  4. Confirmation & next steps (link to community/forum)
* Microcopy: show refund & certificate policy inline near CTA.

### Testimonials & Trust

* Rotating quotes with author, role, small portrait.
* Trust badges: “Industry-recognized certificate”, “Master Instructors — 20+ years”.
* Footer: contact info, social links, legal links.

---

## 6 — Interaction & motion

* Motion guidelines:

  * Micro transitions 150–250ms easing (cubic-bezier).
  * Hero image parallax (low amplitude).
  * Card hover: translateY(-6px), soft shadow.
* Animations should be optional (prefers-reduced-motion respected).
* Loading states: skeletons for course lists and modal content.

---

## 7 — Responsive behavior

* Desktop: multi-column course grid (4 columns), sticky purchase panel on PDP.
* Tablet: 2 columns; hero split becomes stacked columns with image below text.
* Mobile: single column, large tappable CTAs (min 44px), collapsible accordions for curriculum and FAQs.
* Images: use `srcset` and `sizes` for breakpoints; lazy-load offscreen images.

---

## 8 — Accessibility (A11y)

* Contrast: ensure text contrast ≥ 4.5:1 for body, ≥ 3:1 for large text.
* Keyboard:

  * Full keyboard navigation for menus, carousels, modals.
  * Focus visible styles for interactive elements.
* Semantic markup: headings in order, ARIA labels for non-semantic controls.
* Forms: explicit labels, inline validation messages, server error handling.
* Media: captions for videos, transcripts for trailers, descriptive alt text for images (avoid “image of…”, prefer “Marie-Claude demonstrating lamination technique”).

---

## 9 — Content strategy & microcopy

* Tone: expert, warm, instructive (authoritative without being pedantic).
* Key microcopy patterns:

  * CTAs: action + benefit (e.g., “Start Sourdough — Free Guide” vs “Get Guide”).
  * Price presentation: show savings (e.g., “Save 25%” with crossed original price), clearly label currency.
  * Guarantee: “No credit card required. Unsubscribe anytime.”
* SEO: course pages—H1 includes primary keyword, meta description 150–160 chars, structured data (Course schema, BreadcrumbList, Organization).
* Blog/Journal: optimize for long-tail keywords (e.g., “how to proof croissants cold overnight”), internal linking to courses.

---

## 10 — Conversion & measurement

* Key conversion points:

  * Free guide opt-in (top conversion priority).
  * Course Add to Cart → Purchase.
  * Trailer views → signups.
* Suggested analytics:

  * Google Analytics (GA4), enhanced ecommerce, conversion events for guide downloads, add-to-cart, checkout completed.
  * Heatmaps for course listing and hero using Hotjar or FullStory.
  * A/B test headline, hero CTAs, and price anchoring (e.g., $149 vs $199 strikethrough).
* KPIs:

  * Free-guide conversion rate
  * Add-to-cart → purchase rate
  * Average order value
  * Course completion rate (tracked via course platform)

---

## 11 — Technical & performance

* Frontend: Next.js (or any SSR-capable framework) + Tailwind (recommended for speed/consistency).
* Images: deliver responsive WebP, lazy-loading, and prefetch hero critical image.
* Caching: CDN (Cloudflare/Akamai), cache course list for 5–15 min but use stale-while-revalidate.
* Accessibility & performance targets:

  * LCP < 2.5s, TTFB minimal, CLS < 0.1.
* Security:

  * Enforce HTTPS, CSP, secure cookies, PCI-compliant payment handling (tokenize with Stripe/PayPal).

---

## 12 — SEO & structured data

* Add JSON-LD:

  * Organization schema (contact, address), Course schema for each course, FAQ schema on course pages.
* XML sitemap & robots.txt.
* Canonicals and hreflang if multi-language later.

---

## 13 — Governance, content ops & CMS

* CMS: headless (Sanity/Contentful/Strapi) or WordPress-headless for editorial ease.
* Content model:

  * Course (title, level, price, duration, lessons array, tags, instructors, media).
  * Instructor (bio, credentials, photo, social).
  * Testimonials as separate collection.
* Release cadence: weekly updates for blog/journal, monthly curriculum updates.

---

## 14 — Handoff artifacts (deliverables)

* Design files: Figma components library containing:

  * Tokens (colors, type, spacing)
  * Component library (header, course card, PDP, forms, modals)
  * Responsive variants + interaction prototypes
* Accessibility report (aXe/Lighthouse) and remediation checklist.
* Developer spec:

  * Annotated CSS variables or Tailwind config
  * API contract for course data (endpoints, shape)
  * Storybook for UI components
* Assets:

  * Optimized imagery set, instructor portrait pack, icons (SVG).

---

## 15 — Quick prioritized improvements (MVP → next)

**MVP (first sprint)**

1. Tighten hero: make free guide CTA highly prominent and A/B test headline.
2. Improve course card CTAs: show “Save X%” and clearer price formatting.
3. Add structured Course JSON-LD.
4. Implement responsive image `srcset` + lazy loading.

**Next**

1. Sticky purchase panel on PDP across breakpoints.
2. Add video captions/transcript for trailer.
3. Build community landing (forum + live Q&A schedule).
4. Measurement plan + conversion tagging.

---

## 16 — Sample component spec (Course Card) — minimal dev-ready

* Markup: `<article class="course-card" aria-labelledby="course-title-{{id}}">`
* Image: `img` with alt `"Thumbnail — Sourdough Mastery course"`, `loading="lazy"`, srcset for 480/768/1200 widths.
* Title: H3 `id="course-title-{{id}}"`.
* Meta row: level chip, duration (e.g., “6 weeks • 24 lessons”), rating (star icon) + review count.
* Price block: large price; if discount, original price (s) with `aria-hidden="true"` and visible percent badge with `role="status"`.
* CTA: Primary button “Add to cart” (44px min height), secondary “Quick view” link.
* Hover: `transform: translateY(-6px); box-shadow: var(--card-elevation);`
* A11y: keyboard focus visible; entire card navigable via link; provide `aria-label` summarizing course.

---

## 17 — Notes, assumptions & risks

* Assumed the site’s analytics/checkout integrations are not visible from markup; verify payment processor for PCI needs.
* Contact & copyright info present on site; confirm legal boilerplate changes with legal team. ([Baking Atelier][1])

---

## 18 — Next steps I can do for you (pick any)

* Produce full Figma component library + responsive prototype (pages: Home, Course Catalog, PDP, Checkout, Instructor profile).
* Generate accessible HTML/CSS + small React sample app (Course Catalog + PDP components).
* Build full measurement plan with GTM/G4 events and naming convention.
* Create a content migration plan for your current CMS.

---

# Final summary

L'Artisan presents a strong trust and expertise narrative (15K+ students, master instructors, high ratings). The design spec above preserves the artisan brand while strengthening conversion pathways (free guide, clear pricing, sticky PDP purchase flow). Key short wins: make the free guide CTA the primary conversion, standardize course card pricing & badges, and add Course structured data for SEO. Remaining uncertainties: exact payment provider, CMS choice, and existing analytics implementation — I can audit those next if you want. ([Baking Atelier][1])

