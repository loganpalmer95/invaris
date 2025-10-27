# Invaris Landing Page

A modern, responsive landing page for Invaris consulting agency built with React and Tailwind CSS.

## Features

- **Component-based architecture**: Clean separation of concerns with reusable components
- **Responsive design**: Mobile-first approach with Tailwind CSS
- **Modern React**: Built with React 18 and Vite for fast development
- **Consistent theming**: Centralized color palette and styling
- **Performance optimized**: Fast loading and smooth interactions

## Project Structure

```
src/
├── components/          # React components
│   ├── Header.jsx      # Navigation header
│   ├── Hero.jsx        # Hero section with CTA
│   ├── Services.jsx    # Services grid
│   ├── Process.jsx     # Process steps
│   ├── CTA.jsx         # Call-to-action section
│   ├── Footer.jsx      # Footer with contact info
│   ├── Logo.jsx        # Reusable logo component
│   └── Section.jsx     # Layout wrapper component
├── theme/
│   └── palette.js      # Color palette configuration
├── App.jsx             # Main app component
├── main.jsx            # React entry point
└── index.css           # Tailwind CSS imports
```

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```

3. **Build for production**:
   ```bash
   npm run build
   ```

4. **Preview production build**:
   ```bash
   npm run preview
   ```

## Components Overview

- **Header**: Sticky navigation with logo and menu
- **Hero**: Main landing section with value proposition
- **Services**: Grid of service offerings
- **Process**: 4-step process visualization
- **CTA**: Call-to-action section
- **Footer**: Contact information and links

## Customization

The color palette is centralized in `src/theme/palette.js` for easy customization:

```javascript
export const palette = {
  navy: "#1A2F4A",
  gold: "#C9A341", 
  offWhite: "#F3F2ED",
  navySoft: "#203754",
};
```

## Technologies Used

- React 18
- Vite
- Tailwind CSS
- PostCSS
- Autoprefixer
