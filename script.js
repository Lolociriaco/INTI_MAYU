abrirMenu = document.querySelector('.abrir_menu');
back = document.querySelector('.second-overlay');
cerrarMenu = document.querySelector('.cerrar_menu');
botonContactanos = document.querySelector('.button_contactanos');
nav = document.querySelector('#nav');

back.addEventListener("click", closeMenu); // Cerrar al hacer clic en el second-overlay
cerrarMenu.addEventListener("click", closeMenu)

abrirMenu.addEventListener("click", () => {
    cerrarMenu.classList.add('cerrar_menu_visible')
    abrirMenu.classList.add('abrir_menu_oculto')
    botonContactanos.classList.add('button-contactanos-visible')
    nav.classList.add("nav-visible")
    back.classList.add("second-overlay-visible")
})

function closeMenu() {
    cerrarMenu.classList.remove('cerrar_menu_visible')
    abrirMenu.classList.remove('abrir_menu_oculto')
    botonContactanos.classList.remove('button-contactanos-visible')
    nav.classList.remove("nav-visible")
    back.classList.remove("second-overlay-visible")
}

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




// -------- MODAL ----------


let slideIndex = 0;

function openModal(index) {
    document.getElementById("modal").style.display = "block";
    showSlide(index);
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

function showSlide(index) {
    const slides = document.getElementsByClassName("modal-slide");
    slideIndex = index;
    
    // Ocultar todas las imágenes
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    // Mostrar la imagen seleccionada
    slides[slideIndex].style.display = "block";
}

function changeSlide(step) {
    const slides = document.getElementsByClassName("modal-slide");
    slideIndex += step;
    
    // Asegurarse de que el índice está dentro de los límites
    if (slideIndex >= slides.length) slideIndex = 0;
    if (slideIndex < 0) slideIndex = slides.length - 1;
    
    showSlide(slideIndex);
}





///CARRUSEL 


let indice = 0;
mostrarImagenes(indice);

// Cambia de imagen cuando se presionan las flechas
function cambiarImagen(n) {
    mostrarImagenes(indice += n);
}

// Mostrar imagen actual
function mostrarImagenes(indice) {
    let i;
    let items = document.getElementsByClassName("carrusel-item");

    if (indice >= items.length) { indice = 0 }
    if (indice < 0) { indice = items.length - 1 }

    for (i = 0; i < items.length; i++) {
        items[i].style.display = "none";
        items[i].classList.remove("active");
    }

    items[indice].style.display = "block";
    items[indice].classList.add("active");
}