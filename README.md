# Primer-parcial-desarrollo-web
##  Descripción del proyecto

Este proyecto consiste en una aplicación web para un restaurante, desarrollada con HTML, CSS y JavaScript. Se implementaron conceptos de **modularización**, **componentes reutilizables** y **carga dinámica de datos** para mejorar la organización y escalabilidad del código.

---

##  ¿Qué es la modularización?

La modularización es una técnica que consiste en dividir una aplicación en diferentes partes o módulos independientes.
Esto permite que el código sea más fácil de mantener, reutilizar y escalar.

---

##  Fragmentos reutilizables

Se crearon componentes HTML separados para:

* Header (encabezado)
* Sidebar (menú lateral)
* Footer (pie de página)

Estos fragmentos se cargan dinámicamente en la aplicación utilizando **JavaScript y Fetch**, lo que permite reutilizarlos en diferentes páginas.

---

##  Plantillas con `<template>`

Se utilizó la etiqueta `<template>` para definir una estructura reutilizable de productos.

Esto permite clonar el contenido con JavaScript y generar múltiples elementos dinámicamente sin repetir código HTML.

---

##  Uso de datos externos (Fetch + JSON)

Se creó un archivo `productos.json` dentro de la carpeta `data`, el cual contiene la información de los productos.

Mediante la API **Fetch**, los datos son cargados dinámicamente y mostrados en la página principal.

---

##  Web Components

Se implementó un componente personalizado llamado:

```html
<producto-card>
```

Este componente:

* Recibe atributos como nombre, precio, descripción e imagen
* Utiliza **Shadow DOM** para encapsular su estructura y estilos
* Permite reutilizar tarjetas de productos de forma más limpia y organizada

---

##  Formulario de inicio de sesión

Se desarrolló una página de login que valida usuario y contraseña mediante JavaScript.

* Si las credenciales son correctas → redirige al `index.html`
* Si son incorrectas → muestra un mensaje de error

**Importante:**
Este método utiliza credenciales quemadas en el código, por lo tanto **NO es seguro** y se implementa únicamente con fines educativos.

---

##  Diseño y estilos

Se aplicaron estilos consistentes en toda la aplicación, manteniendo:

* Colores definidos
* Tipografías uniformes
* Espaciados y distribución coherente

---

##  Buenas prácticas aplicadas

* Código organizado y correctamente indentado
* Separación de responsabilidades en distintos archivos:

  * `main.js`
  * `login.js`
  * `styles.css`

---

##  Evidencia de trabajo en GitHub

El desarrollo del proyecto fue gestionado mediante GitHub, utilizando repositorios para almacenar y versionar el código.

---

##  Funcionalidades principales

* ✔ Login funcional
* ✔ Componentes dinámicos (header, sidebar, footer)
* ✔ Carga de productos desde JSON
* ✔ Renderizado dinámico de productos
* ✔ Diseño responsive básico

---

##  Sustentación


Durante la sustentación se demostrará:

* Funcionamiento completo de la aplicación
* Explicación de modularización
* Uso de Fetch, templates y Web Components
* Organización del proyecto

---
## Trabajo colaborativo

El proyecto se desarrolló en equipo utilizando:

- Commits constantes
- Pull Requests para integrar cambios

Esto permitió una mejor organización del trabajo y control de versiones.

##  Autor

Proyecto desarrollado por:
**Iván René Torres Coronel - 192668**
**Julieta Ropero Velazques - 192639**
