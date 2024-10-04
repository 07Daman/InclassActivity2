// Simple calculator function
function calculator(num1, num2, operator) {
    switch (operator) {
        case "+": // Addition
            return num1 + num2; 
        case "-": // Subtraction
            return num1 - num2; 
        case "*": // Multiplication
            return num1 * num2; 
        case "/": // Division
            if (num2 === 0) { // Check for division by zero
                return "Error: Division by zero is not allowed."; 
            }
            return num1 / num2; 
        default: // Invalid operator
            return "Invalid operator"; 
    }
}

// Testing the function
console.log(calculator(5, 5, '+')); // 10
console.log(calculator(5, 4, '-')); // 1
console.log(calculator(5, 5, '*')); // 25
console.log(calculator(5, 5, '/')); // 1
console.log(calculator(5, 2, '&')); // "Invalid operator"
