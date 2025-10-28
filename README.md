# LCA Presentation - Next.js Presentation App

A modern, interactive presentation application built with Next.js, TypeScript, Tailwind CSS, and Shadcn UI.

## Features

- Full-screen slide presentation with smooth transitions
- Keyboard navigation (Arrow Left/Right, Spacebar)
- Click navigation with visual indicators
- Responsive design for all screen sizes
- Custom color themes (green, blue, purple, teal)
- Professional UI components from Shadcn UI
- TypeScript for type safety
- Tailwind CSS for utility-first styling

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the presentation.

### Build

```bash
npm run build
npm start
```

## Project Structure

```
lca-presentation/
├── app/
│   ├── globals.css          # Global styles with custom CSS variables
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Main presentation page with slides
├── components/
│   ├── slides/
│   │   ├── Slide.tsx               # Individual slide component
│   │   ├── SlideNavigation.tsx     # Navigation controls
│   │   ├── PresentationContainer.tsx # Main container with slide logic
│   │   └── index.ts                # Exports
│   └── ui/
│       ├── button.tsx       # Shadcn button component
│       └── card.tsx         # Shadcn card component
└── lib/
    └── utils.ts             # Utility functions
```

## Customizing Slides

Edit `app/page.tsx` to customize your presentation:

```tsx
<PresentationContainer>
  <Slide variant="blue">
    <h1>Your Slide Title</h1>
    <p>Your content here</p>
  </Slide>

  <Slide variant="green">
    {/* Another slide */}
  </Slide>
</PresentationContainer>
```

### Available Slide Variants

- `default` - White background
- `green` - Green gradient background
- `blue` - Blue gradient background
- `purple` - Purple gradient background
- `teal` - Teal gradient background

## Color Customization

Custom presentation colors are defined in `app/globals.css`:

```css
--presentation-green: oklch(0.65 0.15 160);
--presentation-blue: oklch(0.55 0.18 250);
--presentation-purple: oklch(0.6 0.16 290);
--presentation-teal: oklch(0.6 0.12 200);
```

## Navigation

- **Arrow Right / Spacebar**: Next slide
- **Arrow Left**: Previous slide
- **Click Navigation Buttons**: Navigate between slides
- **Slide Indicators**: Click dots to jump to specific slides

## Technologies Used

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Shadcn UI** - Beautiful, accessible component library
- **Lucide React** - Modern icon library

## Components

### PresentationContainer

Wrapper component that handles slide navigation and keyboard events.

### Slide

Individual slide component with customizable variants and full-screen layout.

### SlideNavigation

Bottom navigation bar with previous/next buttons and progress indicators.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
