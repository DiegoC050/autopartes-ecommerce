// Contacto

const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value,
            date: new Date().toISOString()
        };
        
        // Guardar mensaje de contacto
        let messages = JSON.parse(localStorage.getItem('contactMessages')) || [];
        messages.push(formData);
        localStorage.setItem('contactMessages', JSON.stringify(messages));
        
        // Mostrar mensaje de éxito
        const formMessage = document.getElementById('formMessage');
        formMessage.innerHTML = '<div class="alert alert-success" style="margin-top: 20px;">¡Gracias por tu mensaje! Nos pondremos en contacto pronto.</div>';
        
        // Limpiar formulario
        contactForm.reset();
        
        // Ocultar mensaje después de 5 segundos
        setTimeout(() => {
            formMessage.innerHTML = '';
        }, 5000);
    });
}