// State variables to keep track of calculator's current state
let firstOperand = null;
let secondOperand = null;
let currentOperator = null;
let displayValue = '0';
let shouldResetDisplay = false;

// DOM element selections
const display = document.querySelector('input');
const buttons = document.querySelectorAll('.number-keys button, #decimal');
const operatorButtons = document.querySelectorAll('#plus, #subtract, #multiply, #divide, #modulo');
const equalButton = document.querySelector('#equal');
const clearButton = document.querySelector('#all-clear');
const backspaceButton = document.querySelector('#backspace');

// function to update calculator's display
// This is separated into its own function for easy maintenance and to avoid repetition
function updateDisplay() {
    display.value = displayValue;
}

// function to append a number to the display
// this handles both initial input and appending to existing numbers
function appendNumber(number) {
    if(shouldResetDisplay){
        // if we should reset the display (e.g. after an operation), replace the current value
        displayValue = number;
        shouldResetDisplay = false;
    } else {
        // otherwise, append the number, replacing 0 if it's the only digit
        displayValue = displayValue === '0' ? number : displayValue + number;
    }
    updateDisplay();
}

// function to handle decimal point input
// this ensures only one decimal point can be added to a number
function appendDecimal() {
    if(shouldResetDisplay) {
        // if we're starting a new number, begin with '0.'
        displayValue = '0.';
        shouldResetDisplay = false;
    } else if (!displayValue.includes('.')) {
        // only add a decimal if one doesn't already exist
        displayValue += '.';
    }
    updateDisplay();
}

// function to set the current operator 
// this also handles chaining of operations
function setOperator(operator) {
    if(currentOperator !== null) evaluate(); // if there's a pending operation, evaluate it first
    firstOperand = parseFloat(displayValue); 
    currentOperator = operator;
    shouldResetDisplay = true; // prepare to input the second operand
}


// function to perform calculation 
// this is called when '=' is pressed or when chaining operations
function evaluate() {
    if(currentOperator === null || shouldResetDisplay) return; // do nothing if there's no operation to perform
    secondOperand = parseFloat(displayValue); // set the second operand to the current display value
    let result;
    switch(currentOperator) {
        case '+':
            result = firstOperand + secondOperand;
            break;
        case '-':
            result = firstOperand - secondOperand;
            break;
        case '*':
            result = firstOperand * secondOperand;
            break;
        case '/':
            if(secondOperand === 0) {
                // handling division by zero
                displayValue = 'Error: Division by zero';
                updateDisplay();
                return;
            }
            result = firstOperand / secondOperand;
            break;
        case '%':
            result = firstOperand % secondOperand;
            break;
    }
    displayValue = roundResult(result).toString(); // Round and convert the result to a string
    currentOperator = null; 
    shouldResetDisplay = true;
    updateDisplay();
}


// function to round the result to avoid floating point precision issues
// This rounds to 10 decimal places
function roundResult(number) {
    return Math.round(number * 1e10) / 1e10; // 1e10 - scientific notation for 10^10
}

// function to clear all calculator state
// this resets the calculator to its initial state
function clear() {
    displayValue = '0';
    firstOperand = null;
    secondOperand = null;
    currentOperator = null;
    shouldResetDisplay = false;
    updateDisplay();
}


// function to handle backspace operation
// this removes the last character from the display
function backspace() {
    if(shouldResetDisplay) return; // do nothing if we're about to reset the display anyway

    displayValue = displayValue.slice(0, -1); // remove the last character;

    if(displayValue === '')
    {
        displayValue = '0';
    }
    updateDisplay();
}


// Event listeners for number and decimal buttons
buttons.forEach(button => {
    if(button.id === 'decimal') {
        button.addEventListener('click', appendDecimal);
    }
    else 
    {
        button.addEventListener('click', () => appendNumber(button.textContent));
    }
});

// Event listeners for operator buttons
operatorButtons.forEach(button => {
    button.addEventListener('click', () => setOperator(button.textContent));
});

// event listeners for other buttons
equalButton.addEventListener('click', evaluate);
clearButton.addEventListener('click', clear);
backspaceButton.addEventListener('click', backspace);

// keyboard support
// This allows users to use their keyboard for input, improving accessibility and user experience
document.addEventListener('keydown', (event) => {
    if(event.key >= '0' && event.key <= '9') appendNumber(event.key);
    if(event.key === '.') appendDecimal();
    if(event.key === '+' || event.key === '-' || event.key === '*' || event.key === '/' || event.key === '%') setOperator(event.key);
    if(event.key === 'Enter' || event.key === '=') evaluate();
    if(event.key === 'Escape') clear();
    if(event.key === 'Backspace') backspace();
});

// initialize the display
updateDisplay();