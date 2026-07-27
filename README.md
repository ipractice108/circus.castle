# Circus Castle Bali — Landing Page

Landing page for Circus Castle Bali — aerial school, professional rig and castle
residence in central Ubud.

Single self-contained static page: `index.html` carries all markup, CSS and JS
inline. No build step, no dependencies, no bundler. The only external request is
the Jost webfont from Google Fonts; every graphic is inline SVG or CSS.

## 🎨 Design System

Palette lifted from the brand deck:

- **Background**: warm black `#181310`, panels `#201915` / `#231f20`
- **Accents**: magenta `#f44aad` (primary), cyan `#00adef`, green `#00a650`, orange `#f0471e`
- **Text**: white `#ffffff`, muted `rgba(255,255,255,.62)`
- **Type**: Avenir Next (brand face), Jost as the web fallback

Signature element: the silk — a scroll rail running down the page.

## 🚀 Local preview

No install needed — open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## 🌐 Deploy

Deployed on Vercel as a static site. `vercel.json` pins `framework: null` with no
build or install command, so Vercel serves the repo root as-is. Pushing to the
production branch triggers a deploy.

## 📁 Project Structure

```
circus.castle/
├── index.html      # the entire site
├── favicon.svg
├── robots.txt
└── vercel.json     # static serving + security headers
```

## 📜 History

The previous Next.js 14 / Tailwind / Framer Motion version of this site is kept
on the **`legacy-nextjs`** branch and the **`legacy-nextjs-site`** tag.

```bash
git checkout legacy-nextjs
```

## 📝 License

This project is proprietary and confidential.

## 🤝 Contact

For inquiries, write 'MAGIC' or 'JUMP' in Direct on Instagram or WhatsApp.

---

Built with ❤️ for Circus Castle Bali
