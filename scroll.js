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

    /////////////////////////////////////////////////////////////////////////////////////////////////

    heroItem2.addEventListener('click', () => {
        macWindowContent.innerHTML = `

        <ul>
        <br>
          <li><a href="CodeHub/portf/Matheus/Calculadora/index.html" target="_blank">Calculadora funcional com JavaScript</a></li><br>
          <li><a href="/portf/Matheus/index.html" target="_blank">Coming soon...</a></li><br>
          <li><a href="#" target="_blank">Coming soon...</a></li><br>
          <li><a href="#" target="_blank">Coming soon...</a></li><br>
        </ul>`;

    });

    

    