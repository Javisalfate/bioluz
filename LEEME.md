# Web de Bioluz Chile

Todo lo que necesitas saber de esta carpeta, en simple.

---

## Los links

| | |
|---|---|
| **La web publicada** | https://javisalfate.github.io/bioluz/ |
| Los archivos en GitHub | https://github.com/Javisalfate/bioluz |
| Maqueta para el cliente | el artifact de Claude, mismo link de siempre |

El primero es el que le mandas a Guillermo. Siempre muestra lo último.

**Para verla en tu computador:** doble clic en `index.html`.

---

## Qué hay acá

Siete páginas:

| Archivo | Qué es |
|---|---|
| `index.html` | La portada |
| `terapias.html` | Las terapias y los precios |
| `tienda.html` | La tienda con el carrito |
| `seminarios.html` | El diplomado |
| `centro.html` | El lugar, el domo y Guillermo |
| `cabanas.html` | Los alojamientos (hoy cerrados) |
| `contacto.html` | Contacto y reserva |

Y la carpeta `assets`:

- `assets/css/estilos.css` — cómo se ve todo
- `assets/js/main.js` — las estrellas, el menú del celular, el formulario
- `assets/js/tienda.js` — el carrito
- `assets/img/` — las fotos

**`CLAUDE.md`** es para Claude, no para ti. Ahí están anotadas las
decisiones del proyecto para que no se le olviden entre conversaciones.

---

## Modo borrador

Donde todavía falta una foto aparece un cartelito diciendo qué foto va
ahí y de qué tamaño. Eso se llama modo borrador.

Cuando estén todas las fotos, se quita: en cada archivo `.html`, donde
dice `<body class="borrador">` se borra `class="borrador"` y queda
`<body>`.

---

## Fotos que faltan

Van en `assets/img/`, en `.jpg`, ojalá bajo 400 KB cada una.

1. El domo por dentro, con los cuencos
2. El domo por fuera, con los cerros
3. Retrato de Guillermo
4. La camilla ordenada, con buena luz
5. Los cuencos de cerca
6. Alcohuaz o el valle, de día
7. Cielo estrellado de noche
8. Las cabañas y la casa por fuera
9. Las cabañas por dentro
10. Un seminario en curso, con alumnos
11. El agua o el río del valle

La de portada ya está puesta.

**Cuando tengas fotos nuevas:** déjalas en la carpeta con cualquier
nombre y avísame. Yo las comprimo, las pongo donde van y las subo.

---

## Cómo funciona la reserva

La persona llena el formulario, y la web arma sola un mensaje ordenado
que se abre en WhatsApp con todos sus datos. Ella lo revisa y lo manda.

No hay ningún sistema detrás, no cuesta nada al mes y no se cae.

---

## Cómo funciona la tienda

**Por ahora es un ejemplo.** Los tres productos, los precios y los
costos de despacho son inventados para que Guillermo vea cómo queda.

El carrito sí funciona de verdad: agrega productos, cambia cantidades,
calcula el despacho y guarda el pedido si cierras la página.

El botón "Pagar en línea" está apagado hasta que exista la cuenta de
Mercado Pago. Mientras tanto, el pedido se manda armado por WhatsApp.

**Para que sea una tienda real falta:** la lista de productos de verdad,
los costos de despacho reales, que Guillermo abra Mercado Pago, y mover
la web a Netlify (gratis) para que pueda cobrar.

---

## Si cambia el teléfono o el correo

En `assets/js/main.js`, arriba del todo:

```
whatsapp: '56961580539',
correo:   'contacto@bioluz.cl'
```

Se cambian ahí. (Los botones verdes sueltos tienen el número escrito
dentro de cada `.html`; si cambia, avísame y lo reemplazo en todos.)

---

## Sobre los textos de salud

La web anterior decía que se trataban VIH, cáncer, diabetes y epilepsia.
Eso se cambió a propósito: ahora se habla de **acompañamiento
complementario al bienestar**, sin nombrar enfermedades ni prometer
curación.

Dos razones: en Chile prometer curar sin ser profesional de la salud
registrado trae problemas con la Seremi y el Sernac, y alguien con una
enfermedad grave podría postergar su tratamiento médico por leerlo.

---

## Lo que falta decidir

- Logo (hoy el nombre va escrito con la tipografía del sitio)
- Si la web va a ser autoadministrable
- Cuándo apuntar bioluz.cl a la web nueva — eso va al final, porque en
  cuanto se cambia, la web vieja deja de verse
- Reseñas de gente que ya fue: es lo que más ayudaría a que reserven
