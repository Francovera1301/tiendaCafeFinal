        ☕ Proyecto: Tienda Café
Una aplicación web completa para una tienda de café. Incluye una vista para clientes (catálogo dinámico, carrito, suscripción) y un panel de administración protegido para gestionar el inventario.

📋 Características Principales

🛒 Catálogo Dinámico: Los productos se cargan desde la base de datos MySQL.
🔒 Panel de Administración: Sistema de login seguro para gestionar productos.
✏️ CRUD Completo: Crear, Leer, Actualizar y Borrar productos (incluyendo subida de imágenes).
📧 Suscripciones: Captura de leads (emails) guardados en base de datos.
📂 Arquitectura MVC: Proyecto estructurado con separación de Frontend (public) y Backend.

⚙️ Requisitos Previos
Antes de comenzar, asegúrate de tener instalado en tu PC:

Node.js (Versión 14 o superior).
XAMPP (O cualquier servidor MySQL).
Git (Para clonar el repositorio).
Navegador Web (Chrome, Edge, Firefox).

🚀 Guía de Instalación Paso a Paso
Sigue estos pasos para levantar el proyecto desde cero en tu máquina local.

1. Clonar el Repositorio
Abre tu terminal y ejecuta:
git clone https://github.com/Francovera1301/tiendaCafeFinal.git
cd tiendaCafeFinal
2. Instalar Dependencias
El proyecto necesita librerías como express, mysql2 y multer. Instálalas automáticamente con:
npm install
(Esto creará la carpeta node_modules).

3. Configurar la Base de Datos 🗄️
Este paso es crítico. El servidor necesita dónde guardar los datos.
Abre XAMPP y enciende los módulos Apache y MySQL.
Ve a tu navegador y entra a: http://localhost/phpmyadmin.

Crea una nueva base de datos llamada: tienda_cafe.
Selecciona la base de datos creada e ve a la pestaña Importar.
Selecciona el archivo tienda_cafe.sql que se encuentra en la carpeta raíz de este proyecto.
Dale a "Continuar" para crear las tablas (usuarios, productos, suscripciones).

4. Verificar Conexión (Opcional)
Abre el archivo server.js y asegúrate de que las credenciales coincidan con las de tu XAMPP (por defecto suelen ser estas):

const db = mysql.createConnection({
  host: "localhost",
  user: "root",       // Usuario por defecto de XAMPP
  password: "",       // Contraseña vacía por defecto
  database: "tienda_cafe",
});

5. Ejecutar el Servidor
⚠️ Importante: No uses "Live Server". Este proyecto requiere Node.js para funcionar.
En la terminal, dentro de la carpeta del proyecto, ejecuta: node server.js
Deberías ver el mensaje:
Servidor en http://localhost:3000 
Conectado a MySQL

📖 Modo de Uso
Abre tu navegador y visita: http://localhost:3000

👤 Acceso al Panel Admin
Para gestionar los productos, ve a /login.html o haz clic en "Ingresar" (si tienes el botón).

Usuario: admin@cafe.com
Contraseña: admin1234

Una vez dentro, podrás:

Agregar nuevos cafés con foto. Editar precios y nombres. Eliminar productos.
(Los cambios se reflejarán automáticamente en la página de inicio).

📂 Estructura del Proyecto
El proyecto ha sido refactorizado para mantener el orden:

TIENDA_CAFE_VERA/
├── 📂 public/           # FRONTEND (Lo que ve el cliente)
│   ├── 📂 css/          # Hojas de estilo
│   ├── 📂 js/           # Scripts del navegador (DOM, Fetch)
│   ├── 📂 imagenes/     # Imágenes estáticas del sitio
│   └── *.html           # Vistas (index, login, admin, etc.)
├── 📂 uploads/          # Imágenes subidas dinámicamente por el Admin
├── 📂 node_modules/     # Librerías (No tocar)
├── server.js            # BACKEND (Lógica del servidor y rutas API)
├── tienda_cafe.sql      # Copia de seguridad de la Base de Datos
└── package.json         # Configuración del proyecto

🛠️ Tecnologías Utilizadas
Frontend: HTML5, CSS3, JavaScript (Vanilla).
Backend: Node.js, Express.
Base de Datos: MySQL.

Imágenes: Multer (Middleware de carga de archivos).

🧑‍💻 Autor
Franco Vera Proyecto académico de Programación Web.