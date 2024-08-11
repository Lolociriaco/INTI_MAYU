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
