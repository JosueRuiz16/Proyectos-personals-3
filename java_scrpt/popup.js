function hasShownPopup() {
  return localStorage.getItem("popupShown") === "true";
}
function markPopupAsShown() {
  localStorage.setItem("popupShown", "true");
}
// Función para redirigir a la página seleccionada
function redirectTo(url) {
  window.location.href = url;
}
//  para cerrar la ventana emergente
function closePopup() {
  var overlay = document.querySelector(".overlay");
  overlay.style.display = "none";
}
// Mostrar la ventana emergente
function mostrarVentanaEmergente() {
  var overlay = document.querySelector(".overlay");
  overlay.style.display = "flex";
}

// Verificar la opción seleccionada
function verificarOpcion(opcion) {
  var overlay = document.querySelector(".overlay");
  overlay.style.display = "none";

  if (opcion === "maestro") {
    verificarNombre();
  } else {
    redirectTo("estudiante.html");
  }
}

// Verificar el nombre ingresado
function verificarNombre() {
  var nombreIngresado = prompt("Ingrese su nombre:");
  var nombresAceptados = [
    "Moises@emprendedora",
    "Ana@emprendedora",
    "Juan@emprendedora",
    "Luis@emprendedora",
    "Rogelio@emprendedora",
    "Arlen@emprendedora",
    "Dina@emprendedora",
    "Mario@emprendedora",
  ]; // Reemplaza con los nombres aceptados

  if (nombresAceptados.includes(nombreIngresado)) {
    redirectTo("maestros.html");
  } else {
    alert("Nombre inválido. Intente nuevamente.");
  }
}

// Redirigir a una página
function redirectTo(page) {
  window.location.href = page;
}

window.addEventListener("load", function () {
  var overlay = document.querySelector(".overlay");
  var closeButton = document.querySelector(".close-button");

  if (!localStorage.getItem("popupShown")) {
    overlay.style.display = "flex";
    localStorage.setItem("popupShown", "true");
  }

  closeButton.addEventListener("click", function () {
    overlay.style.display = "none";
  });
});
