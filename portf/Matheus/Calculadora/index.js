let firstnumber = '';
let lastnumber = '';
let operator = '';

const buttons = document.querySelectorAll(`.calculadora button`);
const resultDisplay = document.createElement('div');
document.querySelector('main').prepend(resultDisplay)

function updateDisplay(value) {
    resultDisplay.textContent = value;
}

function calculate(){
    let result = 0;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);
    
    if(isNaN(prev) || isNaN(current)) return;

    switch (operator){
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '&#215;':
            result = prev * current;
            break;
        case '&#247;':
            result = prev / current;
            break;
        default:
            return;
       }
       currentInput = result.toString();
       operator = '';
       previousInput = '';
       updateDisplay(currentInput);
}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const id = button.id;

        if(!isNaN(id) || id === 'decimal') {
            currentInput += id === 'decimal' ? '.' : id;
            updateDisplay(currentInput); 
        }
        else if(id === '+' || id === '-' || id === '&#215;' || id === '&#247;'){
            if (currentInput === '')return;
        operator = id;
        previousInput = currentInput;
        currentInput = '';
    }

        else if (id === 'equals'){
            calculate();
        }
    });
});
