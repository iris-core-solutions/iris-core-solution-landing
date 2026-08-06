# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Dos audiencias, con prioridad en la primera:

1. **Líder comercial o de operaciones en una empresa grande** (dirección comercial, trade
   marketing, inteligencia de negocio). Evalúa proveedores con un comité detrás: necesita entender
   el método, no solo el resultado, y tiene que poder defender la decisión ante gente que no estuvo
   en la reunión. Llega a la página después de oír de ICS por referencia o por una conversación
   comercial en curso, no por búsqueda orgánica.
2. **Dueño o gerente de pyme** que sabe que la IA le sirve pero no tiene equipo técnico para
   evaluarla ni implementarla.

El trabajo que ambos vienen a hacer es el mismo: decidir si vale la pena una primera conversación.

## Product Purpose

ICS encuentra y libera las fricciones ocultas en los procesos de una empresa aplicando IA de forma
práctica, y acompaña de principio a fin — del análisis a la implementación — sin exigir experticia
técnica del cliente.

Éxito para la página: un visitante entiende qué hace ICS, ve el mecanismo funcionando, y agenda o
escribe.

## Positioning

"No vendemos inteligencia artificial. Vendemos el hallazgo, el camino y la solución."

El diferencial no es detectar prospectos: es entregar **por qué** cada cuenta es un prospecto, con
procedencia del dato, nivel de confianza y revisión humana. Un competidor que entrega una lista sin
esa trazabilidad no puede copiar esa afirmación.

## Operating Context

El primer producto con nombre propio es **Iris Prospect OS** (Fase 1 documentada en
`Iris_Fase_01_Estudio_Metodologico_v0.1.pdf`, v0.1, aprobada para piloto — no para producción):

- **Intake estructurado** de 20 preguntas (10 core + módulos adaptativos) que convierte el
  conocimiento comercial de una empresa en un ICP y un anti-perfil.
- **Pipeline de 8 etapas:** Intake → Enriquecimiento → Normalización → Validación → Profiling →
  Revisión humana → Versionado → Feedback.
- **7 dimensiones de priorización**, deliberadamente no colapsadas en un score único:
  Fit · Need · Timing · Expected value · Serviceability · Engagement · Risk.
- **Caso de uso vivo:** food service (hoteles y restaurantes). A partir de cartas publicadas
  se detectan productos mencionados y se infiere qué proveedor tiene una necesidad real ahí.

## Capabilities and Constraints

- **No se promete precisión ni uplift antes de ejecutar un piloto.** Restricción explícita del
  estudio de Fase 1; gobierna todo el copy público.
- No hay casos de éxito publicables todavía. Ninguna cifra de desempeño puede aparecer en la web
  sin cliente, sector y periodo atribuibles.
- El sitio es estático (HTML/CSS/JS sin build) y debe seguir siéndolo mientras no haya una razón
  de producto para cambiarlo.
- La captura de leads depende de un servicio externo de formularios pendiente de crear; el correo
  es el respaldo funcional.
- Mercado principal Colombia, con intención de otros mercados de la región.

## Brand Commitments

Manual de identidad visual v1 (2026), completo y vinculante: `brand/ICS-Brandbook-v1.html`,
resumen operativo en `brand/BRANDBOOK.md`.

- **Nombre:** Iris Core Solution (ICS). El borrador del fundador usa "Solutions" en plural; el
  manual dice singular y el manual manda.
- **Tagline:** "Encontramos la fricción que nadie ve. La liberamos con inteligencia artificial."
- **Arquetipo:** Explorador / Descubridor. **Personalidad:** Curiosa, Audaz, Cercana, Resolutiva,
  Honesta.
- **Manifiesto de cierre:** "Nosotros creamos la tecnología y la experticia. Tú la transformas en
  eficiencia cada día."
- **Contacto:** hola@iriscore.solutions · iriscore.solutions
- Símbolo, paleta, tipografía y lenguaje gráfico son los del manual, sin excepción. Ver `DESIGN.md`.

## Evidence on Hand

- **Existe:** el estudio metodológico de Fase 1 con 21 fuentes académicas e industriales; el
  cuestionario de 20 preguntas; el manual de marca completo.
- **No se inventa nunca:** casos de éxito, cifras de desempeño, precios, benchmarks o logos de
  terceros. Ninguna cifra aparece sin cliente, sector y periodo atribuibles.
- **Ninguna empresa se nombra ni se insinúa en material público sin acuerdo firmado.** Una
  conversación comercial en curso no es un cliente, y sugerir lo contrario es un riesgo
  reputacional y legal. Esto aplica a la web, a las propuestas y a este repositorio.
- La demostración del producto en la web usa datos ilustrativos autorados, marcados como tales:
  establecimiento ficticio, carta ficticia, sin marcas reales.

## Product Principles

1. **Demostrar, no afirmar.** Mostrar el mecanismo funcionando pesa más que cualquier adjetivo.
2. **La trazabilidad es el producto.** Procedencia, confianza y validación acompañan cada dato.
3. **Nada sin piloto.** Ninguna promesa cuantitativa antes de tener evidencia propia.
4. **Sin experticia técnica del cliente.** Todo lo que se explique tiene que entenderse sin saber
   de IA.
5. **El hallazgo es el valor.** Lo que se vende es lo que nadie estaba mirando, no la tecnología.

## Accessibility & Inclusion

Sitio público en español dirigido a decisores corporativos: se asume evaluación en pantallas de
escritorio y móvil, teclado como método de navegación válido, y lectura en condiciones de luz
variable. WCAG 2.1 AA como piso: contraste 4.5:1 en texto normal, foco visible, respeto a
`prefers-reduced-motion`.
