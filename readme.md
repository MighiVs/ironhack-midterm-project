# IRONHACK Mid-Term Project | Front-End



## Introducción

¡Hola! Bienvenido/a al proyecto de Mid-Term de Ironhack. En este proyecto, con la ayuda de Ironhack y del material y diseño que me han ofrecido, me he propuesto crear una página web funcional utilizando los conocimientos que he adquirido en las últimas semanas de HTML, CSS y Javascript. La idea es implementar el diseño y ajustarlo al máximo, para luego añadir algunas funcionalidades que mejoren la experiencia del usuario. Todo esto será desplegado online en Netlify para que puedas ver nuestro trabajo en acción. 

¡Sigue leyendo para conocer más detalles!



## Estructura de páginas

El proyecto cuenta con **tres páginas principales** diseñadas para brindar una experiencia de usuario agradable y fácil de navegar. Estas páginas son:

1. Página principal: cuenta con una barra de navegación clara y concisa para acceder a cada sección de la página de manera rápida. La sección de presentación presenta una breve descripción del proyecto y sus características principales, seguida de una sección de proyectos recientes y testimonios de clientes satisfechos. La sección de servicios ofrecidos y una sección de suscripción se encuentran al final de la página, con un pie de página que proporciona información adicional.

2. Página de proyectos: esta página está diseñada para mostrar los proyectos actuales utilizando una API que nos proporciona los datos necesarios. En el apartado de funcionalidades con Javascript se detallará más esta página.

3. Página de contacto: cuenta con un formulario de contacto para que los usuarios puedan enviar sus consultas o comentarios directamente al equipo detrás del proyecto. El formulario cuenta con validación de campos y un mensaje de confirmación en un modal después de enviar el formulario.

En resumen, cada página cuenta con una estructura bien definida y un diseño visual atractivo que proporciona una experiencia de usuario fácil de navegar.

Para facilitar la navegación en la página, se ha añadido una funcionalidad **extra**:

Se ha añadido un botón de Scroll Up automático con animación de "palpitación", que se activa cuando el scroll de la página no se encuentra en la posición superior máxima.



## Diseño Responsive

El diseño de este proyecto es **completamente responsive**, lo que significa que se adapta a diferentes tamaños de pantalla y dispositivos, proporcionando una experiencia de usuario consistente en todos los dispositivos. He utilizado técnicas de diseño responsive como la adaptación de elementos y contenido según el tamaño de la pantalla, reordenamiento de elementos y ajuste de tamaños de texto e imágenes para garantizar que el contenido sea legible y fácil de usar en cualquier dispositivo.

Para probar la responsividad del diseño, he utilizado diferentes herramientas y navegadores para simular diferentes tamaños de pantalla. También he comprobado el diseño en diferentes dispositivos móviles y tablets para asegurarme de que la experiencia de usuario sea óptima en todas las situaciones.

Se han contemplado las siguientes resoluciones:

- Width menor de 760px (dispositivos móviles)
- Width entre 760px y 1025px (tablets)
- Mayores de 1025px (Desktop)

Esto se ha realizado mediante la técnica **Mobile First Method**. Que ha demostrado ser una manera más eficiente en cuanto al tiempo y recursos.

A parte, para la resolución de dispositivos móviles, se ha añadido una funcionalidad **extra**:

Se ha omitido la barra de navegación situado en la parte superior de todas las páginas y se ha adaptado a un menu desplegable lateral.


## Funcionalidades con Javascript

### Página de Proyectos

Se ha desarrollado esta parte en el archivo llamado apifetch.js

Al iniciar la página de proyectos, se carga el contenido de la API (que contiene la información de los proyectos a mostrar). **He codificado esta parte para que se cargue en el apartado principal uno de los proyectos disponibles al azar, y en "otros proyectos" se muestren los demás.**

Además, con el uso de los **QueryParams**, cada tarjeta de proyecto tiene un enlace "Learn More" que carga la página de proyectos estando el proyecto en cuestión en el apartado principal.

### Página de Contact Us

Esta parte se encuentra desarrollada en el archivo script.js principal.

Incluye:

- **Validación de los campos del formulario.** Se ha tenido en cuenta de que la etiqueta "type" de los inputs ayuda parcialmente a la validación de los campos, y la parte de javascript es complementaria. Se ha utilizado REGEX para la validación del campo de teléfono y email.

- **Envío de los datos de contact a un servidor.** Se ha desarrollado esta funcionalidad utilizando JSON SERVER y la aplicación Postman para hacer pruebas. Se ha utilizado el método PUT en lugar del POST, para poderlo implementar de manera de que se vayan acumulando en la array del servidor los diferentes datos de cada usuario.



## Licencia

Actualmente este proyecto no está bajo ninguna licencia.

## Créditos

Este proyecto ha sido realizado por **Miguel Vergara**  como parte del programa de **Ironhack** en **Barcelona**. El diseño original fue proporcionado por Ironhack. Se han utilizado las siguientes herramientas y recursos:

**FontAwesome** para algunos iconos.
**Google Fonts** para la fuente utilizada.
**Netlify** para el despliegue de la página web.



## Badges

Netlify Status*** LINK**

Este badge muestra el estado actual del despliegue de la página web en Netlify. Haga clic en él para ver los detalles en la plataforma de Netlify.