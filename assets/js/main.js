/* ============================================================
   BIOLUZ CHILE — funcionamiento de la web
   1) El cielo estrellado del fondo
   2) Menú del celular
   3) Formulario de reserva -> WhatsApp o correo
   ============================================================ */

/* Datos de contacto en un solo lugar.
   Si algún día cambia el teléfono o el correo, se cambia SOLO acá. */
var BIOLUZ = {
  whatsapp: '56961580539',            // sin +, sin espacios
  correo:   'contacto@bioluz.cl'
};

/* ------------------------------------------------------------
   1) El cielo estrellado
   Se dibuja una sola vez un cuadrado de 420x420 con estrellas y
   ese cuadrado se repite como fondo de toda la página. Pesa unos
   pocos kilos y no hay que subir ninguna imagen.

   Si este archivo no llegara a ejecutarse, el fondo queda azul
   liso y la web se lee exactamente igual.
   ------------------------------------------------------------ */
(function () {
  var LADO = 420;

  var lienzo = document.createElement('canvas');
  lienzo.width = LADO;
  lienzo.height = LADO;
  var p = lienzo.getContext && lienzo.getContext('2d');
  if (!p) return;

  function alAzar(min, max) { return min + Math.random() * (max - min); }

  /* Dibuja la misma estrella en las nueve posiciones vecinas para que,
     al repetir el cuadrado, no se noten los bordes. */
  function repetida(x, y, dibujar) {
    for (var dx = -1; dx <= 1; dx++) {
      for (var dy = -1; dy <= 1; dy++) {
        dibujar(x + dx * LADO, y + dy * LADO);
      }
    }
  }

  var TONOS = [
    '255,255,255',   // blanca
    '255,255,255',
    '210,228,255',   // blanca azulada
    '146,182,255',   // azul claro
    '90,140,255'     // azul eléctrico
  ];

  /* Estrellas chicas: son la mayoría, y son las que dan la sensación
     de cielo sin ensuciar el texto. */
  for (var i = 0; i < 150; i++) {
    (function () {
      var x = alAzar(0, LADO);
      var y = alAzar(0, LADO);
      var r = alAzar(0.4, 1.15);
      var tono = TONOS[Math.floor(alAzar(0, TONOS.length))];
      var alfa = alAzar(0.25, 0.85);
      repetida(x, y, function (px, py) {
        p.beginPath();
        p.arc(px, py, r, 0, Math.PI * 2);
        p.fillStyle = 'rgba(' + tono + ',' + alfa + ')';
        p.fill();
      });
    })();
  }

  /* Unas pocas estrellas grandes con halo. Pocas a propósito: son las
     que se ven "lindas" y si se abusa el fondo queda recargado. */
  for (var j = 0; j < 16; j++) {
    (function () {
      var x = alAzar(0, LADO);
      var y = alAzar(0, LADO);
      var r = alAzar(1.1, 1.9);
      var halo = r * alAzar(5, 8);
      var tono = j % 3 === 0 ? '255,255,255' : '146,182,255';
      repetida(x, y, function (px, py) {
        var brillo = p.createRadialGradient(px, py, 0, px, py, halo);
        brillo.addColorStop(0, 'rgba(' + tono + ',0.30)');
        brillo.addColorStop(1, 'rgba(' + tono + ',0)');
        p.beginPath();
        p.arc(px, py, halo, 0, Math.PI * 2);
        p.fillStyle = brillo;
        p.fill();

        p.beginPath();
        p.arc(px, py, r, 0, Math.PI * 2);
        p.fillStyle = 'rgba(' + tono + ',0.95)';
        p.fill();
      });
    })();
  }

  try {
    document.documentElement.style.setProperty(
      '--estrellas', 'url(' + lienzo.toDataURL('image/png') + ')'
    );
  } catch (e) {
    /* Si el navegador no deja exportar el dibujo, queda el azul liso. */
  }
})();

/* ------------------------------------------------------------
   2) Menú del celular
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
   3) Formulario de reserva
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
