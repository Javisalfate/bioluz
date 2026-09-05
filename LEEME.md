# Web nueva de Bioluz Chile

Todo lo que necesitas saber para entender esta carpeta, en simple.

---

## Qué hay acá

Seis páginas listas:

| Archivo | Qué es |
|---|---|
| `index.html` | La portada (inicio) |
| `terapias.html` | Las terapias en detalle y los precios |
| `seminarios.html` | El diplomado y los seminarios |
| `centro.html` | El lugar, el domo y Guillermo |
| `cabanas.html` | Los tres alojamientos |
| `contacto.html` | Contacto y reserva |

Y una carpeta `assets` con:

- `assets/css/estilos.css` — cómo se ve todo (colores, letras, tamaños)
- `assets/js/main.js` — cómo funciona el menú del celular y el formulario
- `assets/img/` — acá van las fotos (todavía está vacía)

**Para verla:** haz doble clic en `index.html`. Se abre en el navegador,
sin instalar nada.

---

## Modo borrador

Mientras no haya fotos reales, cada espacio donde va una imagen muestra un
cartelito que dice qué foto tiene que ir ahí y de qué tamaño.

Eso se llama **modo borrador**. Cuando estén todas las fotos puestas, se
quita: en cada archivo `.html`, en la línea que dice

```
<body class="borrador">
```

se borra la parte `class="borrador"` y queda `<body>`. Listo, desaparecen
los cartelitos.

---

## Fotos que hay que conseguir

Las guardas dentro de `assets/img/`. Formato `.jpg`, y ojalá no más pesadas
que 500 KB cada una para que la web cargue rápido.

**La más importante de todas:**

- `portada.jpg` — la foto grande del inicio. Tiene que mostrar el lugar:
  el domo, los cerros o el valle. Horizontal, mínimo 1920 px de ancho.
  Esta es la única que ya está conectada por nombre: apenas la pongas con
  ese nombre exacto, aparece sola en la portada.

**El resto** están descritas una por una en los cartelitos de cada página.
En resumen, lo que hace falta:

1. El domo por dentro, con los cuencos
2. El domo por fuera, con los cerros
3. Retrato de Guillermo
4. La camilla del centro, ordenada y con buena luz
5. Los cuencos vistos de cerca
6. El pueblo de Alcohuaz o el valle, de día
7. Cielo estrellado de noche
8. Las cabañas y la casa, por fuera
9. Las cabañas por dentro (cocina, chimenea, el mandala del piso)
10. Un seminario en curso, con alumnos
11. El agua o el río del valle

---

## Cómo funciona la reserva

No hay ningún sistema complicado detrás. Cuando alguien llena el formulario
y aprieta "Enviar por WhatsApp":

1. La web arma sola un mensaje ordenado con todos sus datos
2. Se le abre WhatsApp con ese mensaje ya escrito
3. La persona lo revisa y lo manda al teléfono de Bioluz

Ventajas: no se pierde ninguna consulta, llega todo al teléfono de siempre,
no hay que pagar ningún servicio extra y no se cae nunca.

Si más adelante quieren un calendario con horas disponibles y pago online,
se puede agregar. Por ahora esto resuelve el objetivo, que es llenar la
agenda.

---

## Si cambia el teléfono o el correo

En `assets/js/main.js`, arriba del todo, están estas dos líneas:

```
whatsapp: '56961580539',
correo:   'contacto@bioluz.cl'
```

Se cambian ahí y el formulario queda actualizado en todas las páginas.

(Ojo: los botones verdes de WhatsApp que están sueltos en las páginas tienen
el número escrito dentro del `.html`. Si cambia el número, avísame y lo
reemplazo en todos lados de una vez.)

---

## Sobre los textos de salud

La web anterior decía que se trataban VIH, cáncer, diabetes y epilepsia.
Eso se cambió a propósito: ahora se habla de **acompañamiento complementario
al bienestar**, sin nombrar enfermedades ni prometer curación.

Dos razones:

- En Chile, prometer curar enfermedades sin ser profesional de la salud
  registrado puede traer problemas con la Seremi de Salud y con el Sernac.
- Alguien con una enfermedad grave podría postergar su tratamiento médico
  por leerlo.

Cada página tiene además una nota al pie diciendo que las terapias no
reemplazan la atención médica.

---

## Lo que falta decidir

- Logo (por ahora el nombre está escrito con la tipografía del sitio)
- Si se mantiene el dominio bioluz.cl
- Dónde se va a subir la web
- Si quieren agregar reseñas de personas que ya han ido — eso ayuda mucho
  a que reserven
