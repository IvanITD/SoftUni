function simpleCalculator(number1, number2, operator) {
    let operations = {
        "add": (number1, number2) => number1 + number2,

        "subtract": (number1, number2) => number1 - number2,

        "multiply": (number1, number2) => number1 * number2,

        "divide": (number1, number2) => number1 / number2,
    }

    console.log(operations[operator](number1, number2));
}

simpleCalculator(5, 5, 'multiply');
simpleCalculator(40, 8, 'divide');
simpleCalculator(12, 19, 'add');
simpleCalculator(50, 13, 'substract');


