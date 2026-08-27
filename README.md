# Quotes Web Application

A responsive quotes landing page built by **Jeet Panchal** as part of a UI Engineer technical exercise.

The project recreates the provided Figma designs across desktop, tablet, and mobile layouts while focusing on design fidelity, reusable component architecture, accessibility, responsive behavior, and clean separation between data, presentation, and interaction logic.

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Application Architecture](#application-architecture)
- [Quote Data Pipeline](#quote-data-pipeline)
- [Random Quote Selection](#random-quote-selection)
- [Carousel Implementation](#carousel-implementation)
- [Responsive Design](#responsive-design)
- [Light and Dark Themes](#light-and-dark-themes)
- [Design System](#design-system)
- [Hero Implementation](#hero-implementation)
- [FAQ Implementation](#faq-implementation)
- [Footer Implementation](#footer-implementation)
- [Accessibility](#accessibility)
- [Styling Approach](#styling-approach)
- [Figma Fidelity](#figma-fidelity)
- [Technical Decisions](#technical-decisions)
- [Trade-offs](#trade-offs)
- [Validation and Testing](#validation-and-testing)
- [Future Improvements](#future-improvements)
- [Author](#author)

---

## Overview

The Quotes Web Application is implemented with Next.js, React, TypeScript, and styled-components.

The application consists of four primary visual sections:

1. Hero
2. Quotes carousel
3. Frequently Asked Questions
4. Footer

A responsive header provides theme switching between light and dark modes.

Quote content is loaded from CSV data on the server, validated and converted into typed objects before being passed into the interface.

Three unique quotes are randomly selected and displayed through a custom React carousel.

The implementation was developed against the supplied Figma references and tested across desktop, tablet, and mobile layouts.

---

## Features

### Interface

- Responsive desktop layout
- Responsive tablet layout
- Responsive mobile layout
- Figma-based spacing and typography
- Responsive Hero artwork
- Responsive quote carousel
- Carousel preview artwork
- FAQ accordion
- Footer
- Light theme
- Dark theme

### Interactions

- Previous quote navigation
- Next quote navigation
- Circular carousel behavior
- Active quote progress indicators
- Expandable FAQ items
- Light/dark theme toggle
- Persistent theme preference

### Engineering

- TypeScript
- Server-side CSV parsing
- CSV validation
- Typed quote model
- Fisher-Yates randomization
- Reusable components
- Shared design tokens
- Shared responsive breakpoints
- CSS custom-property theme system
- styled-components
- ESLint validation
- Production build validation

### Accessibility

- Semantic HTML
- Native buttons
- Accessible labels for icon-only controls
- Keyboard-accessible interactions
- FAQ `aria-expanded` state
- Decorative images hidden from assistive technology
- Visible focus states
- Reduced-motion support

---

## Tech Stack

The project uses:

- **Next.js 16.3.2**
- **React**
- **TypeScript**
- **styled-components**
- **Papa Parse**
- **ESLint**

The application uses the Next.js **App Router**.

No external carousel or accordion library is required.

---

## Getting Started

### Prerequisites

Make sure Node.js and npm are installed.

### Clone the repository

```bash
git clone https://github.com/SpideyP00L/okta-assignment.git
```

Move into the project:

```bash
cd okta-assignment
```

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

Open the application at:

```text
http://localhost:3000
```

---

## Available Scripts

### Development

```bash
npm run dev
```

Starts the Next.js development server.

### Production Build

```bash
npm run build
```

Creates an optimized production build and performs TypeScript validation.

### Lint

```bash
npm run lint
```

Runs ESLint against the project.

---

## Project Structure

```text
okta-assignment/
├── public/
│   └── images/
│       ├── carousel/
│       └── hero/
│
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   │
│   ├── components/
│   │   ├── FAQ/
│   │   │   ├── FAQ.tsx
│   │   │   ├── FAQItem.tsx
│   │   │   └── faq.styles.ts
│   │   │
│   │   ├── Footer/
│   │   │   ├── Footer.tsx
│   │   │   └── footer.styles.ts
│   │   │
│   │   ├── Header/
│   │   │   ├── Header.tsx
│   │   │   └── header.styles.ts
│   │   │
│   │   ├── Hero/
│   │   │   ├── Hero.tsx
│   │   │   ├── HeroContent.tsx
│   │   │   ├── HeroVisual.tsx
│   │   │   └── hero.styles.ts
│   │   │
│   │   └── Quotes/
│   │       ├── CarouselNavigation.tsx
│   │       ├── CarouselPreview.tsx
│   │       ├── QuoteCard.tsx
│   │       ├── QuotesSection.tsx
│   │       └── carousel.styles.ts
│   │
│   ├── data/
│   │   └── quotes.csv
│   │
│   ├── lib/
│   │   ├── getRandomQuotes.ts
│   │   └── parseQuotes.ts
│   │
│   ├── styles/
│   │   ├── breakpoints.ts
│   │   └── tokens.ts
│   │
│   └── types/
│       └── quote.ts
│
├── package.json
├── next.config.ts
├── tsconfig.json
└── README.md
```

The structure separates:

- Page composition
- Reusable components
- Component styles
- Data
- Data-processing utilities
- Shared design values
- Responsive breakpoints
- TypeScript models

---

## Application Architecture

The page is composed in `src/app/page.tsx`.

At a high level, the page renders:

```text
Header
  ↓
Hero
  ↓
QuotesSection
  ↓
FAQ
  ↓
Footer
```

The page is responsible for retrieving the quote data and passing the selected quotes into the interactive carousel.

Presentation and interaction logic are then delegated to focused components.

This prevents the page component from becoming responsible for every part of the interface.

---

## Quote Data Pipeline

Quote data is stored in:

```text
src/data/quotes.csv
```

The CSV file is read on the server by:

```text
src/lib/parseQuotes.ts
```

The parser:

1. Locates the CSV file
2. Reads the file
3. Parses the CSV using Papa Parse
4. Validates the parsing result
5. Converts the ID into a number
6. Trims quote and author values
7. Validates each row
8. Returns typed `Quote` objects

The quote model is defined in:

```ts
export interface Quote {
  id: number;
  author: string;
  quote: string;
}
```

Invalid data causes the parser to fail explicitly rather than allowing malformed content to reach the interface.

This keeps CSV-specific concerns outside of the React presentation components.

---

## Random Quote Selection

After parsing the CSV, three quotes are selected using:

```text
src/lib/getRandomQuotes.ts
```

The utility uses a **Fisher-Yates shuffle**.

The input array is copied before shuffling:

```ts
const shuffledQuotes = [...quotes];
```

This prevents the original quote collection from being mutated.

The requested number of quotes is also limited to the number actually available.

This allows the utility to safely handle:

- Empty quote collections
- Requests for zero quotes
- Requests larger than the available dataset

---

## Carousel Implementation

The quote carousel is implemented without an external carousel library.

This was intentional because the required interaction is small enough to manage clearly with React state.

### State Ownership

`QuotesSection` owns:

```ts
const [activeIndex, setActiveIndex] = useState(0);
```

The active quote is derived from that index.

### Circular Navigation

The carousel loops continuously.

Next:

```text
1 → 2 → 3 → 1
```

Previous:

```text
1 → 3 → 2 → 1
```

Modulo arithmetic handles this behavior without requiring special first/last-slide branches.

### Component Responsibilities

#### `QuotesSection`

Owns carousel state and coordinates the carousel.

#### `QuoteCard`

Displays the currently active quote and author.

It also provides a fallback when quote data is unavailable.

#### `CarouselNavigation`

Displays:

- Previous control
- Next control
- Active quote indicators

It receives callbacks from `QuotesSection` instead of owning quote state itself.

#### `CarouselPreview`

Handles the decorative preview artwork around the primary carousel slide.

Different artwork/layout behavior is used for desktop/tablet and mobile to match the responsive Figma references.

---

## Responsive Design

The interface was implemented against desktop, tablet, and mobile Figma references.

Responsive behavior is handled through shared breakpoints rather than independently defined values across every component.

The breakpoints are centralized in:

```text
src/styles/breakpoints.ts
```

### Desktop

The desktop design includes:

- Two-column Hero
- Large Hero typography
- Side carousel previews
- Horizontal carousel controls
- Two-column FAQ layout
- Centered constrained content widths

### Tablet

The tablet design transitions to:

- Stacked Hero content
- Full-width Hero artwork
- Full-width CTA buttons
- Narrower carousel presentation
- Stacked FAQ layout
- Tablet-specific spacing

### Mobile

The mobile design includes:

- Compact typography
- Stacked Hero
- Full-width CTA buttons
- Mobile Hero artwork sizing
- Top and bottom carousel previews
- Vertical carousel navigation arrows
- Mobile-specific spacing
- Single-column FAQ layout

The responsive implementation preserves the design hierarchy rather than simply scaling down the desktop version.

---

## Light and Dark Themes

The application supports light and dark themes.

The theme system uses CSS custom properties and a `data-theme` attribute on the root HTML element.

For example:

```html
<html data-theme="dark">
```

Shared semantic colors are consumed by the styled-components implementation through design tokens.

### Theme Toggle

The theme control is located in the Header.

The selected theme is stored in:

```text
localStorage
```

This allows the theme preference to persist after a page refresh.

The theme state is initialized from the stored preference when available.

Changes to the theme synchronize the root `data-theme` attribute and persisted value.

### Light Theme

The light theme follows the supplied light Figma references and includes:

- Light page surfaces
- Dark typography
- Cream secondary surfaces
- Blue/white carousel treatment
- Dark footer treatment

### Dark Theme

The dark theme includes:

- Dark page surfaces
- Light typography
- Dark secondary surfaces
- Figma-inspired Hero linear gradient
- Orange/purple carousel treatment
- Dark quote card
- Dark FAQ
- Dark footer with light copyright text

The supplied dark design primarily defined the desktop visual treatment.

The same theme system was extended to tablet and mobile while preserving the responsive layout established by their light-mode references.

---

## Design System

Shared design values are located in:

```text
src/styles/tokens.ts
```

The tokens include:

- Colors
- Spacing
- Border radii

For example:

```ts
colors.carbon
colors.snow
colors.slate
colors.surfaceSecondary
```

Spacing values are also shared:

```ts
spacing.xs
spacing.sm
spacing.md
spacing.lg
spacing.xl
```

Centralizing these values reduces repeated magic numbers and makes design adjustments easier to manage.

### CSS Variables

Theme-dependent colors use CSS custom properties defined in:

```text
src/app/globals.css
```

The TypeScript design tokens reference those variables rather than duplicating theme-specific values throughout the components.

Design-specific gradients use explicit values where more precise Figma matching is required.

---

## Hero Implementation

The Hero is separated into:

```text
Hero.tsx
HeroContent.tsx
HeroVisual.tsx
hero.styles.ts
```

### `Hero`

Acts as the composition layer.

### `HeroContent`

Contains:

- Breadcrumb
- Heading
- Description
- Primary CTA
- Secondary CTA

### `HeroVisual`

Renders the exported decorative Figma artwork.

### Responsive Behavior

Desktop uses a two-column composition.

Tablet and mobile transition to stacked layouts while retaining their breakpoint-specific dimensions and spacing.

### Dark Hero

Dark mode uses a custom linear gradient based on the supplied Figma dark-theme reference.

The gradient transitions through dark neutral tones and is directed toward the upper-right area to approximate the Figma gradient positioning while keeping the content area readable.

---

## FAQ Implementation

The FAQ consists of:

```text
FAQ.tsx
FAQItem.tsx
faq.styles.ts
```

The FAQ data is defined separately from the individual accordion item.

Each `FAQItem` owns its expanded/collapsed state.

The first FAQ is open by default to match the supplied design.

The interaction uses a native button with:

```text
aria-expanded
```

to communicate its state to assistive technologies.

This keeps the accordion implementation lightweight without requiring an external component library.

---

## Footer Implementation

The Footer is intentionally small and focused.

It contains centered copyright text and uses a constrained divider aligned to the desktop content width.

The divider:

- Is centered horizontally
- Has a maximum width matching the Figma content area
- Uses a subtle light treatment
- Does not unnecessarily span the full viewport

The footer maintains its dark treatment as part of the visual design.

---

## Accessibility

Accessibility was considered during implementation rather than added only at the end.

### Semantic HTML

The application uses semantic elements including:

```text
header
main
section
footer
button
blockquote
```

where appropriate.

### Interactive Controls

Interactive elements use native buttons rather than clickable generic containers.

This provides keyboard interaction by default.

### Accessible Labels

Icon-only controls include accessible labels.

Examples include:

- Previous quote
- Next quote
- Theme toggle

### FAQ State

FAQ controls expose:

```text
aria-expanded
```

so assistive technology can determine whether an item is currently expanded.

### Decorative Artwork

Decorative images use empty alternative text and/or are hidden from assistive technology when appropriate.

### Focus States

Interactive controls include visible `:focus-visible` styles.

This allows keyboard users to identify the currently focused control.

### Reduced Motion

Carousel progress transitions respect:

```css
@media (prefers-reduced-motion: reduce)
```

and disable unnecessary animation when reduced motion is requested.

---

## Styling Approach

The application uses **styled-components** for component-level styling.

Component styles are colocated with their related component groups.

For example:

```text
Hero/
├── Hero.tsx
├── HeroContent.tsx
├── HeroVisual.tsx
└── hero.styles.ts
```

This keeps the visual implementation close to the components while avoiding extremely large component files.

Shared values remain outside individual component folders in the design-token and breakpoint files.

### Why styled-components?

The approach provides:

- Scoped styles
- TypeScript integration
- Dynamic prop-based styling
- Responsive media queries
- Reusable design tokens
- Clear separation between component markup and detailed presentation rules

No additional UI framework was introduced because the supplied Figma design required custom styling.

---

## Figma Fidelity

The implementation was repeatedly compared against the supplied Figma references during development.

Particular attention was given to:

- Overall layout dimensions
- Section spacing
- Typography scale
- Hero content positioning
- Hero artwork dimensions
- CTA sizing
- Responsive layout changes
- Carousel width and height
- Carousel preview positioning
- Carousel gradient positioning
- Quote-card dimensions
- Progress indicators
- Navigation controls
- FAQ spacing
- Footer alignment
- Theme colors

Complex decorative artwork supplied through Figma was exported and reused where appropriate rather than recreated unnecessarily.

This reduced implementation complexity while preserving the intended design.

---

## Technical Decisions

### 1. Server-Side CSV Parsing

CSV parsing is kept outside the UI.

This means components receive structured quote objects rather than needing to understand CSV formatting.

### 2. TypeScript Quote Model

A shared `Quote` interface provides a consistent data contract between the parser, utilities, and components.

### 3. Fisher-Yates Shuffle

Random quote selection uses Fisher-Yates rather than random sorting.

The source array is copied first to avoid mutation.

### 4. Custom Carousel

The carousel was implemented with React state rather than adding a third-party carousel dependency.

For the required three-quote interaction, this keeps the implementation smaller and easier to reason about.

### 5. Component Separation

Large interface sections are separated into composition, content, visual, navigation, and styling modules where useful.

This reduces the responsibility of individual files.

### 6. Shared Design Tokens

Frequently reused design values are centralized to improve consistency.

### 7. CSS-Variable Theme System

Theme-dependent colors are represented with CSS custom properties.

Components can therefore consume semantic colors without knowing whether the current theme is light or dark.

### 8. Persistent Theme Preference

The selected theme is stored locally so users do not need to select their preferred theme again after every refresh.

### 9. Figma Assets

Complex decorative graphics are used directly where appropriate rather than manually recreating them in CSS.

---

## Trade-offs

The project was implemented within the scope of a technical exercise, so several decisions intentionally prioritize simplicity and clarity.

### No Carousel Library

A third-party carousel could provide advanced animation, gestures, and additional accessibility features.

For three quotes and simple previous/next navigation, local React state provides the required behavior without introducing another dependency.

### Local Theme Persistence

Theme preference is stored in `localStorage`.

A larger production application might use a more comprehensive theme provider or account-level preference.

For this application, local persistence provides the required behavior with minimal complexity.

### Dark Tablet and Mobile

The dark-mode design reference was primarily provided at desktop size.

Tablet and mobile dark mode therefore reuse the established responsive layout while applying the same dark visual system.

This avoids inventing a completely different responsive structure without design guidance.

### Decorative Figma Assets

Some complex visuals are exported directly from Figma.

This improves fidelity and avoids unnecessary CSS complexity, but it also means those visuals are not completely generated through reusable CSS primitives.

### Animation

The carousel intentionally prioritizes functional navigation and design fidelity over elaborate slide animations.

More advanced transitions could be added without changing the current state architecture.

---

## Validation and Testing

The application was manually tested throughout implementation.

Validation included:

- Desktop layout
- Tablet layout
- Mobile layout
- Light theme
- Dark theme
- Theme switching
- Theme persistence after refresh
- Previous carousel navigation
- Next carousel navigation
- Circular carousel navigation
- FAQ expansion
- FAQ collapse
- Responsive layout transitions
- Hero presentation
- Carousel presentation
- Footer presentation

The final implementation also passes:

```bash
npm run lint
```

and:

```bash
npm run build
```

The production build completes successfully with Next.js and TypeScript validation.

---

## Future Improvements

Given additional development time, potential improvements include:

### Automated Testing

Add unit tests for:

- Quote parsing
- Quote validation
- Random quote selection
- Carousel navigation
- Theme switching
- FAQ behavior

### End-to-End Testing

Add browser-based tests for:

- Responsive behavior
- Theme persistence
- Carousel interaction
- FAQ interaction

### Visual Regression Testing

Automated screenshot comparison could help detect visual changes against approved Figma references.

### Carousel Animation

Animated transitions could be introduced between quotes while respecting reduced-motion preferences.

### Touch Gestures

Swipe navigation could improve the mobile carousel experience.

### System Theme Preference

The application could initially respect:

```css
prefers-color-scheme
```

while continuing to allow users to override that preference manually.

### Theme Initialization

For a larger production application, theme initialization could be moved earlier in the document lifecycle to further minimize the possibility of a theme flash during initial loading.

---

## Final Notes

This implementation focuses on balancing:

- Design fidelity
- Responsive behavior
- Accessibility
- Component organization
- Type safety
- Maintainability
- Appropriate dependency usage
- Clear technical decisions

The objective was not only to reproduce the supplied interface, but to implement it in a way that remains understandable and maintainable during a technical code review.

---

## Author

**Jeet Panchal**

UI Engineer Technical Exercise

GitHub: `SpideyP00L`