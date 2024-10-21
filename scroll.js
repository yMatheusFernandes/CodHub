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

   // Seleciona os elementos do DOM
   const heroItem1 = document.querySelector('.hero-item');
   const heroItem2 = document.querySelector('.hero-item2');
   const macWindowContent = document.querySelector('.mac-window-content');
   
   let typingTimeout;  // Variável para armazenar o timeout da animação de digitação

   // Função que simula o efeito de digitação
   function typeWriterEffect(text, element) {
       clearTimeout(typingTimeout); // Limpa qualquer digitação anterior
       
       element.innerHTML = ''; // Limpa o conteúdo antes de começar a digitar
       let index = 0;

       // Função interna para adicionar letras uma por uma
       function type() {
           if (index < text.length) {
               element.innerHTML += text.charAt(index); // Adiciona a próxima letra
               index++;
               typingTimeout = setTimeout(type, 10); // Controla a velocidade de digitação (50ms por letra)
           }
       }
       
       type();
   }

   // Função para exibir texto quando o hero-item 1 for clicado
   heroItem1.addEventListener('click', () => {
       const text = "Oi, eu sou o Brenno. Tenho conhecimento em HTML, CSS e JavaScript, e me especializo em criar páginas web interativas e bem estruturadas. Gosto de transformar designs em interfaces funcionais e garantir que as experiências dos usuários sejam fluidas e intuitivas.";
       typeWriterEffect(text, macWindowContent);
   });

   // Função para exibir texto quando o hero-item 2 for clicado
   heroItem2.addEventListener('click', () => {
       const text = "Meu nome é Matheus e sou desenvolvedor backend com experiência em várias tecnologias, incluindo JavaScript, HTML, CSS e Node.js. Tenho um forte foco no desenvolvimento de soluções robustas e escaláveis para o lado do servidor, sempre buscando otimizar o desempenho e garantir a melhor experiência para os usuários";
       typeWriterEffect(text, macWindowContent);
   });

   document.addEventListener("DOMContentLoaded", function() {
    const cloud = document.querySelector('.cloud');
    const portfolioSection = document.querySelector('#portfolio');
    let isCloudVisible = false;  // To track cloud visibility

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !isCloudVisible) {
                // Section is visible, apply the fade-in class
                cloud.classList.remove('fade-out'); // Ensure the fade-out class is removed
                cloud.classList.add('fade-in');
                isCloudVisible = true; // Track the visibility state
            } else if (!entry.isIntersecting && isCloudVisible) {
                // Section is not visible, apply the fade-out class
                cloud.classList.remove('fade-in'); // Remove the fade-in class
                cloud.classList.add('fade-out');   // Add the fade-out class
                isCloudVisible = false;
            }
        });
    });

    // Start observing the portfolio section
    observer.observe(portfolioSection);
});







window.addEventListener('scroll', function() {
    const contatoSection = document.getElementById('contato');
    const nuvem = document.getElementById('nuvem');
  
    // Pega a posição da seção de contato em relação à viewport
    const contatoPosition = contatoSection.getBoundingClientRect();
  
    // Verifica se a seção de contato está visível na tela
    if (contatoPosition.top <= window.innerHeight && contatoPosition.bottom >= 0) {
      // Quando a seção de contato entra na tela, faz o fadeOut da nuvem
      nuvem.classList.add('fadeOutUp');
      nuvem.classList.remove('fadeInUp');
    }
  });
  