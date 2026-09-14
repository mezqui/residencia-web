document.addEventListener('DOMContentLoaded', () => {
    // 1. Menú Hamburguesa para Móviles
    const mobileToggle = document.getElementById('mobile-toggle');
    const navLinks = document.getElementById('nav-links');

    if (mobileToggle && navLinks) {
        mobileToggle.addEventListener('click', () => {
            navLinks.classList.toggle('show');
            mobileToggle.setAttribute('aria-expanded', navLinks.classList.contains('show'));
        });

        // Cerrar menú al hacer clic en un enlace
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('show');
                mobileToggle.setAttribute('aria-expanded', 'false');
            });
        });
    }

    // 2. Manejo del Formulario de Contacto (Simulado)
    const contactForm = document.getElementById('contactForm');
    const formFeedback = document.getElementById('formFeedback');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = document.getElementById('name').value.trim();

            // Simulación de respuesta inmediata
            formFeedback.style.color = '#52b788';
            formFeedback.textContent = `¡Gracias, ${name}! Hemos registrado tu solicitud de visita. Nos pondremos en contacto a la brevedad.`;

            // Resetear formulario
            contactForm.reset();

            // Borrar el mensaje luego de 6 segundos
            setTimeout(() => {
                formFeedback.textContent = '';
            }, 6000);
        });
    }

    const addressTrigger = document.getElementById('address-trigger');
    const addressModal = document.getElementById('address-modal');
    const addressModalClose = document.getElementById('address-modal-close');

    const closeAddressModal = () => {
        addressModal.hidden = true;
        document.body.classList.remove('modal-open');
    };

    if (addressTrigger && addressModal && addressModalClose) {
        addressTrigger.addEventListener('click', () => {
            addressModal.hidden = false;
            document.body.classList.add('modal-open');
            addressModalClose.focus();
        });

        addressModalClose.addEventListener('click', closeAddressModal);

        addressModal.addEventListener('click', (event) => {
            if (event.target === addressModal) {
                closeAddressModal();
            }
        });

        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape' && !addressModal.hidden) {
                closeAddressModal();
            }
        });
    }
});