# Irving Caamal Portfolio - Feature-Sliced Design + Effector

A modern, high-performance portfolio website built with **Astro**, **React**, **TypeScript**, **Tailwind CSS**, **Effector**, and **Feature-Sliced Design** architecture.

## 🏗️ Architecture

This project follows **Feature-Sliced Design (FSD)** methodology for scalable frontend architecture:

\`\`\`
src/
├── app/           # Application layer (styles, providers)
├── pages/         # Pages layer (Astro pages)
├── widgets/       # Widgets layer (complex UI blocks)
├── features/      # Features layer (user interactions)
├── entities/      # Entities layer (business entities)
└── shared/        # Shared layer (reusable code, UI kit, utils)
\`\`\`

## 🚀 Tech Stack

- **Framework**: Astro 4.0 with React integration
- **State Management**: Effector for reactive state management
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Custom components with Radix UI primitives
- **Icons**: Lucide React
- **Architecture**: Feature-Sliced Design (FSD)
- **TypeScript**: Full type safety with strict configuration

## 🎯 Key Features

- **🏗️ FSD Architecture**: Scalable and maintainable code organization
- **⚡ Effector State Management**: Reactive and predictable state management
- **🎨 Design System**: Consistent and elegant UI components
- **🌙 Theme Support**: Light/dark mode with system preference detection
- **📱 Responsive Design**: Mobile-first approach with elegant animations
- **♿ Accessibility**: WCAG compliant components and interactions
- **🚀 Performance**: Optimized for Core Web Vitals

## 🛠️ Development

### Prerequisites
- Node.js 18+ 
- pnpm

### Setup
\`\`\`bash
# Install dependencies
pnpm install

# Copy environment variables
cp .env.example .env

# Start development server
npm run dev
\`\`\`

### Build
\`\`\`bash
# Build for production
npm run build

# Preview production build
npm run preview
\`\`\`

## 📁 Project Structure Details

### `/app` - Application Layer
- Global styles and application-wide configurations
- Theme providers and global state initialization

### `/pages` - Pages Layer  
- Astro page components
- Route-level logic and data fetching

### `/widgets` - Widgets Layer
- Complex UI blocks (Header, Hero, About, etc.)
- Composed of features and entities
- Page-level components

### `/features` - Features Layer
- User interactions and business logic
- Theme switching, navigation, form handling
- Effector stores, events, and effects

### `/entities` - Entities Layer
- Business entities and domain models
- Profile data, projects, skills
- Entity-specific UI components

### `/shared` - Shared Layer
- Reusable UI components
- Utilities and helper functions
- Configuration and constants
- TypeScript types and interfaces

## 🔄 State Management with Effector

The project uses Effector for predictable state management:

\`\`\`typescript
// Example: Theme feature
export const themeToggled = createEvent()
export const $theme = createStore<Theme>("light")
  .on(themeToggled, (current) => current === "light" ? "dark" : "light")
\`\`\`

## 🎨 Design System

Custom design system with:
- Consistent color palette
- Typography scale
- Component variants
- Animation utilities
- Responsive breakpoints

## 📦 Deployment

This project generates static files and can be deployed to:
- Vercel
- Netlify  
- GitHub Pages
- Any static hosting service

## 🤝 Contributing

1. Follow FSD methodology
2. Use Effector for state management
3. Maintain TypeScript strict mode
4. Follow existing code patterns
5. Test responsive design
6. Ensure accessibility compliance

## 📄 License

MIT License - feel free to use this project as a template for your own portfolio!
