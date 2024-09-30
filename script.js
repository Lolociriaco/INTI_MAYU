abrirMenu = document.querySelector('.abrir_menu');
cerrarMenu = document.querySelector('.cerrar_menu');
botonContactanos = document.querySelector('.button_contactanos');
nav = document.querySelector('#nav');

abrirMenu.addEventListener("click", () => {
    cerrarMenu.classList.add('cerrar_menu_visible')
    abrirMenu.classList.add('abrir_menu_oculto')
    botonContactanos.classList.add('button-contactanos-visible')
    nav.classList.add("nav-visible")
})

cerrarMenu.addEventListener("click", () => {
    cerrarMenu.classList.remove('cerrar_menu_visible')
    abrirMenu.classList.remove('abrir_menu_oculto')
    botonContactanos.classList.remove('button-contactanos-visible')
    nav.classList.remove("nav-visible")
})

function copyNumber(){
    let number = document.querySelector(".phone");
    let button = document.querySelector("#icon");
    
    navigator.clipboard.writeText(number.textContent);
    button.classList.remove("bi-clipboard");
    button.classList.add("bi-clipboard-check-fill");

    // Cambia la clase de nuevo después de 2 segundos (2000 ms)
    setTimeout(function() {
        button.classList.remove("bi-clipboard-check-fill");
        button.classList.add("bi-clipboard");
    }, 2000);
}

function copyEmail(){
    let email = document.querySelector(".email");
    let button = document.querySelector("#iconEmail");
    
    navigator.clipboard.writeText(email.textContent);
    button.classList.remove("bi-clipboard");
    button.classList.add("bi-clipboard-check-fill");

    // Cambia la clase de nuevo después de 2 segundos (2000 ms)
    setTimeout(function() {
        button.classList.remove("bi-clipboard-check-fill");
        button.classList.add("bi-clipboard");
    }, 2000);
}


///CARRUSEL 


let indice = 0;
mostrarImagenes(indice);

// Cambia de imagen cuando se presionan las flechas
function cambiarImagen(n) {
    mostrarImagenes(indice += n);
}

// Mostrar imagen actual
function mostrarImagenes(n) {
    let i;
    let items = document.getElementsByClassName("carrusel-item");

    if (n >= items.length) { indice = 0 }
    if (n < 0) { indice = items.length - 1 }

    for (i = 0; i < items.length; i++) {
        items[i].style.display = "none";
        items[i].classList.remove("active");
    }

    items[indice].style.display = "block";
    items[indice].classList.add("active");
}

