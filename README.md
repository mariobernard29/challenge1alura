

# Challenge 1 de Alura: Encriptador de Texto

Este proyecto es parte del Challenge 1 de Alura. El objetivo es desarrollar una aplicación web que encripta y desencripta mensajes utilizando un cifrado de sustitución simple. El proyecto se enfoca en la manipulación de cadenas de texto y la implementación de funcionalidades básicas de interfaz de usuario.

## Descripción

La aplicación permite al usuario ingresar un texto y luego encriptarlo o desencriptarlo según un conjunto específico de reglas. La interfaz es sencilla y fácil de usar, con un diseño amigable para el usuario.

### Reglas de Encriptación:

- La letra "e" se convierte en "enter"
- La letra "i" se convierte en "imes"
- La letra "a" se convierte en "ai"
- La letra "o" se convierte en "ober"
- La letra "u" se convierte en "ufat"

El mismo proceso se aplica de manera inversa para desencriptar el texto.

## Estructura del Proyecto

El proyecto está compuesto por tres archivos principales:

- **index.html**: Estructura y contenido de la página web.
- **styles.css**: Estilos y diseño visual de la aplicación.
- **index.js**: Lógica de encriptación, desencriptación y manipulación del DOM.

## Funcionalidades

- **Encriptar Texto**: Convierte el texto ingresado según las reglas definidas.
- **Desencriptar Texto**: Restaura el texto original siguiendo las mismas reglas en sentido inverso.
- **Validación de Entrada**: Muestra un mensaje si no se ingresa ningún texto.
- **Interfaz Intuitiva**: Cambios visuales para indicar el estado de la encriptación o desencriptación.

## Instalación y Uso

1. Clona este repositorio en tu máquina local:

   ```bash
   git clone https://github.com/tu-usuario/challenge1alura.git
   ```

2. Abre el archivo `index.html` en tu navegador preferido.

3. Ingresa un texto en el área de texto y haz clic en los botones "Encriptar" o "Desencriptar" para ver los resultados.

## Requisitos

- Navegador Web moderno.
- Conexión a Internet para cargar la librería de SweetAlert (si se usa en línea).

## Estructura del Código

El código está dividido en funciones para mantener la claridad y modularidad:

- `encriptar()`: Llama a la función de procesamiento de texto para encriptar.
- `desencriptar()`: Llama a la función de procesamiento de texto para desencriptar.
- `procesarTexto(esEncriptar)`: Función principal que aplica las reglas de encriptación o desencriptación.
- `actualizarInterfaz(srcImg, titulo, mensaje, mostrarAlerta)`: Actualiza los elementos de la interfaz según el estado actual.

## Tecnologías Utilizadas

- **HTML5**: Estructura del contenido.
- **CSS3**: Estilos y diseño responsivo.
- **JavaScript (ES6+)**: Lógica de encriptación y manejo de eventos.

## Contribuciones

Las contribuciones son bienvenidas. Si deseas mejorar este proyecto, puedes hacer un fork y luego enviar un pull request.

## Autor

- Mario Bernard (Desarrollador Frontend)

## Licencia

Este proyecto está bajo la licencia MIT.

