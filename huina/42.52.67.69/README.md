# VTK Trible Trailer Inc. — Static Website

Навчальний проєкт з веб-розробки. Сайт транспортно-логістичної компанії.

## Структура проєкту

```
vtk-trible-trailer/
├── index.html          ← Головна сторінка (всі сторінки SPA)
├── checkout.html       ← Сторінка оформлення замовлення (Lab 06)
├── assets/
│   ├── css/
│   │   └── style.css   ← Всі стилі
│   └── js/
│       └── main.js     ← JavaScript (навігація, фільтри, форми)
└── README.md
```

## Лабораторні роботи

| Lab | Тема | Що реалізовано |
|-----|------|----------------|
| Lab 03 | Селектори, кольори, типографіка | CSS-змінні (`:root`), Google Fonts (Barlow), reset, `.btn` hover |
| Lab 04 | Flexbox | Header (`justify-content: space-between`), `.services-grid` (flex-wrap), `.service-card` (flex-direction: column) |
| Lab 05 | CSS Grid | `.page-layout` (250px + 1fr), `.trucks-grid` (auto-fill minmax), медіа-запити |
| Lab 06 | Форми | `checkout.html`: `<fieldset>/<legend>`, radio, checkbox, `pattern`, `:valid/:invalid` |
| Lab 07 | SVG + адаптивність | Inline SVG (кошик, соцмережі), hamburger menu, `@media` breakpoints |

## Git-команди для публікації

```bash
git init
git add .
git commit -m "Initial commit: VTK Trible Trailer website (Labs 03–07)"
git branch -M main
git remote add origin https://github.com/<YOUR_USERNAME>/vtk-trible-trailer.git
git push -u origin main
```

Після пуша увімкніть **GitHub Pages** у Settings → Pages → Branch: `main` / root.

## Технології

- HTML5 (semantic tags)
- CSS3 (Flexbox, Grid, Custom Properties, Media Queries)
- Vanilla JavaScript (навігація, фільтрація, форми)
- Google Fonts: Barlow + Barlow Condensed
- Inline SVG іконки (Heroicons)
