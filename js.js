document.addEventListener('DOMContentLoaded', function(){ // Espera a que el documento HTML esté completamente cargado y listo
    iniciarApp();
});

function iniciarApp(){
    mostrarRespuestas();
    carousel();
}

function mostrarRespuestas(){
    const preguntas = document.querySelectorAll(".pregunta");

    preguntas.forEach((pregunta) => {
        pregunta.addEventListener("click", function(){
            this.classList.toggle('activa');
            const respuesta = this.nextElementSibling;
            respuesta.classList.toggle("activa");
        });
    });
}

function carousel() {
    // Inicializar Swiper
    const swiper = new Swiper('.swiper-container', {
        loop: true, // Desactivar el carrusel infinito si no quieres que vuelva al inicio
        slidesPerView: 'auto',
        spaceBetween: 0,
        autoplay: false, // Desactivar el avance automático
        slidesPerGroup: 3, // Avanzar 3 slides por clic
        navigation: {
            nextEl: '.next-slide', // Botón de siguiente
            prevEl: '.prev-slide', // Botón de anterior
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true, // Permite hacer clic en los puntos de la paginación
        },
    });
}
