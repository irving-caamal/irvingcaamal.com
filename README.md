# Irving Caamal Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS featuring glassmorphism design and beautiful animations.

## 🚀 Features

- **Modern Design**: Glassmorphism effects, gradients, and smooth animations
- **Fully Responsive**: Works perfectly on all devices
- **Dark/Light Mode**: Theme switching with smooth transitions
- **Environment Variables**: Easy configuration without code changes
- **SEO Optimized**: Meta tags, Open Graph, and Twitter Cards
- **Performance**: Optimized images and lazy loading
- **Accessibility**: WCAG compliant with proper ARIA labels

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS with custom animations
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Theme**: next-themes
- **TypeScript**: Full type safety

## 📋 Environment Variables

Copy `.env.example` to `.env.local` and update with your information:

\`\`\`bash
cp .env.example .env.local
\`\`\`

### Required Variables

- `NEXT_PUBLIC_NAME` - Your full name
- `NEXT_PUBLIC_EMAIL` - Your email address
- `NEXT_PUBLIC_PHONE` - Your phone number
- `NEXT_PUBLIC_LOCATION` - Your location
- `NEXT_PUBLIC_GITHUB_URL` - Your GitHub profile URL
- `NEXT_PUBLIC_LINKEDIN_URL` - Your LinkedIn profile URL
- `NEXT_PUBLIC_RESUME_URL` - Link to your resume/CV

See `.env.example` for all available configuration options.

## 🚀 Getting Started

1. **Clone the repository**
   \`\`\`bash
   git clone https://github.com/irvingcaamal/portfolio.git
   cd portfolio
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   \`\`\`

3. **Set up environment variables**
   \`\`\`bash
   cp .env.example .env.local
   # Edit .env.local with your information
   \`\`\`

4. **Run the development server**
   \`\`\`bash
   npm run dev
   \`\`\`

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

\`\`\`
├── app/                 # Next.js app directory
├── components/          # Reusable UI components
├── lib/                 # Utility functions and config
├── widgets/             # Page sections (header, hero, about, etc.)
├── public/              # Static assets
└── styles/              # Global styles
\`\`\`

## 🎨 Customization

### Personal Information
All personal information is configured through environment variables in `.env.local`. No code changes needed!

### Styling
- Colors and themes: `tailwind.config.ts`
- Global styles: `app/globals.css`
- Component styles: Individual component files

### Content
- Projects: Update the `projects` array in `widgets/projects-section.tsx`
- Skills: Modify `skillCategories` in `widgets/skills-section.tsx`
- Experience: Edit `experiences` array in `widgets/experience-section.tsx`

## 📱 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add your environment variables in Vercel dashboard
4. Deploy!

### Other Platforms
The site can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for the beautiful UI components
- [Lucide](https://lucide.dev/) for the icons
- [Tailwind CSS](https://tailwindcss.com/) for the styling system
