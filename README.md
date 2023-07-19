# ElizabethCSS
Microframework para el desarrollo web basando en TailwindCSS 

## Descripción

Elizabeth es un conjunto de estilos CSS predefinidos para su uso en proyectos web. Incluye una variedad de variables CSS personalizables, estilos de tipografía y una selección de colores para su uso en diseño web. Además, cuenta con un modo oscuro incorporado que se activa automáticamente en función del valor del atributo `data-theme` en el elemento HTML.

## Caracteristica

- Super ligera | ocupa menos de 32KB
- Modo oscuro permanente
- Una gran gama de colores
- Reset responsive
- Codigo reutilizable

## Uso

Para utilizar Elizabeth en tu proyecto, simplemente agrega la referencia al archivo CSS en la sección `<head>` de tu archivo HTML:

```html
<head>
  <link rel="stylesheet" href="ruta/a/elizabeth.css">
</head>
```

Una vez agregado, puedes utilizar las clases definidas en Elizabeth para dar estilo a tus elementos HTML. Por ejemplo, para aplicar un fondo blanco a un elemento, utiliza la clase `bg-white`:

```html
<div class="bg-white">Este es un ejemplo de un elemento con fondo blanco</div>
```

## Variables CSS

Elizabeth incluye un conjunto de variables CSS personalizables que puedes utilizar para dar estilo a tus elementos. Aquí hay algunos ejemplos:

- `--xs`: Tamaño de fuente extra pequeño
- `--sm`: Tamaño de fuente pequeño
- `--md`: Tamaño de fuente mediano
- `--lg`: Tamaño de fuente grande
- `--xlg`: Tamaño de fuente extra grande
- `--xxl`: Tamaño de fuente extra extra grande
- `--bg-white`: Color de fondo blanco
- `--bg-light`: Color de fondo claro
- `--bg-black`: Color de fondo negro
- `--bg-dark`: Color de fondo oscuro
- `--bg-slate`: Color de fondo de esquisto
- `--bg-gray`: Color de fondo gris
- `--bg-zinc`: Color de fondo zinc
- `--bg-neutral`: Color de fondo neutro
- `--bg-stone`: Color de fondo piedra
- `--bg-red`: Color de fondo rojo
- `--bg-orange`: Color de fondo naranja
- `--bg-amber`: Color de fondo ámbar
- `--bg-yellow`: Color de fondo amarillo
- `--bg-lime`: Color de fondo lima
- `--bg-green`: Color de fondo verde
- `--bg-emerald`: Color de fondo esmeralda
- `--bg-teal`: Color de fondo verde azulado
- `--bg-cyan`: Color de fondo cian
- `--bg-sky`: Color de fondo cielo
- `--bg-blue`: Color de fondo azul
- `--bg-indigo`: Color de fondo índigo
- `--bg-violent`: Color de fondo violeta
- `--bg-purple`: Color de fondo púrpura
- `--bg-fuchsia`: Color de fondo fucsia
- `--bg-pink`: Color de fondo rosa
- `--bgrose`: Color de fondo rosa claro
- `--fons`: Familia de fuentes
- `--sh-xs`: Sombra de tamaño extra pequeño
- `--sh-sm`: Sombra de tamaño pequeño
- `--sh-md`: Sombra de tamaño mediano
- `--sh-lg`: Sombra de tamaño grande
- `--sh-ui`: Sombra de interfaz de usuario
- `--white-dark`: Color de fondo blanco en modo oscuro
- `--light-dark`: Color de fondo claro en modo oscuro
- `--black-dark`: Color de fondo negro en modo oscuro
- `--dark-dark`: Color de fondo oscuro en modo oscuro

## Clases CSS

Elizabeth incluye una variedad de clases CSS que puedes utilizar para dar estilo a tus elementos. Aquí hay algunos ejemplos:

- `.bg-white`: Aplica un fondo blanco al elemento
- `.color-white`: Aplica un color de texto blanco al elemento
- `.bg-light`: Aplica un fondo claro al elemento
- `.color-light`: Aplica un color de texto claro al elemento
- `.bg-black`: Aplica un fondo negro al elemento
- `.color-black`: Aplica un color de texto negro al elemento
- `.bg-dark`: Aplica un fondo oscuro al elemento
- `.color-dark`: Aplica un color de texto oscuro al elemento
- `.bg-white-dark`: Aplica un fondo blanco en modo oscuro al elemento
- `.color-white-dark`: Aplica un color de texto blanco en modo oscuro al elemento
- `.bg-light-dark`: Aplica un fondo claro en modo oscuro al elemento
- `.color-light-dark`: Aplica un color de texto claro en modo oscuro al elemento
- `.bg-black-dark`: Aplica un fondo negro en modo oscuro al elemento
- `.color-black-dark`: Aplica un color de texto negro en modo oscuro al elemento
- `.text-center`: Centra el texto dentro del elemento
- `.text-left`: Alinea el texto a la izquierda dentro del elemento
- `.text-right`: Alinea el texto a la derecha dentro del elemento
- `.text-justify`: Justifica el texto dentro del elemento
- `.font-xs`: Aplica un tamaño de fuente extra pequeño al texto
- `.font-sm`: Aplica un tamaño de fuente pequeño al texto
- `.font-md`: Aplica un tamaño de fuente mediano al texto
- `.font-lg`: Aplica un tamaño de fuente grande al texto
- `.font-xlg`: Aplica un tamaño de fuente extra grande al texto
- `.font-xxl`: Aplica un tamaño de fuente extra extra grande al texto
- `.font-bold`: Aplica un peso de fuente negrita al texto
- `.font-normal`: Aplica un peso de fuente normal al texto
- `.border`: Aplica un borde alrededor del elemento
- `.border-top`: Aplica un borde superior al elemento
- `.border-right`: Aplica un borde derecho al elemento
- `.border-bottom`: Aplica un borde inferior al elemento
- `.border-left`: Aplica un borde izquierdo al elemento
- `.rounded`: Aplica bordes redondeados al elemento
- `.shadow-xs`: Aplica una sombra de tamaño extra pequeño al elemento
- `.shadow-sm`: Aplica una sombra de tamaño pequeño al elemento
- `.shadow-md`: Aplica una sombra de tamaño mediano al elemento
- `.shadow-lg`: Aplica una sombra de tamaño grande al elemento
- `.shadow-ui`: Aplica una sombra de interfaz de usuario al elemento

## Ejemplos

Aquí hay algunos ejemplos de cómo puedes utilizar las variables y clases definidas en Elizabeth para dar estilo a tus elementos:

### Aplicar un fondo rojo a un elemento

```html
<div class="bg-red">Este es un ejemplo de un elemento con fondo rojo</div>
```

### Aplicar un borde redondeado y una sombra a un botón

```html
<button class="bg-white color-black rounded shadow-sm">Haz clic aquí</button>
```

### Centrar el texto en un encabezado

```html
<h1 class="text-center">Este es un encabezado centrado</h1>
```

### Aplicar un tamaño de fuente extra grande y un peso de fuente negrita a un párrafo

```html
<p class="font-xlg font-bold">Este es un párrafo con un tamaño de fuente extra grande y un peso de fuente negrita</p>
```

### Aplicar una sombra de interfaz de usuario y un borde a un cuadro de texto

```html
<input type="text" class="border rounded shadow-ui">
```

## Conclusión

Elizabeth es un conjunto de estilos CSS útiles y personalizables que puedes utilizar en tus proyectos web para ahorrar tiempo y esfuerzo en el diseño. Con sus variables y clases predefinidas, puedes dar estilo a tus elementos HTML de manera rápida y eficiente. Esperamos que encuentres útil esta documentación y que disfrutes usando Elizabeth en tus proyectos. ¡Feliz codificación!

## Creditos
Este proyecto ha sido inspirando en tailwindCSS

## Apoyar el proyecto

Si deseas apoyar este proyecto invintame un cafe **https://ko-fi.com/frambertech**

