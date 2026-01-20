# L M Engraving - Website

Website for L M Engraving — precision tool & die manufacturing, industrial engraving, laser marking, and CNC machining services in Singapore.

**Live site:** https://lmengraving.github.io

## Tech Stack

- **Framework:** Astro (static site generation)
- **Styling:** Tailwind CSS
- **Hosting:** GitHub Pages

## Development

### Prerequisites
- Node.js 18+
- npm

### Commands

```bash
npm install        # Install dependencies
npm run dev        # Start dev server at localhost:4321
npm run build      # Build for production
npm run preview    # Preview production build
```

## Deployment

The site automatically deploys to GitHub Pages when changes are pushed to `main`. The workflow is configured in `.github/workflows/deploy.yml`.

### Custom Domain (Future)

To use a custom domain:

1. Go to repository **Settings > Pages**
2. Enter your domain under "Custom domain"
3. Add DNS records with your domain registrar:
   - For apex domain: A records pointing to GitHub's IPs
   - For www subdomain: CNAME record pointing to `lmengraving.github.io`
4. Update `site` in `astro.config.mjs` to your domain

## Project Structure

```
src/
├── components/    # Astro components (Header, Hero, Services, etc.)
├── layouts/       # Page layouts
└── pages/         # Site pages (index, privacy, 404)
public/            # Static assets
```

## License

MIT
