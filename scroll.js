const sections = document.querySelectorAll('section'); 
let currentSectionIndex = 0; 

function scrollToSection(index) {
    sections[index].scrollIntoView({
        behavior: 'smooth'
    });
}

window.addEventListener('wheel', (event) => {
    if (event.deltaY > 0) {
        
        if (currentSectionIndex < sections.length - 1) {
            currentSectionIndex++;
            scrollToSection(currentSectionIndex);
        }
    } else {
        
        if (currentSectionIndex > 0) {
            currentSectionIndex--;
            scrollToSection(currentSectionIndex);
        }
    }
});

window.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowDown') {
        if (currentSectionIndex < sections.length - 1) {
            currentSectionIndex++;
            scrollToSection(currentSectionIndex);
        }
    } else if (event.key === 'ArrowUp') {
        if (currentSectionIndex > 0) {
            currentSectionIndex--;
            scrollToSection(currentSectionIndex);
        }
    }
});

    const heroItem1 = document.querySelector('.hero-item');
    const heroItem2 = document.querySelector('.hero-item2');
    const macWindowContent = document.querySelector('.mac-window-content');
    
    heroItem1.addEventListener('click', () => {
        macWindowContent.innerHTML = "<p>Texto exibido ao clicar no Brenno!</p>";
    });

    heroItem2.addEventListener('click', () => {
        macWindowContent.innerHTML = `<p><a href="portf/Matheus/Calculadora/index.html">calculadora funcional com js </a></p>`;
    });




// Seleciona todas as seções e o contêiner do indicador

const sectionIndicatorContainer = document.querySelector('#section-indicator');

// Cria os pontos do indicador dinamicamente com base no número de seções
sections.forEach((section, index) => {
    const span = document.createElement('span');
    span.setAttribute('data-section', index);
    span.textContent = '•';  // Usamos ponto como marcador
    sectionIndicatorContainer.appendChild(span);
});

// Seleciona todos os spans do indicador agora que foram criados
const indicatorSpans = document.querySelectorAll('#section-indicator span');

// Função para rolar até a seção correspondente ao clicar no ponto
indicatorSpans.forEach((span, index) => {
    span.addEventListener('click', () => {
        sections[index].scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Cria o Intersection Observer para observar as seções
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const index = [...sections].indexOf(entry.target);

            // Atualiza o indicador lateral
            indicatorSpans.forEach(span => span.classList.remove('active'));
            indicatorSpans[index].classList.add('active');
        }
    });
}, {
    rootMargin: '0px 0px -80% 0px',  // Detecta quando 20% da seção entra na viewport
    threshold: 0.2                   // 20% da seção precisa estar visível
});

// Observa todas as seções
sections.forEach(section => observer.observe(section));