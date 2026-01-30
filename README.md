# L'Artisan Baking Atelier

A luxury-grade e-commerce platform for artisanal baking courses, built with Next.js 16, Tailwind CSS v4, and shadcn/ui.

## Architecture

- **Framework**: Next.js 16.1.4 (App Router, React 19.2.3)
- **Styling**: Tailwind CSS v4.1 (CSS-first configuration)
- **UI Primitives**: shadcn/ui (Button, Card, Badge, Sheet, Separator, ScrollArea)
- **State Management**: Zustand (Cart state with persistence)
- **Animations**: Framer Motion with `useReducedMotion` compliance
- **Typography**: Geist (UI), Playfair Display (Serif Headings), Caveat (Handwritten)

## Design Philosophy: "Artisanal Editorial"

The design language combines rustic warmth with sophisticated editorial aesthetics:
- **Color Palette**: Bone white, Sourdough crust, Burnt caramel, Copper accents
- **Layout**: Asymmetric grids, bento box card layouts, generous whitespace
- **Motion**: Elastic ease curves mimicking dough decompression
- **Accessibility**: WCAG AAA compliance, reduced motion support, keyboard navigation

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css         # Tailwind v4 @theme configuration
│   ├── layout.tsx          # Root layout with font imports
│   ├── page.tsx            # Home page composition
│   └── cart/page.tsx       # Cart/checkout page
├── components/
│   ├── ui/                 # shadcn primitives (Button, Card, etc.)
│   ├── layout/             # Navigation, CartDrawer, Footer
│   └── sections/           # Hero, Courses, Stats, About, Testimonials, CTA
├── lib/
│   ├── utils.ts            # cn() + formatters
│   ├── hooks/              # useReducedMotion, useScrollPosition
│   └── store/              # Zustand cart store
├── types/                  # TypeScript definitions
└── data/                   # Courses, testimonials, navigation data
```

## Key Features

### E-Commerce Functionality
- Full shopping cart with add/remove/quantity controls
- Persistent cart state across sessions
- Cart drawer (Sheet component) and dedicated cart page
- Price formatting and discount calculations

### Responsive Navigation
- Symmetrical breakpoint strategy (`hidden md:flex` / `md:hidden`)
- Mobile sheet navigation with smooth animations
- Cart badge with real-time item count
- Z-index scale for layering

### Performance Optimizations
- Next.js Image component with priority loading
- Framer Motion viewport once animations
- Dynamic imports ready for heavy components
- Scroll position tracking for navbar transparency

### Accessibility
- `useReducedMotion` hook for all animations
- Semantic HTML with proper heading hierarchy
- Focus visible states with copper accent ring
- ARIA labels on interactive elements

## Installation

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Build for Production

```bash
npm run build
npm run start
```

## Design Tokens (Tailwind v4)

### Colors
- `--color-bone`: #FAF9F6 (Background)
- `--color-burnt`: #4A3728 (Primary text)
- `--color-sourdough`: #C4A77D (Secondary)
- `--color-copper`: #B87333 (Accent)
- `--color-caramel`: #8B6F4E (Supporting)

### Typography
- `--font-sans`: Geist (UI text)
- `--font-serif`: Playfair Display (Headlines)
- `--font-hand`: Caveat (Accents)

## Browser Support

Requires modern browsers supporting:
- CSS Custom Properties
- OKLCH color space (Tailwind v4 default)
- Container queries
- `backdrop-filter`

## License

MIT License - Created as a portfolio demonstration of Next.js 16 + Tailwind CSS v4 capabilities.
