# Design

Sistema visual de Iris Core Solution en la web. **No es una identidad nueva:** hereda y documenta
el mundo del manual `brand/ICS-Brandbook-v1.html` (v1, 2026). Cuando este archivo y el manual
difieran, manda el manual — salvo en las excepciones de legibilidad registradas abajo, que existen
porque el manual describe intención de marca y este archivo describe lo que la pantalla verifica.

Los valores viven en `src/styles/tokens.css`. Nunca se hardcodean colores ni fuentes.

## Mundo

Instrumento óptico y ficha de evidencia. La página se comporta como un lente que enfoca: entra
rápido, se asienta seco, sin rebote. Lo que la distingue de una agencia de IA genérica es que
enseña el mecanismo funcionando en vez de describirlo.

## Color

| Token | Hex | Rol |
|---|---|---|
| `--ics-carbon` | `#0E1013` | Fondo dominante. 50–70 % de la superficie. |
| `--ics-surface` | `#1B1F25` | Paneles elevados sobre carbón. |
| `--ics-mist` | `#F3F4F4` | Fondo de las secciones de lectura; texto sobre oscuro. |
| `--ics-fog` | `#8D95A0` | **Texto secundario sobre fondo oscuro.** |
| `--ics-steel` | `#5D6670` | Bordes, retícula, ejes. Texto secundario **solo sobre fondo claro**. |
| `--ics-violet` | `#6D4DF6` | El usuario acciona: CTA, links, foco. ≤8 %, un CTA por vista. |
| `--ics-phosphor` | `#3FF2A0` | El sistema habla: dato en vivo, hallazgo. ≤5 %. **Nunca clicable.** |

**Regla maestra:** el fósforo informa, el violeta acciona; lo que no sea ninguna de las dos va en gris.

La regla se aplica al contenido, no al tono. El copy de posicionamiento no es un dato que reporte
el sistema, así que el eyebrow del hero va en Fog: el primer fósforo que ve un visitante tiene que
ser evidencia real, en el visor. Los ocho pasos del pipeline tampoco son accionables, así que sus
viñetas van en Acero, no en violeta.

### Contraste verificado (WCAG 2.1)

| Par | Ratio | Uso |
|---|---|---|
| Mist sobre Carbón | 17.29 | Texto principal en oscuro |
| Fósforo sobre Carbón | 13.08 | Etiquetas de dato |
| Fog sobre Carbón | 6.30 | Texto secundario en oscuro |
| Fog sobre Superficie | 5.47 | Texto secundario en panel |
| Acero sobre Mist | 5.29 | Texto secundario en claro |
| Violeta sobre Mist | 4.71 | Links en claro |
| Blanco sobre Violeta | 5.19 | Texto del CTA |
| Violet-tint sobre Carbón | 12.97 | Etiquetas de acción en oscuro |
| **Acero sobre Carbón** | **3.27** | ❌ Solo texto grande — no usar como texto secundario |
| **Acero sobre Superficie** | **2.84** | ❌ No usar como texto |
| **Violeta sobre Carbón** | **3.67** | ❌ No usar como texto en oscuro |
| **Violet-tint sobre Violeta** | **3.54** | ❌ Solo texto grande |

**Dos excepciones registradas.** Las dos son lo mismo: sobre fondo oscuro, el tono medio de una
familia no llega a 4.5 y hay que subir al tono claro de esa misma familia, que conserva el
significado.

1. El manual asigna a Acero el rol de "texto secundario". Eso solo se sostiene sobre fondo claro
   (5.29). Sobre Carbón y Superficie el texto secundario usa Fog. Acero conserva sus otros roles
   (bordes, retícula, ejes) en ambos modos.
2. El violeta pleno como **texto** solo se sostiene sobre fondo claro (4.71). Sobre oscuro las
   etiquetas de acción usan Violet-tint (12.97). El violeta pleno sigue siendo el color del
   **botón**, donde es fondo y no texto: blanco sobre violeta da 5.19.

**Consecuencia:** no hay ninguna sección de fondo violeta pleno. El violeta entra como botón, link
y foco, nunca como campo grande — lo que además respeta el techo de 8 % del manual.

### Prohibiciones

- Degradado violeta→fósforo (cliché de IA genérica). La única mezcla autorizada es el halo de foco.
- Fósforo como fondo de área grande, como botón, o en modo claro.
- Fósforo sobre violeta.

## Tipografía

| Familia | Rol | Reglas |
|---|---|---|
| **ABC** (TTF local) | Titulares | Solo caja alta, máx. 6 palabras, un bloque por vista. Nunca en párrafos, botones ni interfaz. Interlínea 1.0–1.12. |
| **Space Grotesk** | Subtítulo, cuerpo, UI | Subtítulo 20–30 px / 500. Cuerpo 15–17 px / 400, interlínea 1.6. |
| **IBM Plex Mono** | Etiquetas, cifras, campos | Etiqueta 10–13 px, tracking +14 %, caja alta. Cifra 24–40 px / 500. |

- Diferencia mínima de 2.5× entre el titular ABC y el texto que le sigue.
- La etiqueta mono va **arriba** del titular o **debajo** de la cifra, nunca al lado. Máx. 3 líneas
  seguidas.
- ABC se precarga desde el `<head>`; con `font-display: block` y sin preload el titular queda
  invisible durante la carga.
- Mono es la tipografía de la ficha de evidencia: nombres de campo, procedencia y confianza.

## Lenguaje gráfico

Dos recursos de forma y una capa de luz. **Nunca los tres en la misma pieza.**

1. **Trama de puntos** — territorio sin explorar. Punto 1.4 px, malla 26 px, solo sobre Carbón.
2. **Círculos concéntricos** — el hallazgo propagándose. Trazo 1.4 px, máx. 3 anillos, siempre
   cortados por el borde, nunca centrados.
3. **Halo de foco** — violeta al núcleo, fósforo en el borde, sangrado por una esquina. **Uno por
   sitio**, no por página: solo el hero.

Reparto por sección:

| Sección | Fondo | Recurso |
|---|---|---|
| Hero | Carbón | Trama + halo |
| Aplicaciones · Prospect OS | Carbón | Concéntricos |
| ¿Qué es lo que somos? | Mist | Ninguno (solo tipografía) |
| Procesos | Mist | Ninguno |
| Valores | Mist | Concéntricos, eco (`.rings-echo`: más pequeños, más tenues, esquina opuesta) |
| Contacto | Carbón | Trama |
| Footer | Carbón | Ninguno |

Ritmo resultante: oscuro–oscuro (producto) → claro–claro–claro (lectura) → oscuro–oscuro (acción).

## Motion

Todo movimiento imita el enfoque de un lente: entra rápido, se asienta seco, **sin rebote elástico**.

- `--ease-focus: cubic-bezier(.2, .8, .2, 1)` en todas las transiciones.
- Micro-interacciones 150–300 ms. Salida más corta que la entrada.
- **Procesando** = la pupila del símbolo se contrae y dilata en fósforo, loop 2.4 s. Reemplaza
  cualquier spinner genérico.
- **Escaneo** = haz violeta que recorre el contenido, lineal, 3 s.
- `prefers-reduced-motion: reduce` muestra el estado final completo y legible, sin animación. No es
  una degradación: es la condición para que la animación exista.

## Componentes

- **Botón primario** — violeta, texto blanco, radio 8 px. **Uno por vista**, y eso incluye el
  del nav: se oculta dentro del hero (donde manda el CTA del hero) y dentro de contacto (donde
  manda el del formulario). Lo hace `nav.js` con dos observadores.
- **Botón fantasma** — borde hairline, texto Fog sobre oscuro; pasa a Mist en hover. Fog y no
  Mist en reposo, para que la acción secundaria no compita con la primaria.
- **Tarjeta** — radio 12 px. Sobre claro: fondo blanco + borde hairline. Sobre oscuro: fondo
  Superficie, sin borde.
- **Etiqueta mono** — caja alta, tracking +14 %. Fósforo cuando reporta un dato del sistema, violeta
  cuando titula una sección accionable, Acero/Fog cuando es neutra.
- **Ficha de evidencia** — el componente propio del sitio: pares campo/valor en mono, con
  procedencia y confianza siempre visibles. Es la forma construida de "la trazabilidad es el
  producto".
- **Foco** — anillo violeta de 2 px con offset. Nunca se elimina.

## Accesibilidad

- WCAG 2.1 AA como piso; los pares verificados están en la tabla de contraste.
- El color nunca es el único portador de significado: el fósforo de la evidencia va acompañado de
  etiqueta de texto.
- Objetivos táctiles ≥44 px en todo lo que sea un destino por sí solo: botones, enlaces del
  nav, logo y los correos de contacto y footer llevan padding para llegar ahí aunque su texto
  mida menos. La excepción son los enlaces dentro de un párrafo, donde WCAG 2.5.8 la permite.
- Jerarquía de encabezados secuencial, sin saltos de nivel.
- El formulario tiene labels visibles, no placeholders como label.
