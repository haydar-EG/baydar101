# Studio Landing Site

A modern, high-performance landing site for a studio offering custom websites and AI solutions. Built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Dark theme with minimalist aesthetic and generous negative space
- **High Performance**: Optimized for Core Web Vitals and Lighthouse scores
- **AI Integration**: Interactive project idea assistant with placeholder AI logic
- **Responsive**: Mobile-first design that works on all devices
- **Accessible**: WCAG 2.1 AA compliant with proper semantic markup
- **Type Safe**: Full TypeScript implementation with strict typing
- **Tested**: Unit tests with Vitest and E2E tests with Playwright

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v3 with custom design tokens
- **Animation**: Framer Motion
- **Forms**: Server Actions with Zod validation
- **Icons**: Lucide React
- **Testing**: Vitest + React Testing Library + Playwright
- **Linting**: ESLint + Prettier

## 📁 Project Structure

```
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   │   ├── contact/       # Contact form handler
│   │   └── og/           # Dynamic OG image generation
│   ├── globals.css       # Global styles and Tailwind imports
│   ├── layout.tsx        # Root layout with metadata
│   └── page.tsx          # Homepage
├── components/            # React components
│   ├── sections/         # Page sections
│   │   ├── hero-section.tsx
│   │   ├── services-section.tsx
│   │   └── ai-demo-section.tsx
│   └── ui/               # Reusable UI components
│       ├── button.tsx
│       ├── input.tsx
│       ├── textarea.tsx
│       ├── card.tsx
│       ├── accordion.tsx
│       └── badge.tsx
├── lib/                   # Utility libraries
│   ├── ai/               # AI-related functions
│   ├── email/            # Email sending utilities
│   ├── validation/       # Zod schemas
│   └── utils/            # General utilities
├── tests/                # Test files
│   ├── unit/             # Unit tests
│   └── e2e/              # E2E tests
└── public/               # Static assets
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd studio-landing-site
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Edit `.env.local` with your actual values:
   ```env
   CONTACT_EMAIL=hello@yourstudio.com
   RESEND_API_KEY=your_resend_api_key
   OPENAI_API_KEY=your_openai_api_key
   NEXT_PUBLIC_SITE_URL=https://yourdomain.com
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run test` - Run unit tests
- `npm run test:watch` - Run tests in watch mode
- `npm run test:e2e` - Run E2E tests
- `npm run format` - Format code with Prettier
- `npm run type-check` - Run TypeScript type checking

## 🎨 Design System

### Color Palette

The site uses a carefully crafted dark theme with high contrast ratios:

- **Background**: `#121212` (base), `#171717` (alt), `#1f1f1f` (elevated)
- **Surface**: `#242424` (base), `#2b2b2b` (elevated), `#333333` (hover)
- **Border**: `#383838` (base), `#484848` (elevated), `#595959` (focus)
- **Accent**: `#22c55e` (green), provides excellent contrast and modern feel
- **Text**: `#f3f4f6` (primary), `#b3b3b3` (secondary), `#808080` (tertiary)

### Typography

- **Primary Font**: Inter (clean, modern, excellent readability)
- **Monospace Font**: JetBrains Mono (for code elements)
- **Scale**: Fluid typography that scales with viewport size

### Spacing & Layout

- **Container**: Max-width 1280px with responsive padding
- **Sections**: 64px (mobile) to 96px (desktop) vertical padding
- **Grid**: CSS Grid and Flexbox for layouts
- **Breakpoints**: Mobile-first approach with sm, md, lg, xl breakpoints

## 🤖 AI Integration

### Current Implementation

The AI Demo section includes a placeholder implementation that:
- Analyzes project descriptions using keyword detection
- Returns structured project outlines
- Simulates API delays and occasional failures
- Provides realistic suggestions based on project type

### Production Integration

To replace with a real AI provider:

1. **OpenAI Integration**
   ```typescript
   import OpenAI from 'openai'
   
   const openai = new OpenAI({
     apiKey: process.env.OPENAI_API_KEY,
   })
   
   // Replace the placeholder function in lib/ai/generateProjectOutline.ts
   ```

2. **Anthropic Integration**
   ```typescript
   import Anthropic from '@anthropic-ai/sdk'
   
   const anthropic = new Anthropic({
     apiKey: process.env.ANTHROPIC_API_KEY,
   })
   ```

3. **Custom Model Integration**
   - Update the `generateProjectOutline` function
   - Modify the `ProjectOutline` interface if needed
   - Update environment variables

## 📧 Email Integration

### Current Implementation

The contact form uses a mock email service that logs to console.

### Production Setup

#### Option 1: Resend (Recommended)

```bash
npm install resend
```

```typescript
// lib/email/sendEmail.ts
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendEmail(data: ContactFormData) {
  const { data: emailData, error } = await resend.emails.send({
    from: 'noreply@yourdomain.com',
    to: [process.env.CONTACT_EMAIL!],
    subject: `New Project Inquiry from ${data.name}`,
    html: generateEmailTemplate(data),
    replyTo: data.email,
  })
  
  return { success: !error, message: error?.message || 'Email sent successfully' }
}
```

#### Option 2: AWS SES

```bash
npm install @aws-sdk/client-ses
```

#### Option 3: SendGrid

```bash
npm install @sendgrid/mail
```

## 🔍 SEO & Performance

### Metadata Configuration

The site includes comprehensive metadata setup:
- Open Graph tags for social sharing
- Twitter Card support
- JSON-LD structured data
- Dynamic OG image generation

### Performance Optimizations

- **Images**: Next.js Image component with optimization
- **Fonts**: Optimized Google Fonts loading
- **Code Splitting**: Automatic code splitting via Next.js
- **Edge Runtime**: Used where appropriate for API routes
- **Bundle Analysis**: Built-in Next.js bundle analyzer

### Core Web Vitals Targets

- **LCP** (Largest Contentful Paint): < 2.0s
- **CLS** (Cumulative Layout Shift): < 0.1
- **TTI** (Time to Interactive): < 3.0s

## 🧪 Testing

### Unit Tests

Located in `tests/unit/`, using Vitest and React Testing Library:

```bash
npm run test              # Run all tests
npm run test:watch        # Watch mode
npm run test:ui           # UI mode
```

### E2E Tests

Located in `tests/e2e/`, using Playwright:

```bash
npm run test:e2e          # Run E2E tests
npm run test:e2e:ui       # Interactive UI mode
```

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect your repository** to Vercel
2. **Set environment variables** in Vercel dashboard
3. **Deploy automatically** on every push to main branch

### Other Platforms

The site can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Digital Ocean App Platform
- Railway
- Self-hosted with Docker

### Environment Variables for Production

```env
CONTACT_EMAIL=hello@yourstudio.com
RESEND_API_KEY=re_xxxxxxxxxxxxx
OPENAI_API_KEY=sk_xxxxxxxxxxxxx
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXTAUTH_SECRET=your-secret-key
```

## 🔧 Customization

### Adding New Sections

1. Create a new component in `components/sections/`
2. Import and add to `app/page.tsx`
3. Update navigation if needed

### Modifying Design Tokens

Edit `tailwind.config.ts` to customize:
- Colors
- Typography scale  
- Spacing values
- Animation durations
- Border radius values

### Adding a CMS

The site is designed to easily integrate with headless CMS solutions:

#### Contentful
```bash
npm install contentful
```

#### Sanity
```bash
npm install sanity @sanity/client
```

#### Notion API
```bash
npm install @notionhq/client
```

## 🔄 Future Enhancements

### Phase 2 Features
- [ ] Complete contact form implementation
- [ ] Portfolio/case studies section
- [ ] Blog functionality
- [ ] Client testimonials
- [ ] Advanced animations and micro-interactions

### Phase 3 Features
- [ ] Multi-language support (i18n)
- [ ] A/B testing framework
- [ ] Advanced analytics
- [ ] User authentication
- [ ] Admin dashboard

### CMS Integration
- [ ] Contentful/Sanity integration
- [ ] Dynamic page generation
- [ ] Content preview mode
- [ ] Editorial workflow

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Lucide Icons](https://lucide.dev/) - Beautiful icon set
- [Radix UI](https://www.radix-ui.com/) - Unstyled, accessible components
