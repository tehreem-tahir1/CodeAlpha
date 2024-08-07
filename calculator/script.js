// Get the input box element
let input = document.getElementById('inputBox');

// Select all button elements
let buttons = document.querySelectorAll('button');

// Initialize a variable to store input
let expression = "";

// Convert buttons NodeList to an array
let buttonArray = Array.from(buttons);

// Attach a click event listener to each button
buttonArray.forEach(button => {
    button.addEventListener('click', (event) => {
        let buttonValue = event.target.innerHTML.trim(); // Trim any whitespace

        switch (buttonValue) {
            // If the "=" button is clicked, evaluate the expression
            case '=':
                try {
                    // Calculate and display the result
                    expression = eval(expression);
                    input.value = expression;
                } catch (error) {
                    // Handle any errors in the expression
                    input.value = "Error!";
                    expression = "";
                }
                break;

            // If the "AC" button is clicked, clear the input
            case 'AC':
                expression = "";
                input.value = expression;
                break;

            // If the "DEL" button is clicked, remove the last character
            case 'DEL':
                expression = expression.slice(0, -1);
                input.value = expression;
                break;

            // If the "^2" button is clicked, square the current expression
            case '^2':
                try {
                    // Parse the current expression as a number
                    let number = eval(expression);
                    // Square the number and update the expression
                    expression = Math.pow(number, 2).toString();
                    input.value = expression;
                } catch (error) {
                    // Handle any errors when parsing or squaring
                    input.value = "Error!";
                    expression = "";
                }
                break;

            // If the "√" button is clicked, calculate the square root of the current expression
            case '√':
                try {
                    // Parse the current expression as a number
                    let number = eval(expression);
                    if (number < 0) {
                        // If the number is negative, display an error
                        input.value = "Error!";
                        expression = "";
                    } else {
                        // Calculate the square root and update the expression
                        expression = Math.sqrt(number).toString();
                        input.value = expression;
                    }
                } catch (error) {
                    // Handle any errors when parsing or calculating the square root
                    input.value = "Error!";
                    expression = "";
                }
                break;

            // For any other button, append the character to the expression
            default:
                expression += buttonValue;
                input.value = expression;
                break;
        }
    });
});
