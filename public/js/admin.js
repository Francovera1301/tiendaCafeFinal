const form = document.getElementById("formProducto");
const productosContainer = document.getElementById("productosContainer");
const inputId = document.getElementById("productoId");
const inputNombre = document.getElementById("nombre");
const inputPrecio = document.getElementById("precio");
const inputImagen = document.getElementById("imagen");

// 🔹 Cargar productos desde el backend
async function cargarProductos() {
  const res = await fetch("/api/productos");
  const productos = await res.json();

  productosContainer.innerHTML = "";
  productos.forEach((p) => {
    const card = document.createElement("div");
    card.classList.add("producto-card");
    card.innerHTML = `
      <img src="${p.imagen}" alt="${p.nombre}">
      <h3>${p.nombre}</h3>
      <p>Precio: $${p.precio}</p>
      <div class="botones">
        <button onclick="editarProducto(${p.id}, '${p.nombre}', ${p.precio}, '${p.imagen}')">Editar</button>
        <button class="eliminar" onclick="eliminarProducto(${p.id})">Eliminar</button>
      </div>
    `;
    productosContainer.appendChild(card);
  });
}

// 🔹 Guardar producto (crear o editar)
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData();
  formData.append("nombre", inputNombre.value);
  formData.append("precio", inputPrecio.value);

  if (inputImagen.files[0]) {
    formData.append("imagen", inputImagen.files[0]);
  }

  if (inputId.value) {
    await fetch(`/api/productos/${inputId.value}`, {
      method: "PUT",
      body: formData,
    });
  } else {
    await fetch("/api/productos", {
      method: "POST",
      body: formData,
    });
  }

  form.reset();
  inputId.value = "";
  cargarProductos();
});


// 🔹 Eliminar producto
async function eliminarProducto(id) {
  if (confirm("¿Seguro que deseas eliminar este producto?")) {
    await fetch(`/api/productos/${id}`, { method: "DELETE" });
    cargarProductos();
  }
}

// 🔹 Cargar datos en el formulario para editar
function editarProducto(id, nombre, precio, imagen) {
  inputId.value = id;
  inputNombre.value = nombre;
  inputPrecio.value = precio;
  inputImagen.value = imagen;
}

// 🔹 Cargar productos al abrir el panel
cargarProductos();
