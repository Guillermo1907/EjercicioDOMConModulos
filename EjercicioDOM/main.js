import { crearTabla, crearLista, imagen, crearParrafo } from './create.js';

document.getElementById("inicio").addEventListener("click", function(event) {
    resetToHome(); 
});

document.getElementById("tabla").addEventListener("click", function() {
    document.getElementById("main-content").innerHTML = crearTabla();
});

document.getElementById("lista").addEventListener("click", function() {
    document.getElementById("main-content").innerHTML = crearLista();
});

document.getElementById("imagen").addEventListener("click", function() {
    document.getElementById("main-content").innerHTML = imagen();
});

document.getElementById("parrafo").addEventListener("click", function() {
    document.getElementById("main-content").innerHTML = crearParrafo();
});


function resetToHome() {
    document.getElementById("main-content").innerHTML = `
        <h1>¡Hola!</h1>
        <p>Dale click a alguna opción del menú.</p>
    `;
}


