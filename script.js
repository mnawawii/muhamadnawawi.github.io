document.addEventListener('DOMContentLoaded', function () {
    // Script untuk Navigasi Smooth Scrolling dengan offset
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('nav a[href^="#"], a.bg-emerald-600[href^="#"], #mobile-menu a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const navbarHeight = navbar.offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
             // Tutup menu mobile setelah diklik
            const mobileMenu = document.getElementById('mobile-menu');
            if(mobileMenu.classList.contains('hidden') === false){
                mobileMenu.classList.add('hidden');
            }
        });
    });

    // Script untuk Modal
    const openModalButtons = document.querySelectorAll('.open-modal-button');
    const closeModalButtons = document.querySelectorAll('.close-modal-button');
    const modals = document.querySelectorAll('.modal');

    openModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modalId = button.getAttribute('data-modal-target');
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.classList.remove('hidden');
                setTimeout(() => {
                    modal.classList.remove('opacity-0');
                    modal.querySelector('.modal-content').classList.remove('scale-95');
                }, 10);
                document.body.style.overflow = 'hidden'; // Mencegah scroll di background
            }
        });
    });

    const closeModal = (modal) => {
        if (!modal) return;
        modal.classList.add('opacity-0');
        modal.querySelector('.modal-content').classList.add('scale-95');
        setTimeout(() => {
            modal.classList.add('hidden');
            // Hanya kembalikan scroll jika tidak ada modal lain yang terbuka
            const anyModalOpen = document.querySelector('.modal:not(.hidden)');
            if (!anyModalOpen) {
                document.body.style.overflow = 'auto';
            }
        }, 300);
    };

    closeModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modal = button.closest('.modal');
            closeModal(modal);
        });
    });

    modals.forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal(modal);
            }
        });
    });
    
    // Menutup modal dengan tombol Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === "Escape") {
            const openModal = document.querySelector('.modal:not(.hidden)');
            closeModal(openModal);
        }
    });

    // Script untuk Menu Mobile
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
});
