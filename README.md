# Iris Core Solution — sitio web

Sitio de **Iris Core Solution (ICS)**: "Encontramos la fricción que nadie ve. La liberamos con
inteligencia artificial."

Una sola página con anclas. Sin build, sin dependencias: HTML, CSS y JavaScript planos.

## Estructura

```
.
├── index.html               # La página. Abre con el contrato de dirección en un comentario.
├── PRODUCT.md               # Verdad de producto: usuarios, posicionamiento, qué NO se puede inventar.
├── DESIGN.md                # Sistema visual: color con ratios medidos, tipografía, motion, componentes.
├── src/
│   ├── styles/
│   │   ├── main.css         # Hoja de entrada: solo imports, en orden obligatorio.
│   │   ├── tokens.css       # Variables de color, tipografía, motion y ritmo.
│   │   ├── base.css         # Reset, tipografía, botones, recursos gráficos, utilidades.
│   │   └── sections.css     # Una sección por bloque, en el orden de la página.
│   └── js/
│       ├── nav.js           # Menú móvil y aparición del CTA del nav tras el hero.
│       └── scanner.js       # El visor: escaneo de la carta y armado de la ficha.
└── brand/
    ├── BRANDBOOK.md          # Guía rápida de marca.
    ├── ICS-Brandbook-v1.html # Manual completo, 26 páginas (abrir en el navegador).
    └── assets/               # Fuente ABC y runtime del manual.
```

## Desarrollo local

```bash
python -m http.server 8000
```

Y abrir `http://localhost:8000`. Hace falta un servidor: la fuente ABC se precarga con
`crossorigin` y no resuelve bien por `file://`.

## Antes de tocar nada

Lee **`DESIGN.md`**. Resume las reglas que más fácil se rompen, entre ellas:

- El **fósforo nunca es clicable** — informa, no acciona.
- **Un solo CTA violeta por vista**: por eso el del nav aparece solo después del hero.
- **Un solo bloque en ABC por vista**: los títulos de tarjeta van en Space Grotesk, no en ABC.
- Sobre fondo oscuro, el texto secundario usa Fog y las etiquetas de acción usan Violet-tint.
  Acero y violeta pleno no pasan contraste ahí; los ratios medidos están en la tabla.
- `prefers-reduced-motion` muestra el visor completo, sin animación.

Los tokens están en `src/styles/tokens.css`. No hardcodees colores ni fuentes.

## Contenido que no se inventa

`PRODUCT.md` lo detalla. En corto: **ninguna cifra de desempeño va en la página sin cliente,
sector y periodo atribuibles**, y ninguna empresa se nombra sin acuerdo firmado. El estudio de
Fase 1 prohíbe prometer precisión o uplift antes de ejecutar un piloto, y esa restricción
gobierna todo el copy. La demo del visor usa un establecimiento y datos ficticios, señalados como
ejemplo ilustrativo dentro del propio componente.

## Pendiente

- El formulario de contacto apunta a un endpoint de marcador de posición. Crea la cuenta en
  Formspree (o equivalente) y reemplaza el `action` en `index.html`; está marcado con un `TODO`.
  Mientras tanto, `hola@iriscore.solutions` es la vía funcional.
