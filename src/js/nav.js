/*
  Navegación.

  Dos comportamientos, los dos exigidos por el manual de marca:
  - El CTA del nav aparece solo cuando el del hero ya salió de pantalla, para que nunca haya
    dos botones violeta compitiendo en la misma vista (máx. 1 CTA por vista).
  - Menú desplegable en móvil.
*/

(function () {
  'use strict';

  var nav = document.getElementById('nav');
  var hero = document.getElementById('inicio');

  // El CTA del nav entra cuando el hero deja de ser visible.
  if (nav && hero && 'IntersectionObserver' in window) {
    new IntersectionObserver(
      function (entries) {
        nav.classList.toggle('is-past-hero', !entries[0].isIntersecting);
      },
      { rootMargin: '-72px 0px 0px 0px' }
    ).observe(hero);
  } else if (nav) {
    // Sin IntersectionObserver el CTA queda visible: perder el botón es peor que duplicarlo.
    nav.classList.add('is-past-hero');
  }

  // Dentro de contacto, el botón del formulario es el violeta de la vista. El del nav se
  // retira para no romper la regla de un solo CTA por vista.
  var contacto = document.getElementById('contacto');
  if (nav && contacto && 'IntersectionObserver' in window) {
    new IntersectionObserver(
      function (entries) {
        nav.classList.toggle('is-at-contact', entries[0].isIntersecting);
      },
      { rootMargin: '-72px 0px 0px 0px' }
    ).observe(contacto);
  }

  // ---------------------------------------------------------------- Menú móvil

  var toggle = document.getElementById('nav-toggle');
  var links = document.getElementById('nav-links');

  if (!toggle || !links) return;

  function setOpen(open) {
    links.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.querySelector('.sr-only').textContent = open ? 'Cerrar menú' : 'Abrir menú';
  }

  toggle.addEventListener('click', function () {
    setOpen(!links.classList.contains('is-open'));
  });

  // Al elegir un destino el menú se cierra solo.
  links.addEventListener('click', function (event) {
    if (event.target.closest('a')) setOpen(false);
  });

  // Escape cierra y devuelve el foco al botón que lo abrió.
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && links.classList.contains('is-open')) {
      setOpen(false);
      toggle.focus();
    }
  });
})();
