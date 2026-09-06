# Bioluz Chile — contexto del proyecto

Este archivo lo lee Claude al empezar cada sesión. Acá viven las
decisiones ya tomadas, para no volver a discutirlas ni contradecirlas.

**Si algo cambia, se actualiza acá. Lo que está en el chat se olvida;
lo que está en este archivo, no.**

---

## Qué es

Web nueva para **Bioluz Chile**, centro de terapias holísticas en
Alcohuaz, comuna de Paihuano, Valle de Elqui — 15 km más arriba de
Pisco Elqui, a 115 km de La Serena.

- **Cliente final:** Guillermo Salfate Valenzuela, fundador
- **Quien encarga el trabajo:** Javi
- **Reemplaza a:** bioluz.cl (sitio viejo en Contao, no se toca todavía)

**Objetivo número uno: llenar la agenda de terapias.** Las cabañas eran
el objetivo secundario, pero hoy están cerradas.

---

## Dónde vive

| | |
|---|---|
| Carpeta | `C:\Users\silva\OneDrive\Desktop\Javi\Nueva Bioluz` |
| Repositorio | https://github.com/Javisalfate/bioluz |
| Web publicada | https://javisalfate.github.io/bioluz/ |
| Maqueta para el cliente | artifact `33f0a69a-b533-4346-8704-9244321f18a6` |

**Para publicar cambios:** `git add -A`, commit, `git push origin main`.
GitHub Pages se actualiza solo en 1 a 3 minutos.

La maqueta es un archivo de una sola página que se arma con
`rearmar-maqueta.js` (está en la carpeta temporal de la sesión). No es
la web real: es solo para que el cliente revise desde un link.

---

## Decisiones tomadas — no volver atrás sin que Javi lo pida

**Diseño.** Fondo de cielo estrellado en azul eléctrico, letras blancas.
Las estrellas las dibuja `assets/js/main.js` por código, no son una
imagen. Antes se probaron tres paletas que quedaron descartadas: crema
con terracota, violeta oscuro (“muy oscuro, tipo tecnología”) y blanco
con lila.

**Tipografías.** Newsreader para títulos, Karla para textos.

**Textos de salud.** Todo se escribe como *acompañamiento complementario
al bienestar*. No se nombran enfermedades, no se promete curación, no se
dice “alta efectividad”. Cada página lleva una nota de que no reemplaza
atención médica. Esto se acordó con Javi y es deliberado: proteger al
cliente frente a la Seremi de Salud y al Sernac, y no hacer que alguien
postergue su tratamiento.

Sí se usa “terapias medicinales y holísticas” — lo pidió Guillermo y no
hay problema mientras no se junte con nombres de enfermedades.

**Reservas.** Van por WhatsApp: el formulario arma solo el mensaje y lo
abre. No hay calendario ni pago online, y por ahora está bien así
porque Guillermo confirma disponibilidad conversando.

**Hosting.** GitHub Pages mientras la web sea estática. Cuando se
conecte el pago del carrito hay que mover a **Netlify o Cloudflare
Pages** (Vercel no: su plan gratis prohíbe uso comercial).

---

## Datos duros

- **WhatsApp:** +56 9 6158 0539 (en el código: `56961580539`)
- **Correo:** contacto@bioluz.cl
- Ambos están en `assets/js/main.js`, arriba de todo, en un solo lugar.
  Los botones verdes sueltos tienen el número escrito en cada `.html`.

**Precios vigentes de terapias:**

| Terapia | Precio |
|---|---|
| Sesión individual en camilla | $45.000 |
| Biofrecuencias Clark/Rife | $65.000 (mín. 3 sesiones, 1 a 2 h c/u) |
| Meditaciones Guiadas | $30.000 por persona, desde 2 |
| Apiterapia | $20.000 |

**Nombres de las terapias — van con mayúsculas.** Guillermo los mandó así
el 6 de septiembre de 2026 y se escriben tal cual, como nombre propio:

- **Biomagnetismo Médico con Bioenergética de Alta Integridad** — es lo
  que se hace en la sesión individual en camilla
- **Biofrecuencias** — bajada: *Clark/Rife, hasta 999.000 Hz*
- **Meditaciones Guiadas** — bajada: *Con cuencos del Tíbet y de
  cristales de cuarzo*. Javi decidió que los cuencos quedaran en la
  bajada y no en el título: la gente los busca en Google, pero el
  título tiene que ser el nombre que pidió Guillermo.
- **Apiterapia**
- **Terapias Complementarias/Alternativas** — no es una sección ni un
  título de la web. Es solo que, si esas palabras llegan a aparecer,
  van con mayúscula.

Ojo con “Médico”: lo pidió el cliente y es el nombre real de la técnica
(Par Biomagnético Médico, de Isaac Goiz). Aun así, en la web tiene que
seguir siempre acompañado del aviso de que no reemplaza atención médica
y de que Guillermo no es médico. No sacar esos avisos.

**Cabañas: cerradas.** Los precios ($135.000 / $85.000 / $45.000) están
en la web como referencia, marcados “No disponible por ahora”, con lista
de espera. Se asumió que es temporal.

**Tienda: es un ejemplo.** Los tres productos, precios y despachos son
inventados para que el cliente los revise. Falta la lista real.

---

## Cómo está armado

Siete páginas sueltas de HTML, sin sistemas ni programas que instalar:

`index.html` · `terapias.html` · `tienda.html` · `seminarios.html` ·
`centro.html` · `cabanas.html` · `contacto.html`

- `assets/css/estilos.css` — todo el diseño, en un archivo
- `assets/js/main.js` — estrellas, menú del celular, formulario de reserva
- `assets/js/tienda.js` — el carrito
- `assets/img/` — las fotos

**Modo borrador.** Mientras falten fotos, `<body class="borrador">`
muestra un cartelito en cada espacio diciendo qué foto va ahí. Cuando
estén todas, se quita `class="borrador"` de los siete archivos.

---

## Cómo trabajar acá

**Idioma:** español de Chile, simple. Javi no es programadora: hay que
explicarle qué se hizo y por qué, sin tecnicismos.

**Lo técnico se resuelve solo** (qué herramienta, cómo se estructura,
cómo se publica) y después se le explica. Lo que **sí** se le pregunta:
decisiones de marca, textos del cliente, precios, y cualquier cosa que
implique plata o cuentas.

**Nunca tocar credenciales de nadie.** Las claves de Mercado Pago, del
banco o de GitHub las pone Javi o Guillermo en su propio panel.

**Verificar, no recordar.** Antes de afirmar que algo funciona o que una
medida es tal, medirlo en el navegador o leer el archivo.

---

## Pendientes

1. **Fotos que faltan** — el domo por dentro con los cuencos, retrato de
   Guillermo, la camilla, el valle de día, cielo estrellado, las cabañas
   por dentro y por fuera, un seminario en curso. La lista completa con
   medidas está en los cartelitos de cada página.
2. **Textos** que Guillermo iba a mandar por escrito.
3. **Tienda real** — lista de productos, costos de despacho de verdad,
   cuenta de Mercado Pago abierta, carrito conectado al pago, mudanza a
   Netlify.
4. **Decidir si la web será autoadministrable** (Decap o Sveltia CMS,
   gratis). Antes hay que preguntarle a Guillermo si de verdad la va a
   usar.
5. **Apuntar bioluz.cl** a GitHub Pages. Esto va al final: en cuanto se
   cambia, la web vieja deja de verse.
6. **Página de Seminarios** dice que el alojamiento está incluido en el
   diplomado, pero las cabañas están cerradas. Hay que resolver esa
   contradicción con Guillermo.
