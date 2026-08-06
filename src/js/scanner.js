/*
  El visor.

  Recorre la carta, enciende la evidencia y arma la ficha. Es la tesis de la página: el
  mecanismo, no una ilustración del mecanismo.

  Reglas que este archivo tiene que respetar (DESIGN.md):
  - El fósforo informa y nunca es clicable. Las marcas de evidencia son <mark>, no botones.
  - "Procesando" es la pupila contrayéndose, no un spinner. Vive en CSS; aquí solo se conmuta
    la clase.
  - Con prefers-reduced-motion la ficha se muestra completa de entrada. No es una degradación:
    es la condición para que la animación exista.
*/

(function () {
  'use strict';

  var viewer = document.getElementById('viewer');
  if (!viewer) return;

  var statusText = document.getElementById('viewer-status-text');
  var marks = Array.prototype.slice.call(viewer.querySelectorAll('.menu-lines mark[data-evidence]'));
  var rows = Array.prototype.slice.call(viewer.querySelectorAll('.evidence-row'));

  marks.sort(function (a, b) {
    return Number(a.dataset.evidence) - Number(b.dataset.evidence);
  });

  var STEP_MARK = 520;   // ms entre hallazgos
  var STEP_ROW = 260;    // ms entre campos de la ficha
  var timers = [];

  function setStatus(text) {
    if (statusText) statusText.textContent = text;
  }

  function clearTimers() {
    timers.forEach(clearTimeout);
    timers = [];
  }

  function showEverything() {
    marks.forEach(function (mark) { mark.classList.add('is-found'); });
    rows.forEach(function (row) { row.classList.add('is-in'); });
    viewer.classList.remove('is-scanning', 'is-armed');
    setStatus(rows.length + ' campos · listo');
  }

  function run() {
    clearTimers();
    marks.forEach(function (mark) { mark.classList.remove('is-found'); });
    rows.forEach(function (row) { row.classList.remove('is-in'); });

    // is-armed es lo que oculta la ficha. Solo el script la pone, y solo aquí: sin JS el
    // contenido queda visible por defecto.
    viewer.classList.add('is-armed');
    viewer.classList.add('is-scanning');
    setStatus('Leyendo carta');

    marks.forEach(function (mark, i) {
      timers.push(setTimeout(function () {
        mark.classList.add('is-found');
        setStatus(i + 1 + ' de ' + marks.length + ' referencias');
      }, 700 + i * STEP_MARK));
    });

    var afterMarks = 700 + marks.length * STEP_MARK;

    timers.push(setTimeout(function () {
      viewer.classList.remove('is-scanning');
      setStatus('Armando ficha');
    }, afterMarks));

    rows.forEach(function (row, i) {
      timers.push(setTimeout(function () {
        row.classList.add('is-in');
      }, afterMarks + 200 + i * STEP_ROW));
    });

    timers.push(setTimeout(function () {
      setStatus(rows.length + ' campos · listo');
    }, afterMarks + 200 + rows.length * STEP_ROW));
  }

  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)');

  function start() {
    if (reduced.matches) showEverything();
    else run();
  }

  // Si el usuario cambia la preferencia con la página abierta, respetarla de inmediato.
  function onPreferenceChange() {
    clearTimers();
    start();
  }
  if (reduced.addEventListener) reduced.addEventListener('change', onPreferenceChange);
  else if (reduced.addListener) reduced.addListener(onPreferenceChange);

  // Arranca cuando el visor entra en pantalla; se detiene cuando sale, para no animar a ciegas.
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(
      function (entries) {
        if (entries[0].isIntersecting) {
          start();
        } else {
          clearTimers();
          viewer.classList.remove('is-scanning');
        }
      },
      // 0.15 y no 0.35: en móvil el visor asoma por el pliegue y tiene que empezar a leer
      // ahí mismo. Si espera a estar a un tercio, el primer viewport es titular y botón —
      // el hero genérico que la tesis rechaza.
      { threshold: 0.15 }
    ).observe(viewer);
  } else {
    // Sin observador, la ficha se muestra completa: el contenido nunca depende del script.
    showEverything();
  }
})();
