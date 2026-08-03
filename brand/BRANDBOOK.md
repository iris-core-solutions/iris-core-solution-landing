# Iris Core Solution (ICS) — Guía rápida de marca

Resumen operativo para desarrollo, extraído del manual completo en
[`ICS-Brandbook-v1.html`](./ICS-Brandbook-v1.html) (ábrelo en el navegador — es
autocontenido, usa las fuentes y scripts en `assets/`). Fuente original:
[Claude Design](https://claude.ai/design/p/0e020b7e-b2b3-431b-99b1-9ce614779a11?file=ICS+-+Brandbook+v1.dc.html).

## La marca

- **Nombre:** Iris Core Solution (ICS)
- **Tagline:** "Encontramos la fricción que nadie ve. La liberamos con inteligencia artificial."
- **Qué hacemos:** Encontramos y liberamos fricciones en los procesos de una empresa aplicando IA de forma práctica y accesible. Acompañamos de principio a fin — del análisis a la implementación — sin exigir conocimiento técnico del cliente.
- **Misión:** Encontrar y liberar las fricciones ocultas en los procesos de las pymes, acompañándolas de principio a fin en la integración de soluciones de IA, sin exigirles experticia técnica propia.
- **Visión:** Ser el aliado de referencia en Latinoamérica para que cualquier pyme opere con la fluidez de una empresa de clase mundial gracias a la IA.
- **Arquetipo:** Explorador / Descubridor.
- **Personalidad:** Curiosa, Audaz, Cercana, Resolutiva, Honesta.
- **Frase guía:** "No vendemos inteligencia artificial. Vendemos el hallazgo, el camino y la solución."
- **Contacto:** hola@iriscore.solutions · iriscore.solutions
- **Manifiesto de cierre:** "Nosotros creamos la tecnología y la experticia. Tú la transformas en eficiencia cada día."

### Proceso en 3 pasos (usar en landing / pitch)

1. **Córnea · Enfocar** — Análisis profundo de la empresa mediante entrevistas y herramientas de recopilación. La IA entra desde el inicio.
2. **Conos · Diseñar** — Propuesta y creación del agente y la estrategia, ajustados a la necesidad real del cliente.
3. **Panorama · Implementar** — Implementación y acompañamiento hasta que la solución vive en la operación, sin exigir experticia técnica al equipo.

## Símbolo

Iris de trazo monolineal, tres elementos (ninguno decorativo):

- **Anillo** — el campo completo de visión. Círculo r=41 sobre retícula de 100.
- **Arcos** — la apertura girando (el diafragma que enfoca). Dos arcos concéntricos r=31, opuestos a 180°.
- **Pupila** — la "I" de Iris y el punto de foco. Su ancho define la unidad **X** de todo el sistema.
- **Trazo** — grosor uniforme 5.5 unidades, terminales redondeadas, nunca varía de peso.

Zona libre: 1X por lado. Separación símbolo–texto: 1X. Ancho mínimo del imagotipo horizontal: 130px/40mm; vertical: 80px/26mm. Por debajo de 24px usar siempre el **sello** (disco calado) — favicon, avatar, ícono de app.

Versiones: Positivo (fondo claro), Reverso (fondo oscuro), Sobre acento (violeta pleno), 1 tinta (grabado/bordado).

SVG base del símbolo (fondo oscuro):

```html
<svg viewBox="0 0 100 100" fill="none" stroke="#F3F4F4" stroke-width="5.5" stroke-linecap="round">
  <circle cx="50" cy="50" r="41"></circle>
  <path d="M24 36 A31 31 0 0 1 43 20.5"></path>
  <path d="M76 64 A31 31 0 0 1 57 79.5"></path>
  <rect x="45" y="34" width="10" height="32" rx="5" fill="#F3F4F4" stroke="none"></rect>
</svg>
```

## Color

| Nombre | Hex | Rol | Uso |
|---|---|---|---|
| Carbón | `#0E1013` | Estructura | Fondos principales, texto sobre claro. 50–70% de la superficie. |
| Fósforo | `#3FF2A0` | El sistema habla | Datos en vivo, estados activos, hallazgos. **Nunca clicable.** ≤5%. |
| Violeta | `#6D4DF6` (hover `#5436D4`) | El usuario acciona | CTA, links, foco de formulario, selección. ≤8%, 1 CTA por vista. |
| Acero | `#5D6670` | Todo lo demás | Texto secundario, bordes, retícula, ejes. Sin límite. |
| Niebla | `#F3F4F4` | Respiro | Fondo modo claro / documentos / lectura larga. |
| Superficie | `#1B1F25` | — | Tarjetas/paneles elevados sobre Carbón. |

**Regla maestra de color:** el fósforo informa, el violeta acciona; si un elemento no es ninguna de las dos cosas, va en gris.

**Nunca:** fósforo sobre violeta (vibran) · fósforo como botón (el verde no es clicable) · degradado entre los dos acentos (cliché de IA genérica) · fósforo como fondo de área grande · fósforo en modo claro.

## Tipografía

Tres fuentes, cada una en un solo papel — nunca se mezclan roles:

| Fuente | Rol | Tamaño | Reglas |
|---|---|---|---|
| **ABC** (`assets/fonts/Abc-tuned.ttf`) | Display / titulares | 36–120px (mín. 28px) | Solo caja alta. Máx. 6 palabras por titular. Un solo bloque en ABC por vista. Nunca en párrafos, botones ni interfaz. Tracking 0 a +2%, interlínea 1.0–1.12. Fallback web: Space Grotesk 700 caja alta, tracking +4%. |
| **Space Grotesk** (Google Fonts, 400/500/600/700) | Subtítulo y cuerpo | Subtítulo 20–30px (peso 500) · Cuerpo 15–17px (peso 400, interlínea 1.6) | Texto de lectura general, UI, botones. |
| **IBM Plex Mono** (Google Fonts, 400/500/600) | Etiquetas, cifras, datos | Etiqueta 10–13px (tracking +14%) · Cifra 24–40px (peso 500) | La etiqueta mono va arriba del titular o debajo de la cifra, nunca al lado. Máx. 3 líneas seguidas. |

Regla de combinación: entre ABC y el texto siguiente debe haber al menos 2.5× de diferencia de tamaño.

## Lenguaje gráfico

Dos recursos de forma + una capa de luz — **nunca los tres a la vez en una misma pieza**:

1. **Trama de puntos** — el territorio sin explorar. Punto 1.4px, malla 26px, siempre sobre Carbón, gris muy bajo (`--dot-grid-color: #20262D`).
2. **Círculos concéntricos** — el hallazgo propagándose. Trazo 1.4px, máx. 3 anillos, siempre cortados por el borde (nunca centrados).
3. **Halo de foco** (capa de luz, no patrón) — uno por pieza, violeta al núcleo y fósforo en el borde, sangrado por una esquina. 4 de cada 5 piezas van sin halo.

Iconografía: trazo 1.3u, retícula 24, máx. 4 cortes por ícono (en cambios de dirección), terminales redondeadas. Lineal por defecto; relleno solo en estado activo (máx. 1 por pantalla). A ≤20px, ícono cerrado sin cortes.

## Motion

Todo movimiento imita el enfoque de un lente: entra rápido, se asienta seco, **sin rebote elástico**.

```css
--ease-focus: cubic-bezier(.2, .8, .2, 1);
```

- Búsqueda y hallazgo (intro/carga): arcos + pupila recorren la pantalla, desaceleran, el anillo cierra el logo, pausa 3s.
- Procesando: la pupila se contrae/dilata en fósforo, loop 2.4s — reemplaza cualquier spinner genérico.
- Escaneo (transición de sección): haz violeta recorre la trama de puntos, 3s lineal.

## Uso en este repo

Los tokens de color/tipografía/motion viven en [`src/styles/tokens.css`](../src/styles/tokens.css)
como variables CSS (`--ics-*`, `--font-*`, `--text-*`, `--ease-focus`). Usa esas variables en vez
de hardcodear valores para que la landing quede sincronizada con el manual.
