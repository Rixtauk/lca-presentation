# Quick Start Guide

## Running the Application

1. Navigate to the project directory:
   ```bash
   cd "/Users/rickyvalentine/projects/LCA Presentation/lca-presentation"
   ```

2. Install dependencies (if not already done):
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser to: http://localhost:3000

## Key Files to Edit

### Main Presentation File
**File:** `app/page.tsx`

This is where you define your slides. Each slide is wrapped in a `<Slide>` component:

```tsx
<Slide variant="blue">
  <div className="max-w-5xl">
    <h1>Your Title</h1>
    <p>Your content</p>
  </div>
</Slide>
```

### Color Customization
**File:** `app/globals.css`

Edit the CSS variables in the `:root` section to change colors:
- `--primary`: Main blue color
- `--secondary`: Green color
- `--accent`: Purple color
- Custom variables: `--presentation-green`, `--presentation-blue`, etc.

## Slide Variants

Choose from 5 color schemes:
- `variant="default"` - White background
- `variant="green"` - Green gradient
- `variant="blue"` - Blue gradient
- `variant="purple"` - Purple gradient
- `variant="teal"` - Teal gradient

## Navigation

- **Keyboard**: Arrow Left/Right or Spacebar
- **Mouse**: Click navigation buttons at bottom
- **Indicators**: Click circular dots to jump to slides

## Component Files

Located in `components/slides/`:
- `Slide.tsx` - Individual slide wrapper
- `SlideNavigation.tsx` - Navigation UI
- `PresentationContainer.tsx` - Main presentation logic

## Tips

1. Keep content centered with `max-w-5xl` or similar max-width classes
2. Use responsive text sizes: `text-5xl md:text-6xl lg:text-7xl`
3. Add spacing with Tailwind utilities: `gap-8`, `mb-12`, `space-y-6`
4. Use the Card component for grouped content
5. Use the Button component for CTAs

## Building for Production

```bash
npm run build
npm start
```

## Common Tasks

### Add a New Slide
In `app/page.tsx`, add inside `<PresentationContainer>`:
```tsx
<Slide variant="green">
  {/* Your content */}
</Slide>
```

### Change Slide Colors
1. Edit `app/globals.css`
2. Modify the oklch values in `:root`
3. Restart dev server to see changes

### Add Custom Components
1. Create in `components/` folder
2. Import in `app/page.tsx`
3. Use within slides
