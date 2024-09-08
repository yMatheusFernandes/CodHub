document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav ul li a");
    let currentSection = 0;
    let isScrolling = false;

    // Função para marcar o link da navegação atual
    function setActiveSection(sectionIndex) {
        // Remover classe 'active' de todos os links
        navLinks.forEach(link => link.classList.remove('active'));
        // Adicionar classe 'active' ao link correspondente
        navLinks[sectionIndex].classList.add('active');
    }

    // Função para verificar qual seção está visível
    function getCurrentSection() {
        sections.forEach((section, index) => {
            const sectionTop = section.getBoundingClientRect().top;
            const sectionHeight = section.offsetHeight;
            
            if (sectionTop <= window.innerHeight / 2 && sectionTop + sectionHeight > window.innerHeight / 2) {
                setActiveSection(index);
                currentSection = index;
            }
        });
    }

    // Detectar rolagem e realizar a navegação step-by-step
    window.addEventListener("wheel", (event) => {
        if (isScrolling) return;

        if (event.deltaY > 0) {
            // Rolar para baixo
            if (currentSection < sections.length - 1) {
                currentSection++;
                isScrolling = true;
                sections[currentSection].scrollIntoView({ behavior: "smooth" });
            }
        } else {
            // Rolar para cima
            if (currentSection > 0) {
                currentSection--;
                isScrolling = true;
                sections[currentSection].scrollIntoView({ behavior: "smooth" });
            }
        }

        setTimeout(() => {
            isScrolling = false;
            getCurrentSection(); // Atualizar a seção ativa
        }, 1000); // Tempo em milissegundos
    });

    // Chamar a função ao carregar a página
    getCurrentSection();

    // Também verificar em caso de resize da janela
    window.addEventListener("resize", getCurrentSection);
});
