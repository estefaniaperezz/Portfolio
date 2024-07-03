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