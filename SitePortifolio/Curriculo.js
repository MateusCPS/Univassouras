document.addEventListener('DOMContentLoaded', () => {
    const transition = document.querySelector('.transition');
    const carouselInner = document.querySelector('.carousel-inner');
    const sections = Array.from(document.querySelectorAll('.section'));
    const totalSections = sections.length;
    let currentIndex = 0;

    const updateCarousel = () => {
        // Atualiza o índice para o próximo ou anterior com rotação contínua
        const prevIndex = (currentIndex - 1 + totalSections) % totalSections;
        const nextIndex = (currentIndex + 1) % totalSections;

        // Ajusta a posição do carrossel para a seção atual
        carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;

        // Força a atualização do layout
        carouselInner.offsetWidth;

        // Aplica animações de entrada e saída
        sections.forEach((section, index) => {
            section.style.animation = 'none'; // Remove animação anterior
        });

        sections[prevIndex].style.animation = 'slideOut 1s forwards';
        sections[currentIndex].style.animation = 'slideIn 1s forwards';
    };

    const prevSection = () => {
        currentIndex = (currentIndex - 1 + totalSections) % totalSections;
        updateCarousel();
    };

    const nextSection = () => {
        currentIndex = (currentIndex + 1) % totalSections;
        updateCarousel();
    };

    document.querySelector('nav a[href="#prev"]').addEventListener('click', (event) => {
        event.preventDefault();
        prevSection();
    });

    document.querySelector('nav a[href="#next"]').addEventListener('click', (event) => {
        event.preventDefault();
        nextSection();
    });

    // Smooth scrolling for anchor links
    const smoothScroll = (event) => {
        event.preventDefault();
        const targetId = event.currentTarget.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            transition.classList.add('show');

            setTimeout(() => {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });

                setTimeout(() => {
                    transition.classList.remove('show');
                }, 500);
            }, 300);
        }
    };

    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', smoothScroll);
    });

    // Initialize the carousel by showing the first section
    updateCarousel();
});
