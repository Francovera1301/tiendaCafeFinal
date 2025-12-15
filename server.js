const express = require("express");
const path = require("path");
const mysql = require("mysql2");
const multer = require("multer");
const cors = require("cors");
const app = express();
const session = require("express-session");

// Configuración de la sesión
app.use(session({
  secret: "mi_secreto_super_seguro", // Podés cambiarlo
  resave: false,
  saveUninitialized: false
}));

// Middlewares
app.use(cors());
app.use(express.json());

app.use(express.static(__dirname));

//app.use("/public", express.static(path.join(__dirname, "public")));
//app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use("/uploads", express.static(path.join(__dirname, "uploads"))); // Servir imágenes subidas


// Configuración de conexión a MySQL
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "tienda_cafe", // usa el nombre de tu BD
});

// Configurar almacenamiento de imágenes
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const uniqueName = Date.now() + "-" + file.originalname;
    cb(null, uniqueName);
  },
});

const upload = multer({ storage });

// Ruta para obtener todos los productos
app.get("/api/productos", (req, res) => {
  db.query("SELECT * FROM productos", (err, result) => {
    if (err) return res.status(500).send(err);
    res.json(result);
  });
});

// Ruta para agregar un producto (con imagen)
app.post("/api/productos", upload.single("imagen"), (req, res) => {
  const { nombre, precio } = req.body;
  const imagen = req.file ? `/uploads/${req.file.filename}` : null;

  const sql = "INSERT INTO productos (nombre, precio, imagen) VALUES (?, ?, ?)";
  db.query(sql, [nombre, precio, imagen], (err, result) => {
    if (err) return res.status(500).send(err);
    res.json({ message: "Producto agregado", id: result.insertId });
  });
});

// Ruta para eliminar producto
app.delete("/api/productos/:id", (req, res) => {
  const { id } = req.params;
  db.query("DELETE FROM productos WHERE id = ?", [id], (err) => {
    if (err) return res.status(500).send(err);
    res.json({ message: "Producto eliminado" });
  });
});

// Ruta para editar producto
app.put("/api/productos/:id", upload.single("imagen"), (req, res) => {
  const { id } = req.params;
  const { nombre, precio } = req.body;
  let sql, values;

  if (req.file) {
    const imagen = `/uploads/${req.file.filename}`;
    sql = "UPDATE productos SET nombre=?, precio=?, imagen=? WHERE id=?";
    values = [nombre, precio, imagen, id];
  } else {
    sql = "UPDATE productos SET nombre=?, precio=? WHERE id=?";
    values = [nombre, precio, id];
  }

  db.query(sql, values, (err) => {
    if (err) return res.status(500).send(err);
    res.json({ message: "Producto actualizado" });
  });
});
 

/// Ruta de login (versión funcional sin middleware de sesión)
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ success: false, message: "Faltan datos" });
  }

  const sql = "SELECT * FROM usuarios WHERE email = ? AND password = ?";
  db.query(sql, [email, password], (err, result) => {
    if (err) {
      console.error("Error al consultar la base de datos:", err);
      return res.status(500).json({ success: false, message: "Error interno del servidor" });
    }

    if (result.length > 0) {
      res.json({ success: true, message: "Login exitoso" });
    } else {
      res.json({ success: false, message: "Usuario o contraseña incorrectos" });
    }
  });
});




// Ruta para mostrar el login
app.get("/login.html", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "login.html"));
});

// Ruta protegida para el panel admin
app.get("/admin.html", (req, res) => {
  if (!req.session.usuario) {
    return res.redirect("/login.html");
  }
  res.sendFile(path.join(__dirname, "public", "admin.html"));
});



// Servir index
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

db.connect(err => {
  if (err) {
    console.error("Error al conectar con MySQL:", err.message);
  } else {
    console.log("Conectado a MySQL");
  }
});


const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor en http://localhost:${PORT}`));
