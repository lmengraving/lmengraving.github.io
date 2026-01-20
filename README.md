# L M Precision Pte Ltd - Website

A high-performance static website for L M Precision Pte Ltd — precision tool & die manufacturing, industrial engraving, laser marking, 5-axis CNC machining, and reverse engineering services in Singapore.

## 🚀 Tech Stack

| Component | Choice | Reason |
|-----------|--------|--------|
| Type | Static Site (SSG) | Fastest load times, secure, cheap hosting |
| Framework | Astro | Best performance-to-ease-of-use ratio |
| Styling | Tailwind CSS | Clean code, easy to maintain, mobile-responsive |
| Images | WebP/AVIF ready | High quality with minimal bandwidth |
| Hosting | Cloudflare Pages / Netlify | Free SSL, global CDN, free tier |

## 📁 Project Structure

```
cnc-laser-site/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   ├── Services.astro
│   │   ├── Capabilities.astro
│   │   ├── Precision.astro
│   │   ├── Contact.astro
│   │   └── Footer.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
└── package.json
```

## 🛠️ Quick Start

### Prerequisites
- Node.js 18+ 
- npm or pnpm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🎨 Design Features

- **Industrial Aesthetic**: Dark steel tones with laser-orange accents
- **Typography**: Oswald (display), JetBrains Mono (technical), Barlow (body)
- **Animations**: Scan lines, pulse glows, fade-up reveals
- **Grid Overlay**: Subtle precision grid pattern
- **Responsive**: Mobile-first design with smooth breakpoints

## 🚀 Deployment

### Cloudflare Pages (Recommended)

1. Push to GitHub/GitLab
2. Connect repository to Cloudflare Pages
3. Build command: `npm run build`
4. Output directory: `dist`

### Netlify

1. Push to GitHub/GitLab  
2. Connect repository to Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`

### Manual Build

```bash
npm run build
# Upload contents of /dist folder to any static host
```

## 📊 Sections

1. **Hero** - Animated showcase with stats
2. **Services** - 6 service cards with specifications
3. **Capabilities** - Machine specs and material list
4. **Precision** - Quality assurance and certifications
5. **Contact** - Quote form and contact information
6. **Footer** - Links and company info

## 🖼️ Adding Images

Place optimized images in `/public/images/`:

```bash
# Convert to WebP (using cwebp)
cwebp input.jpg -o output.webp -q 85

# Or use AVIF for better compression
avifenc input.png output.avif -s 6 -q 60
```

Reference in components:
```astro
<img src="/images/machine.webp" alt="CNC Machine" loading="lazy" />
```

## ⚡ Performance Optimizations

- Static generation (no server required)
- Lazy-loaded images
- Minimal JavaScript
- Tailwind CSS purging
- Preconnect for Google Fonts
- Async font loading

## 📝 Customization

### Colors (tailwind.config.mjs)
```javascript
colors: {
  'laser': '#ff3d00',      // Primary accent
  'steel-950': '#18181b',  // Background
  'precision-green': '#00ff88' // Status indicators
}
```

### Fonts
Replace Google Fonts links in `Layout.astro` and update `fontFamily` in Tailwind config.

## 📄 License

MIT License - Feel free to use for commercial projects.

---

Built with precision. 🎯
