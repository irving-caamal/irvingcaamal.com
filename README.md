# Irving Caamal Portfolio - Astro

A modern, high-performance portfolio website built with Astro, React, TypeScript, and Tailwind CSS using Feature-Sliced Design architecture.

## 🚀 Quick Start

1. **Install dependencies**
   \`\`\`bash
   npm install
   \`\`\`

2. **Set up environment variables**
   \`\`\`bash
   cp .env.example .env
   # Edit .env with your information
   \`\`\`

3. **Run the development server**
   \`\`\`bash
   npm run dev
   \`\`\`

4. **Open your browser**
   Navigate to [http://localhost:4321](http://localhost:4321)

## 🛠️ Tech Stack

- **Framework**: Astro 4.0 with React integration
- **Styling**: Tailwind CSS with custom animations
- **UI Components**: Custom components with Radix UI primitives
- **Icons**: Lucide React
- **Architecture**: Feature-Sliced Design (FSD)
- **TypeScript**: Full type safety

## 📁 Project Structure

\`\`\`
src/
├── shared/           # Shared utilities, UI components, and configurations
│   ├── lib/         # Utilities and configurations
│   └── ui/          # Reusable UI components
├── features/        # Feature-specific logic (theme toggle, etc.)
├── widgets/         # Page sections (header, hero, about, etc.)
├── pages/           # Astro pages
├── layouts/         # Layout components
└── styles/          # Global styles
\`\`\`

## 🏗️ Build and Deploy

### Build for production
\`\`\`bash
npm run build
\`\`\`

### Preview production build
\`\`\`bash
npm run preview
\`\`\`

This project is optimized for static generation and can be deployed to any static hosting service like Vercel, Netlify, or GitHub Pages.
