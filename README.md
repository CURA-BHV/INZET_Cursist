# INZET! Cursistenapp

Training app voor BHV-cursisten. Een offline-first PWA die draait op tablets (Lenovo Yoga).

## Installatie

```bash
npm install
```

## Development

```bash
npm run dev
```

## Productie build

```bash
npm run build
npm run preview
```

De build wordt geplaatst in `dist/`. De app is een PWA met service worker en werkt volledig offline na eerste bezoek.

## Deployment

De app wordt automatisch gedeployed naar GitHub Pages via `.github/workflows/`.
