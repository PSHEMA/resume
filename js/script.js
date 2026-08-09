// Mobile menu toggle
const menuBtn = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => mobileMenu.classList.toggle('open'));

mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mobileMenu.classList.remove('open')));

// Contact form -> EmailJS
// Replace these three IDs with your own if you regenerate your EmailJS account.
const form = document.getElementById('contactForm');
const status = document.getElementById('form-status');

if (window.emailjs) {
    emailjs.init('g6IWWbNMJULo7mk0v');
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    status.textContent = 'sending…';
    status.style.color = 'var(--ink-dim)';

    const params = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };

    emailjs.send('service_yr51wa8', 'template_3gzqw1p', params)
        .then(() => {
            status.textContent = 'message sent — thanks, I\'ll reply soon.';
            status.style.color = '#5ED9A0';
            form.reset();
        })
        .catch((err) => {
            status.textContent = 'send failed — email me directly instead.';
            status.style.color = '#E37B7B';
            console.error(err);
        });
});