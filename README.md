# JavaScript Calculator Project

### Project Overview

This project is a simple calculator built using HTML, CSS, and JavaScript. It performs basic mathematical operations like addition, subtraction, multiplication, and division. The calculator supports number input, operator selection, and evaluates the results upon clicking the equals (=) button. Additionally, the project incorporates several features to ensure a smooth user experience, including a clear button, a decimal point, error handling for invalid operations (e.g., division by zero), and support for keyboard input.

### Features

### Basic Functionalities

1. #### Addition, Subtraction, Multiplication, and Division:

* The calculator supports all basic arithmetic operations.
* Each operation consists of two numbers and an operator.

2. #### Operate Function:

* A central operate() function takes the selected operator and two numbers and performs the calculation by calling the respective arithmetic functions (add(), subtract(), multiply(), divide()).

3. #### Number and Operator Input:

* Buttons for digits (0-9) and basic math operators (+, -, *, /) allow users to input numbers and operations.

* When an operation is completed, the result is used as the first number for the next operation.

4. #### Display:

* A calculator screen shows the current input, intermediate results, and final output.

5. #### Clear Function:

* The Clear (C) button resets the calculator, allowing users to start a fresh calculation.

### Additional Features

1. #### Chaining Operations:

* The calculator automatically performs sequential operations. For example, if you input 12 + 7 - 5, it first calculates 12 + 7 = 19 and then evaluates 19 - 5 = 14.

2. #### Decimal Input:

* Users can enter floating-point numbers using the decimal (.) button, ensuring no more than one decimal point is included in a number.

3. #### Error Handling:

* Division by zero is handled with an error message (e.g., "Cannot divide by 0") without crashing the calculator.

4. #### Rounding Results:

* Long decimal numbers are rounded to fit within the display, ensuring a clean UI.

5. #### Backspace:

* A backspace button allows users to remove the last digit or operator entered.

6. #### Keyboard Support:

* The calculator can also be controlled via the keyboard, where:

    * Digits 0-9 and the decimal . are recognized.
    * Operators (+, -, *, /, =) work as they would   with button clicks.
    * Backspace erases the last input, and Escape clears the display.


### Gotchas/Bugs Handled

* The calculator ensures only one pair of numbers and an operator is processed at a time.
* Pressing the equals button without providing complete input (number, operator, number) is handled safely.
* The decimal button is disabled after a decimal point is entered for the current number.


## Installation and Usage

To use the calculator:

1. Clone or Download the repository to your local machine:

```

git clone https://github.com/yourusername/calculator.git

```

2. Open the index.html file in your browser.

3. Interact with the calculator using the on-screen buttons or your keyboard for input.

## Project Structure

```
.
├── index.html         # The HTML structure of the calculator
├── style.css          # CSS file to style the calculator interface
└── script.js          # JavaScript file containing the calculator logic

```

## Key JavaScript Functions

1. add(a, b): Returns the sum of a and b.

2. subtract(a, b): Returns the difference between a and b.

3. multiply(a, b): Returns the product of a and b.

4. divide(a, b): Returns the result of dividing a by 
b. Returns an error message if b is 0.

5. operate(operator, num1, num2): Takes an operator and two numbers, calling the respective function based on the operator.

6. populateDisplay(): Updates the calculator display when a number or operator is pressed.

7. clearCalculator(): Resets the calculator's state.
