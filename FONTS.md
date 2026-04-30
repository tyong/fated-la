# Fonts and Paper parity

This project uses custom webfonts from `static/fonts`:

- `FigGrotesk 0.3 Trial`
- `NOIR et BLANC`
- `Apercu Mono` / `Apercu Mono Pro`

## Why Paper looks different

Paper can only render font families that are installed locally on your machine.  
If these families are not installed, Paper falls back to system fonts, even though the website can still render them from `static/fonts`.

## Recommended setup

1. Keep the webfont source of truth in this repo:
   - `static/fonts/FigGrotesk/*`
   - `static/fonts/NoirEnBlanc/*`
   - `static/fonts/ApercuMonoProRegular/*`
2. Install desktop font files locally (OTF/TTF/WOFF where supported) from your licensed source.
3. In Paper, use these family names:
   - `FigGrotesk 0.3 Trial`
   - `NOIR et BLANC`
   - `Apercu Mono`
   - `Apercu Mono Pro`

## If local files are missing

If your local machine is missing font assets, pull them from your team font source repo:

```bash
git clone <your-font-repo-url> ~/font-source
```

Then install the desktop versions and restart Paper.

## Safe fallback for design QA

Until local fonts are installed in Paper, use this fallback stack for layout checks:

- Serif display: `Instrument Serif`
- Sans body: `System Sans-Serif`
- Mono labels: system mono fallback

This keeps spacing and hierarchy reasonably close while final font setup is pending.
