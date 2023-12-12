// Capturar cantidad de imágenes
const cantidadDeImagenes = document.images.length;
console.log(`Cantidad de imágenes: ${cantidadDeImagenes}`);

// Capturar cantidad de formularios
const cantidadDeFormularios = document.forms.length;
console.log(`Cantidad de formularios: ${cantidadDeFormularios}`);

// Capturar texto en la etiqueta title
const textoEnTitle = document.title;
console.log(`Texto en la etiqueta title: ${textoEnTitle}`);

// Capturar elementos del head
const elementosDelHead = document.head.children;
console.log("Elementos del head:");
for (const elemento of elementosDelHead) {
    console.log(elemento);
}

// Capturar elementos del body
const elementosDelBody = document.body.children;
console.log("Elementos del body:");
for (const elemento of elementosDelBody) {
    console.log(elemento);
}

// Capturar elementos links
const elementosLinks = document.querySelectorAll('a');
console.log("Elementos links:");
elementosLinks.forEach((link, index) => {
    console.log(`Link ${index + 1}: ${link.href}`);
});
