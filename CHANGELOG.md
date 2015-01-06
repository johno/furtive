# Furtive Changelog

## 2.0.0 Replace the flex grid

The grid now uses the following, 6 column grid system with md, lg breakpoints:

```scss
.grd { /* ... */ }
.grd-row { /* ... */ }
.grd-row-col-1-6 { /* ... */ }
.grd-row-col-2-6 { /* ... */ }
.grd-row-col-3-6 { /* ... */ }
.grd-row-col-4-6 { /* ... */ }
.grd-row-col-5-6 { /* ... */ }
.grd-row-col-6 { /* ... */ }

.grid-row-col-3-6--md { /* ... */ }
.grid-row-col-3-6--lg { /* ... */ }
```

The class naming scheme has slightly changed, ensuring the lowest specificity possible.

## 1.0.2 Last version before breaking grid changes

<https://github.com/johnotander/furtive/releases/tag/1.0.2>

## 1.0.0 Initial release

The first implementation of Furtive.
