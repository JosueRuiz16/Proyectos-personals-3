window.onload = function () {
  $("#onload").fadeOut();
  $("body").removeClass("hidden ");
};
// Función para mostrar el loader
function showLoader() {
  var loader = document.getElementById("loader");
  loader.style.display = "block";

  // Simulación de una operación asíncrona (5 segundos)
  setTimeout(function () {
    loader.style.display = "none";
  }, 5000);
}
