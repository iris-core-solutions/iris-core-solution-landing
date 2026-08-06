/*
  Formulario de contacto.

  El problema que resuelve: publicar un formulario apuntando a un endpoint que no existe se
  traga los mensajes en silencio mientras la nota promete respuesta. Hasta que haya cuenta de
  Formspree, el envío se entrega por correo — el mensaje llega igual y nadie queda esperando.

  Para activar el servicio real: poner el endpoint en data-endpoint del <form>. Este archivo
  no necesita cambios.
*/

(function () {
  'use strict';

  var form = document.getElementById('contact-form');
  if (!form) return;

  var status = document.getElementById('form-status');
  var endpoint = (form.dataset.endpoint || '').trim();

  // Con endpoint configurado, el formulario se comporta como un POST normal.
  if (endpoint) {
    form.setAttribute('action', endpoint);
    return;
  }

  var DESTINATARIO = 'hola@iriscore.solutions';

  function value(name) {
    var field = form.elements[name];
    return field && field.value ? field.value.trim() : '';
  }

  function say(text) {
    if (status) status.textContent = text;
  }

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    if (!form.reportValidity()) return;

    var cuerpo = [
      'Nombre: ' + value('nombre'),
      'Empresa: ' + value('empresa'),
      'Rol: ' + (value('rol') || '—'),
      'Correo: ' + value('correo'),
      '',
      'Qué quiere descubrir:',
      value('descubrir') || '—'
    ].join('\n');

    var href =
      'mailto:' + DESTINATARIO +
      '?subject=' + encodeURIComponent('Contacto desde iriscore.solutions — ' + value('empresa')) +
      '&body=' + encodeURIComponent(cuerpo);

    window.location.href = href;

    // Si el equipo no tiene cliente de correo configurado, no se queda sin salida.
    say('Abrimos tu correo con el mensaje listo. Si no se abrió, escríbenos a ' + DESTINATARIO + '.');
  });
})();
