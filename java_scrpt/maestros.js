function handleDrop(event) {
  event.preventDefault();
  handleFiles(event.dataTransfer.files);
}

function handleDragOver(event) {
  event.preventDefault();
}

function handleFileChange(event) {
  handleFiles(event.target.files);
}

function handleFiles(files) {
  const dropArea = document.getElementById("dropArea");
  const status = document.getElementById("status");

  // Verificar si se seleccionó algún archivo
  if (files.length > 0) {
    const file = files[0];
    status.innerHTML = `Archivo seleccionado: ${file.name}, tamaño: ${file.size} bytes, tipo: ${file.type}`;
    // Aquí puedes agregar la lógica para subir el archivo o manejarlo como desees.
    // Por ejemplo, puedes usar la API de Google Drive para subir el archivo como lo mostré anteriormente.
  } else {
    status.innerHTML = "No se seleccionó ningún archivo.";
  }

  // Restaurar el estilo del área de arrastre
  dropArea.style.border = "2px dashed #ccc";
  dropArea.style.backgroundColor = "transparent";
}

// Cambiar el estilo del área de arrastre cuando el archivo se está arrastrando sobre ella
document.addEventListener("dragenter", function (event) {
  const dropArea = document.getElementById("dropArea");
  dropArea.style.border = "2px dashed #4CAF50";
  dropArea.style.backgroundColor = "#f2f2f2";
});

// Restaurar el estilo del área de arrastre cuando el archivo se saca de ella
document.addEventListener("dragleave", function (event) {
  const dropArea = document.getElementById("dropArea");
  dropArea.style.border = "2px dashed #ccc";
  dropArea.style.backgroundColor = "transparent";
});
