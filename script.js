// -------------------------------
// MOSTRAR / CERRAR MODAL
// -------------------------------
window.addEventListener('load', function() {
  const modal = document.getElementById('modal-suscripcion');
  const cerrar = modal.querySelector('.cerrar');

  // Mostrar modal al cargar
  modal.style.display = 'flex';

  // Cerrar al hacer clic en la X
  cerrar.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  // Cerrar al hacer clic fuera del cuadro
  modal.addEventListener('click', e => {
    if (e.target === modal) modal.style.display = 'none';
  });
});


// -------------------------------
// SUSCRIPCIÓN (modal + footer)
// -------------------------------
document.addEventListener("DOMContentLoaded", () => {
  // Selecciona TODOS los formularios que contengan los campos nombre/email
  const forms = document.querySelectorAll('form[action="#"]');

  forms.forEach(form => {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const nombre = form.querySelector('input[name="nombre"]').value.trim();
      const email = form.querySelector('input[name="email"]').value.trim();

      if (!nombre || !email) {
        alert("Por favor, completa todos los campos.");
        return;
      }

      try {
        const res = await fetch("http://localhost:3000/api/suscribirse", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ nombre, email })
        });

        const data = await res.json();

        // Mostrar mensaje debajo del formulario
        let msg = form.querySelector(".mensaje-suscripcion");
        if (!msg) {
          msg = document.createElement("p");
          msg.className = "mensaje-suscripcion";
          form.appendChild(msg);
        }

        if (data.success) {
          msg.textContent = "✅ ¡Gracias por suscribirte!";
          msg.style.color = "green";
          form.reset();

          // Si el formulario está dentro del modal, lo cerramos
          const modal = form.closest('#modal-suscripcion');
          if (modal) modal.style.display = 'none';
        } else {
          msg.textContent = "❌ Hubo un problema. Intenta nuevamente.";
          msg.style.color = "red";
        }
      } catch (error) {
        console.error("Error al enviar suscripción:", error);
        alert("Error al conectar con el servidor.");
      }
    });
  });
});


// -------------------------------
// PRODUCTOS DINÁMICOS
// -------------------------------
document.addEventListener("DOMContentLoaded", () => {
  fetch("/api/productos")
    .then(response => response.json())
    .then(data => {
      const contenedor = document.getElementById("contenedor-productos");
      data.forEach(producto => {
        const card = document.createElement("div");
        card.classList.add("producto-card-dinamico");
        card.innerHTML = `
          <img src="${producto.imagen}" alt="${producto.nombre}">
          <h3>${producto.nombre}</h3>
          <p>Precio: $${producto.precio}</p>
        `;
        contenedor.appendChild(card);
      });
    })
    .catch(error => console.error("Error al obtener los productos:", error));
});

// Control del carrusel
const contenedor = document.getElementById("contenedor-productos");
const btnPrev = document.getElementById("prevBtn");
const btnNext = document.getElementById("nextBtn");

let productos = [];
let posicion = 0;
const visibles = 5; // cantidad de productos visibles a la vez
let autoSlideInterval;

// 🔹 Cargar productos desde el backend
async function cargarProductos() {
  const res = await fetch("/api/productos");
  productos = await res.json();
  mostrarProductos();
  iniciarAutoSlide();
}

// 🔹 Mostrar los productos en el carrusel
function mostrarProductos() {
  contenedor.innerHTML = "";

  const inicio = posicion;
  const fin = Math.min(inicio + visibles, productos.length);
  const visiblesProductos = productos.slice(inicio, fin);

  visiblesProductos.forEach((p) => {
    const card = document.createElement("div");
    card.classList.add("producto-card-dinamico");
    card.innerHTML = `
      <img src="${p.imagen}" alt="${p.nombre}">
      <h3>${p.nombre}</h3>
      <p>$${p.precio}</p>
    `;
    contenedor.appendChild(card);
  });

  contenedor.style.transition = "transform 0.6s ease";
  contenedor.style.transform = "translateX(0)";
}

// 🔹 Función para mover el carrusel
function moverCarrusel(direccion) {
  if (direccion === "next") {
    posicion++;
    if (posicion + visibles > productos.length) {
      posicion = 0; // reinicia cuando llega al final
    }
  } else if (direccion === "prev") {
    posicion--;
    if (posicion < 0) {
      posicion = Math.max(0, productos.length - visibles);
    }
  }

  mostrarProductos();
}

// 🔹 Flechas manuales
btnPrev.addEventListener("click", () => moverCarrusel("prev"));
btnNext.addEventListener("click", () => moverCarrusel("next"));

// 🔹 Deslizamiento automático
function iniciarAutoSlide() {
  autoSlideInterval = setInterval(() => {
    moverCarrusel("next");
  }, 3000); // cada 3 segundos
}

// 🔹 Pausar cuando el mouse está sobre el carrusel
contenedor.addEventListener("mouseenter", () => clearInterval(autoSlideInterval));
contenedor.addEventListener("mouseleave", iniciarAutoSlide);

// 🔹 Iniciar
cargarProductos();


