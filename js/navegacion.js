document.addEventListener('DOMContentLoaded',function(){
    scrollNav();
    alertasForm();
})

function scrollNav(){
    const navLinks = document.querySelectorAll('.home__nav a')

    navLinks.forEach(link => {
        link.addEventListener('click', e=>{
            e.preventDefault()
            const selectionScroll = e.target.getAttribute('href')
            const section = document.querySelector(selectionScroll)
            section.scrollIntoView({behavior:'smooth'})
        })
    })
}

function alertasForm(){
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        let isValid = true;

        const nombre = document.getElementById('nombre').value.trim();
        const email = document.getElementById('email').value.trim();
        const mensaje = document.getElementById('mensaje').value.trim();

        // Validación del nombre
        if (nombre === '') {
            document.getElementById('nombreError').classList.remove('hidden');
            isValid = false;
        } else {
            document.getElementById('nombreError').classList.add('hidden');
        }

        // Validación del email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email === '' || !emailPattern.test(email)) {
            document.getElementById('emailError').classList.remove('hidden');
            isValid = false;
        } else {
            document.getElementById('emailError').classList.add('hidden');
        }

        // Validación del mensaje
        if (mensaje === '') {
            document.getElementById('mensajeError').classList.remove('hidden');
            isValid = false;
        } else {
            document.getElementById('mensajeError').classList.add('hidden');
        }

        // Si no es válido, evitar el envío del formulario
        if (!isValid) {
            event.preventDefault();
        }
    });
}