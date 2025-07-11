# GreyFlow Pricing Calculator

A responsive pricing calculator built specifically for GreyFlow's LinkedIn marketing services targeting machine shops. This calculator is designed to be embedded as an iframe on Carrd websites and deployed on Vercel.

## Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Service Selection**: Three main services with detailed descriptions
- **Bundle Discount**: Automatic 15% discount when multiple services are selected
- **Real-time Calculations**: Pricing updates instantly as services are selected
- **Accessibility**: Full keyboard navigation and ARIA labels
- **Iframe-Ready**: Optimized for embedding in external websites

## Services

### 30 Day Kick Off - £1,000 (one-off)
*"Get the engine built"*
- Phases 1-3 included
- Complete profile optimization
- Strategy development

### Video & Visuals - £950/month
*"Ongoing story fuel"*
- 1 shoot per quarter
- 6-8 video clips
- 4 carousel graphics monthly

### Ads Booster - £650/month + ad budget
*"Need reach fast"*
- Managed £1k-£5k ad spend
- Creative development
- Performance reporting

## Technology Stack

- **Framework**: Next.js 14 with TypeScript
- **Styling**: Tailwind CSS with custom GreyFlow color scheme
- **Deployment**: Optimized for Vercel
- **Accessibility**: WCAG compliant with proper ARIA labels

## Color Scheme

- Background: #1a1f2e
- Card backgrounds: #2d3748
- Primary purple: #7c3aed
- Text white: #ffffff
- Secondary text: #e5e7eb
- Borders: #4a5568

## Getting Started

### Prerequisites

- Node.js 18 or later
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
```

### Deploy to Vercel

This project is optimized for Vercel deployment. Simply connect your repository to Vercel for automatic deployments.

## Iframe Embedding

The calculator is designed to work perfectly as an iframe embed. Use these recommended dimensions:

- **Desktop**: 1200px width, 800px height (minimum)
- **Mobile**: 100% width, 900px height (minimum)

Example embed code:
```html
<iframe 
  src="https://your-vercel-domain.vercel.app" 
  width="100%" 
  height="800" 
  frameborder="0"
  title="GreyFlow Pricing Calculator">
</iframe>
```

## Customization

The pricing calculator can be easily customized by modifying the `services` array in `components/PricingCalculator.tsx`. Each service includes:

- `id`: Unique identifier
- `name`: Service name
- `price`: Base price in GBP
- `period`: 'one-off' or 'monthly'
- `tagline`: Short descriptive tagline
- `description`: Detailed description
- `features`: Array of feature descriptions

## Bundle Discount

When users select multiple services, a 15% discount is automatically applied to all selected services. This is calculated in real-time and clearly displayed to users with before/after pricing.

## Accessibility Features

- Keyboard navigation support
- ARIA labels for screen readers
- Focus management
- High contrast colors
- Semantic HTML structure

## License

This project is proprietary software developed for GreyFlow. 