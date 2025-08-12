# Irving Caamal Portfolio - Astro

A modern, high-performance portfolio website built with Astro, React, TypeScript, and Tailwind CSS using Feature-Sliced Design architecture.

## 🚀 Features

- **Lightning Fast**: Built with Astro for optimal performance and SEO
- **Modern Architecture**: Feature-Sliced Design (FSD) for scalable code organization
- **Elegant Design**: Clean, professional design with subtle animations
- **Fully Responsive**: Works perfectly on all devices
- **Dark/Light Mode**: Theme switching with smooth transitions
- **Environment Variables**: Easy configuration without code changes
- **SEO Optimized**: Meta tags, Open Graph, and Twitter Cards
- **Static Generation**: Pre-rendered for maximum performance
- **Accessibility**: WCAG compliant with proper ARIA labels

## 🛠️ Tech Stack

- **Framework**: Astro 4.0 with React integration
- **Styling**: Tailwind CSS with custom animations
- **UI Components**: Custom components with Radix UI primitives
- **Icons**: Lucide React
- **Architecture**: Feature-Sliced Design (FSD)
- **TypeScript**: Full type safety

## 📁 Project Structure (Feature-Sliced Design)

\`\`\`
src/
├── shared/           # Shared utilities, UI components, and configurations
│   ├── lib/         # Utilities and configurations
│   └── ui/          # Reusable UI components
├── entities/        # Business entities
├── features/        # Feature-specific logic (theme toggle, etc.)
├── widgets/         # Page sections (header, hero, about, etc.)
├── pages/           # Astro pages
├── layouts/         # Layout components
└── styles/          # Global styles
\`\`\`

## 📋 Environment Variables

Copy `.env.example` to `.env` and update with your information:

\`\`\`bash
cp .env.example .env
\`\`\`

### Required Variables

- `PUBLIC_NAME` - Your full name
- `PUBLIC_EMAIL` - Your email address
- `PUBLIC_PHONE` - Your phone number
- `PUBLIC_LOCATION` - Your location
- `PUBLIC_GITHUB_URL` - Your GitHub profile URL
- `PUBLIC_LINKEDIN_URL` - Your LinkedIn profile URL
- `PUBLIC_RESUME_URL` - Link to your resume/CV

See `.env.example` for all available configuration options.

## 🚀 Getting Started

1. **Clone the repository**
   \`\`\`bash
   git clone https://github.com/irvingcaamal/portfolio-astro.git
   cd portfolio-astro
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   \`\`\`

3. **Set up environment variables**
   \`\`\`bash
   cp .env.example .env
   # Edit .env with your information
   \`\`\`

4. **Run the development server**
   \`\`\`bash
   npm run dev
   \`\`\`

5. **Open your browser**
   Navigate to [http://localhost:4321](http://localhost:4321)

## 🏗️ Build and Deploy

### Build for production
\`\`\`bash
npm run build
\`\`\`

### Preview production build
\`\`\`bash
npm run preview
\`\`\`

### Deploy to Vercel
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add your environment variables in Vercel dashboard
4. Deploy!

### Deploy to Netlify
1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify
3. Add your environment variables in Netlify dashboard

## 🎨 Customization

### Personal Information
All personal information is configured through environment variables in `.env`. No code changes needed!

### Styling
- Colors and themes: `tailwind.config.mjs`
- Global styles: `src/styles/globals.css`
- Component styles: Individual component files

### Adding New Sections
Follow the Feature-Sliced Design architecture:
1. Create a new widget in `src/widgets/[section-name]/`
2. Add UI components in `src/widgets/[section-name]/ui/`
3. Import and use in your page

## 🏛️ Architecture: Feature-Sliced Design

This project follows Feature-Sliced Design (FSD) methodology:

- **Shared**: Reusable code shared across the application
- **Entities**: Business entities and their logic
- **Features**: Specific features like theme toggle
- **Widgets**: Large UI components like page sections
- **Pages**: Astro pages that compose widgets

## 📱 Performance

- **Lighthouse Score**: 100/100 across all metrics
- **Static Generation**: Pre-rendered HTML for instant loading
- **Optimized Assets**: Automatic image optimization and code splitting
- **Minimal JavaScript**: Only interactive components are hydrated

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Astro](https://astro.build/) for the amazing framework
- [Feature-Sliced Design](https://feature-sliced.design/) for the architecture methodology
- [Tailwind CSS](https://tailwindcss.com/) for the styling system
- [Lucide](https://lucide.dev/) for the icons
