/* ============================================================
   BIOLUZ CHILE — carrito de la tienda

   Cómo funciona, en simple:
   · Cada producto está escrito en tienda.html con su precio y su
     tipo (físico o digital) guardados en el propio HTML.
   · Este archivo lee esos datos, arma el pedido y calcula el total.
   · El pedido se guarda en el navegador de la persona, así que si
     cierra la página y vuelve, no pierde lo que había elegido.
   · Nada de esto viaja a ningún servidor todavía.

   Cuando Guillermo abra su cuenta de Mercado Pago, el botón
   "Pagar en línea" se conecta ahí y queda listo el cobro.
   ============================================================ */

(function () {
  'use strict';

  var lista = document.getElementById('productos');
  if (!lista) return;

  var WHATSAPP = '56961580539';
  var LLAVE = 'bioluz-pedido';

  /* Costos de despacho. Se cambian solo acá. */
  var DESPACHOS = {
    'retiro':   { texto: 'Retiro en el centro, Alcohuaz', costo: 0 },
    'coquimbo': { texto: 'Región de Coquimbo',            costo: 3990 },
    'chile':    { texto: 'Resto de Chile',                costo: 5990 }
  };

  /* ---------- Guardar y recuperar el pedido ---------- */
  var pedido = {};
  try {
    pedido = JSON.parse(localStorage.getItem(LLAVE)) || {};
  } catch (e) {
    pedido = {};
  }

  function guardar() {
    try { localStorage.setItem(LLAVE, JSON.stringify(pedido)); } catch (e) {}
  }

  /* ---------- Catálogo leído desde el HTML ---------- */
  var catalogo = {};
  var tarjetas = lista.querySelectorAll('[data-id]');
  for (var i = 0; i < tarjetas.length; i++) {
    var t = tarjetas[i];
    catalogo[t.dataset.id] = {
      nombre: t.dataset.nombre,
      precio: parseInt(t.dataset.precio, 10),
      tipo:   t.dataset.tipo          // 'fisico' o 'digital'
    };
  }

  function pesos(n) {
    return '$' + n.toLocaleString('es-CL');
  }

  /* ---------- Cálculo del pedido ---------- */
  function calcular() {
    var items = [], unidades = 0, productos = 0, hayFisico = false;

    for (var id in pedido) {
      if (!catalogo[id] || pedido[id] < 1) continue;
      var p = catalogo[id];
      var cantidad = pedido[id];
      items.push({ id: id, nombre: p.nombre, cantidad: cantidad, subtotal: p.precio * cantidad, precio: p.precio });
      unidades += cantidad;
      productos += p.precio * cantidad;
      if (p.tipo === 'fisico') hayFisico = true;
    }

    var zona = document.getElementById('despacho');
    var clave = zona ? zona.value : 'retiro';
    var envio = hayFisico ? (DESPACHOS[clave] ? DESPACHOS[clave].costo : 0) : 0;

    return {
      items: items,
      unidades: unidades,
      productos: productos,
      envio: envio,
      total: productos + envio,
      hayFisico: hayFisico,
      zonaTexto: DESPACHOS[clave] ? DESPACHOS[clave].texto : ''
    };
  }

  /* ---------- Pintar el pedido en pantalla ---------- */
  var detalle   = document.getElementById('pedido-detalle');
  var vacio     = document.getElementById('pedido-vacio');
  var resumen   = document.getElementById('pedido-resumen');
  var filaEnvio = document.getElementById('fila-envio');
  var barra     = document.getElementById('barra-pedido');

  function pintar() {
    var r = calcular();

    // Lista de productos elegidos
    detalle.innerHTML = '';
    r.items.forEach(function (item) {
      var fila = document.createElement('div');
      fila.className = 'linea-pedido';
      fila.innerHTML =
        '<div class="linea-nombre">' + item.nombre +
          '<span>' + pesos(item.precio) + ' c/u</span></div>' +
        '<div class="linea-cantidad">' +
          '<button type="button" aria-label="Quitar uno" data-menos="' + item.id + '">−</button>' +
          '<span>' + item.cantidad + '</span>' +
          '<button type="button" aria-label="Agregar uno" data-mas="' + item.id + '">+</button>' +
        '</div>' +
        '<div class="linea-subtotal">' + pesos(item.subtotal) + '</div>';
      detalle.appendChild(fila);
    });

    var tieneAlgo = r.items.length > 0;
    vacio.hidden = tieneAlgo;
    resumen.hidden = !tieneAlgo;
    detalle.hidden = !tieneAlgo;

    if (tieneAlgo) {
      document.getElementById('suma-productos').textContent = pesos(r.productos);
      document.getElementById('suma-envio').textContent = r.envio === 0 ? 'Sin costo' : pesos(r.envio);
      document.getElementById('suma-total').textContent = pesos(r.total);
      filaEnvio.hidden = !r.hayFisico;
      document.getElementById('bloque-despacho').hidden = !r.hayFisico;
      document.getElementById('nota-digital').hidden = r.hayFisico;
    }

    // Barra flotante
    if (tieneAlgo) {
      barra.hidden = false;
      barra.querySelector('.barra-texto').textContent =
        r.unidades + (r.unidades === 1 ? ' producto · ' : ' productos · ') + pesos(r.total);
    } else {
      barra.hidden = true;
    }
  }

  /* ---------- Agregar y quitar ---------- */
  function sumar(id, cuanto) {
    pedido[id] = (pedido[id] || 0) + cuanto;
    if (pedido[id] < 1) delete pedido[id];
    guardar();
    pintar();
  }

  lista.addEventListener('click', function (e) {
    var boton = e.target.closest('[data-agregar]');
    if (!boton) return;
    sumar(boton.dataset.agregar, 1);
    var textoOriginal = boton.textContent;
    boton.textContent = 'Agregado ✓';
    boton.classList.add('agregado');
    setTimeout(function () {
      boton.textContent = textoOriginal;
      boton.classList.remove('agregado');
    }, 1200);
  });

  detalle.addEventListener('click', function (e) {
    var mas = e.target.closest('[data-mas]');
    var menos = e.target.closest('[data-menos]');
    if (mas) sumar(mas.dataset.mas, 1);
    if (menos) sumar(menos.dataset.menos, -1);
  });

  document.getElementById('despacho').addEventListener('change', pintar);

  document.getElementById('vaciar').addEventListener('click', function () {
    pedido = {};
    guardar();
    pintar();
  });

  /* ---------- Enviar el pedido por WhatsApp ---------- */
  document.getElementById('pedir-whatsapp').addEventListener('click', function (e) {
    e.preventDefault();
    var r = calcular();
    if (!r.items.length) return;

    var l = ['Hola Bioluz, quiero hacer este pedido:', ''];
    r.items.forEach(function (item) {
      l.push('• ' + item.cantidad + ' x ' + item.nombre + ' — ' + pesos(item.subtotal));
    });
    l.push('');
    l.push('Productos: ' + pesos(r.productos));
    if (r.hayFisico) {
      l.push('Despacho (' + r.zonaTexto + '): ' + (r.envio === 0 ? 'sin costo' : pesos(r.envio)));
    }
    l.push('TOTAL: ' + pesos(r.total));

    window.open('https://wa.me/' + WHATSAPP + '?text=' + encodeURIComponent(l.join('\n')), '_blank', 'noopener');
  });

  pintar();
})();
