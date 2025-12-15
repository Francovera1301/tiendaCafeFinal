🧾 Proyecto: Tienda Café ☕
📋 Descripción

Se realizo una aplicación web simple con gestión por medio de un rol administrador el cual se valida con la base de datos.
Permite iniciar sesión con un usuario registrado en la BD y acceder al panel admin para realizar un CRUD con la base de datos.}
También guarda los en la base de datos el formulación modal de susbcripcion y el del footer.

Aun se encuentra en proceso de pruebas por lo que las productos dinámicos que se cargan por el admin solo aparecen en localhost:3000

⚙️ Requisitos previos

Antes de empezar, asegurate de tener instalado: Node.js / MySQL / npm

🗄️ Base de datos

Abrí MySQL phpMyAdmin.

Creá una base de datos llamada: CREATE DATABASE tienda_cafe;

Importá el archivo SQL incluido (tienda_cafe.sql) 

📦 Instalación de dependencias

Descargá la carpeta. Abrí una terminal dentro del proyecto.

Instalá las dependencias:  npm install express mysql cors body-parser

📁 Estructura del proyecto
📦 No se penso en el orden (pasarlo por alto)

🚀 Ejecución del proyecto

En la terminal, ejecutá:  node server.js

Abrí el navegador y entrá en:  http://localhost:3000/login.html

Iniciá sesión con:   Usuario: admin@cafe.com   Contraseña: admin1234

Si el login es correcto, serás redirigido a admin.html, donde podrás gestionar los productos.

🧠 Funcionamiento básico

login.html → formulario que envía email y contraseña al servidor.

server.js → valida el usuario en MySQL y devuelve respuesta JSON.

admin.html → muestra los productos y permite agregar, editar y eliminar. (se utilizo multer para cargar archivos descargados en la pc)

El CRUD se conecta al backend mediante fetch() y actualiza la base de datos en tiempo real.

🧑‍💻 Autor

Franco Vera
Proyecto académico y de práctica con Node.js + MySQL + HTML/CSS/JS.