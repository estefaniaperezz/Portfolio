let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

// Evento scroll para resaltar el enlace activo en el menú
window.onscroll = function() {
    let scrollPosition = window.scrollY;

    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let secHeight = sec.offsetHeight; // Altura de la sección

        if (scrollPosition >= offset && scrollPosition < offset + secHeight) {
            // Remover la clase 'active' de todos los enlaces de navegación
            navLinks.forEach(link => {
                link.classList.remove('active');
            });

            // Agregar la clase 'active' al enlace de navegación correspondiente
            let id = sec.getAttribute('id');
            document.querySelector(`header nav a[data-nav=${id}]`).classList.add('active');
        }
    });
};

// Evento click para el icono de menú
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

function handleFormSubmission(event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente

    // Realiza una acción adicional si es necesario antes de enviar (opcional)

    // Simula un tiempo de espera antes de redirigir (opcional)
    setTimeout(function() {
        // Redirige a la página de agradecimiento o a cualquier página deseada
        window.location.href = "";
    }, 1000); // Espera 1 segundo (1000 milisegundos) antes de redirigir, ajusta según necesites

    return false; // Evita el envío del formulario por defecto
}