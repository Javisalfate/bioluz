/* ============================================================
   BIOLUZ CHILE — funcionamiento de la web
   1) Menú del celular
   2) Formulario de reserva -> WhatsApp o correo
   ============================================================ */

/* Datos de contacto en un solo lugar.
   Si algún día cambia el teléfono o el correo, se cambia SOLO acá. */
var BIOLUZ = {
  whatsapp: '56961580539',            // sin +, sin espacios
  correo:   'contacto@bioluz.cl'
};

/* ------------------------------------------------------------
   1) Menú del celular
   ------------------------------------------------------------ */
(function () {
  var boton = document.querySelector('.boton-menu');
  var menu  = document.querySelector('.nav');
  if (!boton || !menu) return;

  boton.addEventListener('click', function () {
    var abierto = menu.classList.toggle('abierto');
    boton.setAttribute('aria-expanded', abierto ? 'true' : 'false');
  });

  // Al tocar un enlace, se cierra el menú
  menu.addEventListener('click', function (e) {
    if (e.target.closest('a')) {
      menu.classList.remove('abierto');
      boton.setAttribute('aria-expanded', 'false');
    }
  });
})();

/* ------------------------------------------------------------
   2) Formulario de reserva
   Arma un mensaje ordenado y lo abre en WhatsApp (o en el correo).
   No se guarda nada en ningún servidor: el mensaje viaja directo
   al teléfono de Bioluz.
   ------------------------------------------------------------ */
(function () {
  var form = document.getElementById('form-reserva');
  if (!form) return;

  function valor(nombre) {
    var campo = form.elements[nombre];
    if (!campo) return '';
    return (campo.value || '').trim();
  }

  function fechaBonita(iso) {
    if (!iso) return '';
    var partes = iso.split('-');
    if (partes.length !== 3) return iso;
    return partes[2] + '-' + partes[1] + '-' + partes[0];
  }

  function armarMensaje() {
    var lineas = [];
    lineas.push('Hola Bioluz, quiero reservar una hora.');
    lineas.push('');
    lineas.push('Nombre: ' + valor('nombre'));
    lineas.push('Terapia: ' + valor('terapia'));

    var personas = valor('personas');
    if (personas) lineas.push('Personas: ' + personas);

    var fecha = valor('fecha');
    if (fecha) lineas.push('Fecha que me acomoda: ' + fechaBonita(fecha));

    var horario = valor('horario');
    if (horario) lineas.push('Horario preferido: ' + horario);

    var telefono = valor('telefono');
    if (telefono) lineas.push('Mi teléfono: ' + telefono);

    var mensaje = valor('mensaje');
    if (mensaje) {
      lineas.push('');
      lineas.push('Les cuento: ' + mensaje);
    }

    return lineas.join('\n');
  }

  function faltanDatos() {
    if (!valor('nombre')) {
      form.elements['nombre'].focus();
      return true;
    }
    if (!valor('terapia')) {
      form.elements['terapia'].focus();
      return true;
    }
    return false;
  }

  // Botón principal: enviar por WhatsApp
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (faltanDatos()) return;
    var url = 'https://wa.me/' + BIOLUZ.whatsapp + '?text=' + encodeURIComponent(armarMensaje());
    window.open(url, '_blank', 'noopener');
  });

  // Botón alternativo: enviar por correo
  var botonCorreo = document.getElementById('reserva-por-correo');
  if (botonCorreo) {
    botonCorreo.addEventListener('click', function (e) {
      e.preventDefault();
      if (faltanDatos()) return;
      var asunto = 'Reserva de hora — ' + (valor('terapia') || 'consulta');
      var url = 'mailto:' + BIOLUZ.correo +
                '?subject=' + encodeURIComponent(asunto) +
                '&body='    + encodeURIComponent(armarMensaje());
      window.location.href = url;
    });
  }
})();
