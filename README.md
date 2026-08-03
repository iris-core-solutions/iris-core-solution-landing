# Iris Core Solution — Landing page

Landing page de **Iris Core Solution (ICS)**: "Encontramos la fricción que nadie ve. La liberamos con inteligencia artificial."

## Estructura

```
.
├── index.html              # Landing page (estático, sin build step)
├── src/
│   └── styles/
│       ├── tokens.css      # Design tokens: color, tipografía, motion (del manual de marca)
│       └── main.css        # Estilos de la landing
└── brand/
    ├── BRANDBOOK.md         # Guía rápida de marca para desarrollo
    ├── ICS-Brandbook-v1.html # Manual de identidad visual completo (abrir en navegador)
    └── assets/               # Fuentes y runtime necesarios para ver el manual
```

## Desarrollo local

No requiere build ni dependencias — es HTML/CSS estático. Para verlo localmente:

```bash
python3 -m http.server 8000
# abrir http://localhost:8000
```

## Marca

Antes de agregar o modificar secciones, revisa [`brand/BRANDBOOK.md`](brand/BRANDBOOK.md) —
resume paleta, tipografía, reglas de uso del símbolo y lenguaje gráfico. Los tokens
correspondientes están en [`src/styles/tokens.css`](src/styles/tokens.css); úsalos en vez de
hardcodear colores o fuentes.

El manual completo (26 páginas) está en [`brand/ICS-Brandbook-v1.html`](brand/ICS-Brandbook-v1.html)
y se puede abrir directamente en el navegador.
