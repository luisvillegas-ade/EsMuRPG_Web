document.addEventListener('DOMContentLoaded', () => {
    
    // Mobile Menu Logic
    const menuBtn = document.getElementById('mobile-menu-btn');
    const closeBtn = document.getElementById('close-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    function toggleMenu() {
        mobileMenu.classList.toggle('hidden');
        if (!mobileMenu.classList.contains('hidden')) {
            // Prevent scrolling when menu is open
            document.body.style.overflow = 'hidden';
            mobileMenu.style.opacity = '1';
        } else {
            document.body.style.overflow = '';
            mobileMenu.style.opacity = '0';
        }
    }

    menuBtn.addEventListener('click', toggleMenu);
    closeBtn.addEventListener('click', toggleMenu);

    // Scroll Reveal Animation
    const revealElements = document.querySelectorAll('.scroll-reveal');

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: Stop observing once revealed
                // revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    });

    revealElements.forEach(el => revealObserver.observe(el));

    // Staggered animation for grid items on load if they are already in view
    // (Simple check if page is loaded at top)
    if (window.scrollY < 100) {
        revealElements.forEach((el, index) => {
            setTimeout(() => {
                el.classList.add('visible');
            }, 300 + (index * 200)); // Stagger delay
        });
    }
});
