// Función para habilitar el modo oscuro
function enableDarkMode() {
  const checkbox = document.getElementById('checkitem');
  const body = document.body;

  if (!checkbox || !body) {
    return; // Evitar errores si los elementos no existen
  }

  if (checkbox.checked) {
    // Modo oscuro
    body.classList.add('dark-mode');
    try {
      localStorage.setItem('darkMode', 'enabled'); // Almacenar el modo oscuro en localStorage
    } catch (e) {
      console.error('No se pudo acceder a localStorage: ' + e.message);
    }
  } else {
    // Modo claro
    body.classList.remove('dark-mode');
    try {
      localStorage.setItem('darkMode', 'disabled'); // Almacenar el modo claro en localStorage
    } catch (e) {
      console.error('No se pudo acceder a localStorage: ' + e.message);
    }
  }
}

// Obtener el estado del modo oscuro almacenado en localStorage
document.addEventListener("DOMContentLoaded", function () {
  const savedDarkMode = localStorage.getItem('darkMode');
  if (savedDarkMode === 'enabled') {
    // Habilitar el modo oscuro al cargar la página si estaba activado previamente
    const body = document.body;
    if (body) {
      body.classList.add('dark-mode');
      const checkbox = document.getElementById('checkitem');
      if (checkbox) {
        checkbox.checked = true;
      }
    }
  }
});

// Obtener el idioma actual almacenado en localStorage
const savedLanguage = localStorage.getItem('currentLanguage');
let currentLanguage = 'es'; // Establecer el idioma predeterminado a español

// Si se encuentra un idioma almacenado, establecerlo
if (savedLanguage === 'en') {
  const checkbox = document.getElementById('checkitemLanguage');
  const españolTextElements = document.querySelectorAll('.español-text');
  const inglesTextElements = document.querySelectorAll('.ingles-text');

  if (checkbox) {
    checkbox.checked = true;
  }

  // Cambiar a inglés
  españolTextElements.forEach(element => {
    element.style.display = 'none';
  });
  inglesTextElements.forEach(element => {
    element.style.display = 'block';
  });
  currentLanguage = 'en'; // Actualizar el idioma a inglés
}

// Función para cambiar el idioma
function toggleLanguage() {
  const checkbox = document.getElementById('checkitemLanguage');
  const españolTextElements = document.querySelectorAll('.español-text');
  const inglesTextElements = document.querySelectorAll('.ingles-text');

  if (checkbox.checked) {
    // Cambiar a inglés
    españolTextElements.forEach(element => {
      element.style.display = 'none';
    });
    inglesTextElements.forEach(element => {
      element.style.display = 'block';
    });
    currentLanguage = 'en'; // Actualizar el idioma a inglés
  } else {
    // Cambiar a español
    inglesTextElements.forEach(element => {
      element.style.display = 'none';
    });
    españolTextElements.forEach(element => {
      element.style.display = 'block';
    });
    currentLanguage = 'es'; // Actualizar el idioma a español
  }

  // Almacenar el idioma seleccionado en localStorage
  localStorage.setItem('currentLanguage', currentLanguage);
}

// Resto del código (menú, mostrar mensaje) se mantiene igual

document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const navbar = document.querySelector(".navbar");

  // Inicialmente, oculta el menú
  if (navbar) {
    navbar.style.right = "-100%";
  }

  if (menuToggle) {
    menuToggle.addEventListener("change", function () {
      if (menuToggle.checked) {
        if (navbar) {
          navbar.style.right = "0";
        }
      } else {
        if (navbar) {
          navbar.style.right = "-100%"; // Cambia el valor a "-100%" para ocultar completamente el menú
        }
      }
    });
  }

  function mostrarMensaje() {
    alert("Seras rederidigido a Facebook para coordinar la compra.");
  }

  // Obtén una referencia al botón en tu HTML por su ID
  const botonComprar = document.getElementById("boton-comprar");

  // Agrega un "event listener" para escuchar el clic en el botón y llamar a la función mostrarMensaje
  if (botonComprar) {
    botonComprar.addEventListener("click", mostrarMensaje);
  }
});