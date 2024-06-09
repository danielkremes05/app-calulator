# Calculator App Documentation
Overview
- This documentation provides an overview of a basic calculator app built using React. 
- The application allows users to perform basic arithmetic operations such as addition, subtraction, multiplication, and division. 
- It features a simple user interface with numeric buttons, operation buttons, a clear button, and an equals button.

# Project Structure
## The project consists of the following main components:

 ## App.js: 
 - The main application component that handles the state and logic of the calculator.

## Button.js: 
- A reusable button component.
## Input.js: 
-- A component to display the current input and result.

## styles.js: 
-- Styled-components for styling the calculator.

# Components
## App.js
- The App component manages the state and logic of the calculator. 
- It uses React hooks to manage the current number, the operation, the previous number, and a flag to indicate if a new number is being entered.

## State Variables
- numberCurrently: Stores the current number as a string.
- operation: Stores the current operation (+, -, *, /).

- previousNumber: Stores the previous number as a string.
- isNewNumber: A flag to indicate if a new number is being entered.

## Functions
- handleClear(): Resets all state variables to their initial values.

- handleAddNumber(number): Updates the current number being entered.

- handleSetOperation(op): Sets the current operation and prepares for the next number input.

- handleEqual(): Performs the calculation based on the current operation and updates the display with the result.

- handleDecimal(): Adds a decimal point to the current number if one is not already present.

## Button.js
- The Button component renders a button and handles the click event. It takes the following props:

- label: The label to display on the button.
- onClick: The function to call when the button is clicked.

## Input.js
- The Input component displays the current input or result. It takes the following prop:

- value: The value to display in the input field.

## styles.js
- The styles.js file contains styled-components to style the calculator. It includes the following components:

## Container: 
- The main container for the calculator.

## Content: 
- The content area of the calculator.
- Row: A row to group buttons together.

# Usage
## To use the calculator, the user can:

- Enter numbers using the numeric buttons (0-9).
- Click on an operation button (+, -, *, /) to set the desired operation.
- Enter another number.
- Click the equals button (=) to perform the calculation and display the result.
- Click the clear button (C) to reset the calculator.
- The user can also use the decimal point button (.) to enter decimal numbers.

# Conclusion
- This basic calculator app demonstrates the fundamental concepts of React, including state management and component composition. It provides a simple and functional user interface for performing basic arithmetic operations.