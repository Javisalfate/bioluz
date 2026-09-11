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

**Reservas.** Hoy van por WhatsApp: el formulario arma solo el mensaje y
lo abre. Javi confirmó (10 de septiembre de 2026) que esto va a cambiar:
el mismo formulario va a cobrar un **abono del 40% del valor de la
terapia** con Mercado Pago antes de confirmar la hora — así se evita
que alguien reserve y no llegue. Falta implementarlo: depende de que
Guillermo abra su cuenta de Mercado Pago (la crea Javi, él es el
titular) y de mudar el hosting (ver abajo).

**Hosting.** GitHub Pages mientras la web sea estática. Decisión tomada
(10 de septiembre de 2026): cuando se conecte el pago, la web se muda a
**Netlify**. Se descartó Cloudflare Pages (igual de gratis y también
permite uso comercial, pero Netlify es más simple de manejar para
alguien sin conocimientos técnicos) y Vercel (su plan gratis prohíbe uso
comercial). El flujo de publicar con git no cambia.

**bioluz.cl (la web vieja).** Hoy está alojada en **iHosting.cl**
(hosting chileno, Viña del Mar) — confirmado el 10 de septiembre de 2026
revisando el DNS. Es casi seguro que ese hosting se paga (iHosting es
comercial, no gratis); una vez que la web nueva reemplace a la vieja, se
puede dar de baja porque el sitio nuevo es HTML puro y no necesita el
PHP/base de datos que da iHosting (eso es lo que usa Contao, la web
vieja).

⚠️ **Ojo con el dominio.** Revisé el registro en NIC Chile (WHOIS de
`.cl`) el 10 de septiembre de 2026: el titular registrado es
**"en representación de Guillermo Salfate (Julian Rene Bahamonde
Cortes)"** — o sea, el dominio no está a nombre de Guillermo
directamente, sino de alguien que lo representa (probablemente quien le
hizo la web vieja). Vence el 26 de mayo de 2029, no hay apuro por
renovarlo. Pero para el pendiente 5 (apuntar el dominio a la web nueva)
van a necesitar entrar a la cuenta de NIC Chile, y eso depende de esa
persona — falta confirmar con Guillermo si tiene esos accesos o si hay
que contactar a Julian Bahamonde. Mejor resolverlo con tiempo, no
cuando ya estén listos para hacer el cambio.

Javi habló con Julian Bahamonde el 11 de septiembre de 2026: él dice
que no tiene bioluz.cl "en sus dominios" (o sea, en su cuenta NIC no le
aparece). Esto no contradice lo de arriba — el nombre en el WHOIS es
solo el contacto administrativo que quedó registrado en 2008, no
prueba que exista hoy una cuenta NIC activa a su nombre. Falta que
Julian confirme entrando a nic.cl con el RUT de Guillermo.

Julian también dijo algo importante: que renovar/pagar el dominio "le
sirve" solo si Bioluz sigue usando el mismo hosting (iHosting) —
sugiere que tiene algún arreglo comercial atado al hosting, no solo al
dominio. Como ya está decidido mudarse a Netlify (ver "Hosting" abajo),
esto puede significar que Julian no vaya a colaborar con el dominio una
vez que dejen iHosting. Aclarar con Guillermo qué acuerdo tiene con
Julian antes de llegar al pendiente 5.

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
3. **Tienda real y pago online** — lista de productos, costos de despacho
   de verdad, cuenta de Mercado Pago abierta (la crea Javi, Guillermo es
   el titular), carrito conectado al pago, mudanza a Netlify. La misma
   pasarela cobra también el **abono del 40% de las terapias** desde el
   formulario de reserva (ver "Reservas" arriba) — confirmado por Javi el
   10 de septiembre de 2026.
4. **Decidir si la web será autoadministrable** (Decap o Sveltia CMS,
   gratis). Antes hay que preguntarle a Guillermo si de verdad la va a
   usar.
5. **Apuntar bioluz.cl** a la web nueva (Netlify, una vez hecha la
   mudanza). Hoy el dominio vive en iHosting.cl — ahí hay que entrar a
   cambiar los DNS. Esto va al final: en cuanto se cambia, la web vieja
   deja de verse.
6. **Página de Seminarios** dice que el alojamiento está incluido en el
   diplomado, pero las cabañas están cerradas. Hay que resolver esa
   contradicción con Guillermo.
7. **Cabañas en Airbnb y Booking.com** — Guillermo ya tuvo presencia ahí
   antes y quiere volver a estar. No hace falta pagar ninguna app: ambas
   plataformas dan gratis un link de calendario (iCal) para sincronizar
   fechas entre ellas y con la web, sin contrato de por medio (se
   actualiza cada 2 a 6 horas, no al instante — para 1 a 3 cabañas es
   suficiente). Javi confirmó (10 de septiembre de 2026): se resuelve
   recién cuando las cabañas reabran. Mientras tanto, en
   `cabanas.html` ya quedó una **maqueta visual del calendario de
   reservas** (no funciona, es solo para mostrar la idea) debajo de las
   tres fichas de cabañas.
