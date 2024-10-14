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
function updateDisplay(){
    display.value = displayValue;
}

// function to append a number to the display
// this handles both initial input and appending to existing numbers
function appendNumber(number){
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

