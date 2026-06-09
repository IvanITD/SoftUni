function simpleCalculator(number1, number2, operator) {
    switch (operator) {
        case "add":
            let add = (number1, number2) => number1 + number2;
            console.log(add(number1, number2));
        break;

        case "subtract":
            let subtract = (number1, number2) => number1 - number2;
            console.log(subtract(number1, number2));
        break;

        case "multiply":
            let multiply = (number1, number2) => number1 * number2;
            console.log(multiply(number1, number2));
        break;

        case "divide":
            let divide = (number1, number2) => number1 / number2;
            console.log(divide(number1, number2));
        break;
        }
}

simpleCalculator(5, 5, 'multiply');
simpleCalculator(40, 8, 'divide');
simpleCalculator(12, 19, 'add');
simpleCalculator(50, 13, 'substract');


