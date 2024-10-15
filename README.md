# JavaScript Calculator Project

 Live Preview - https://sharwari19.github.io/Calculator/

### Overview

This project is a simple yet functional calculator implemented in JavaScript. It provides basic arithmetic operations and includes features like chaining operations, keyboard support, and error handling.

### Features

* Basic arithmetic operations: addition, subtraction, multiplication, division, and modulo
* Decimal point support
* Chaining of operations
* Keyboard support for improved accessibility
* Error handling (e.g., division by zero)
* Backspace functionality for input correction
* Clear function to reset the calculator
* Responsive design (assuming CSS is properly implemented)


## Project Structure

The project consists of three main files:

1. index.html: The HTML structure of the calculator
2. styles.css: The CSS file for styling the calculator
3. calculator.js: The JavaScript file containing the calculator's logic

### Setup

1. Clone the repository or download the project files.
2. Open the index.html file in a web browser.

No additional setup or dependencies are required as this is a client-side JavaScript project.

### Usage

#### Using the GUI

* Click on the number buttons to input numbers.
* Click on the operator buttons (+, -, *, /, %) to choose an operation.
* Click the equals (=) button to see the result.
* Use the decimal (.) button to input decimal numbers.
* The AC button clears all input and resets the calculator.
* The backspace (←) button removes the last entered character.

#### Using the Keyboard

The calculator also supports keyboard input:

* Numbers 0-9: Input numbers
* +, -, *, /: Operators
* %: Modulo
* .: Decimal point
* Enter or =: Evaluate the expression
* Backspace: Remove the last character
* Escape: Clear all (same as AC button)

### Implementation Details

* The calculator uses a state-based approach to keep track of operations and operands.
* It handles floating-point precision issues by rounding results to 10 decimal places.
* The display is treated as the source of truth for the current input.
* Operations are chained by evaluating the previous operation before starting a new one.

### Contributing

Contributions to improve the calculator are welcome. Please feel free to submit a pull request or open an issue to discuss potential changes/additions.

