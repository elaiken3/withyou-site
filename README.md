# WithYou — website

The public site for **WithYou**, a calm, shame-free iPhone app for ADHD brains: <https://wearewithyou.app>.

It's a small static site on GitHub Pages. Jekyll renders the Markdown pages; the homepage is plain HTML and CSS.

## Structure

| Path | What it is |
| --- | --- |
| `index.html` | Homepage. Plain HTML (no front matter), so Jekyll copies it as-is. |
| `styles.css` | All styles: design tokens (light + dark), homepage sections, and `.prose` styles for the Markdown pages. |
| `assets/js/main.js` | Progressive enhancement only (closes the mobile menu). The site works fully without JavaScript. |
| `_layouts/default.html` | Shared header and footer for the Markdown pages, so they match the homepage. |
| `how-to.md`, `privacy.md`, `support.md`, `404.html` | Content pages (`/how-to/`, `/privacy/`, `/support/`, 404). |
| `_config.yml` | Site settings, `jekyll-sitemap` (builds `/sitemap.xml`), excludes this README. |
| `robots.txt` | Allows crawling and points to the sitemap. |
| `assets/fonts/` | Self-hosted fonts (see below). |
| `assets/images/` | Logo variants, the "W" mark (`mark.svg`, `favicon.svg`), favicons, `apple-touch-icon.png`, `icon-512.png`, and the social card `og-image.png`. |
| `CNAME` | Custom domain. Don't remove it. |

## Principles for the site

- **No third-party requests.** No Google Fonts, CDNs, analytics or embeds. It matches the app's privacy promise and keeps the site fast.
- **Calm.** One focal point per section, nothing that animates on its own, `prefers-reduced-motion` respected.
- **Light and dark.** Every color is a token in `styles.css` with a designed dark value.
- **Accessible.** Semantic landmarks, visible focus, WCAG AA contrast, and native `<details>` for the menu and FAQ.

## Preview locally

```bash
python3 -m http.server 8080
# open http://localhost:8080
```

This shows the homepage exactly as deployed. The Markdown pages need Jekyll to render with the layout:

```bash
gem install bundler jekyll
jekyll serve
```

## Fonts

Both fonts are variable, latin-subset `woff2` files from Fontsource, licensed under the SIL Open Font License 1.1 (license texts are next to the files):

- **Instrument Sans** (headings, buttons): `@fontsource-variable/instrument-sans`
- **Hanken Grotesk** (body text): `@fontsource-variable/hanken-grotesk`

The phone mockups use the system font (SF on Apple devices) so they look like the real app.

## Updating images

The favicons, `apple-touch-icon.png`, `icon-512.png` and `og-image.png` were rendered from `assets/images/mark.svg` and the logo with a headless browser. If you change the mark, re-export them at the same sizes (16, 32, 180, 512 and 1200×630).
