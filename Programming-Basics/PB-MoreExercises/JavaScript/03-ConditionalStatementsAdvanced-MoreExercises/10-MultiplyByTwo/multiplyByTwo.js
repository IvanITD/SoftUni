function MultiplyByTwo(array) {
    // Variable for later use
    let result = 0.0;
    let index = 0;

    while (true) {
        // Read input
        let input = parseFloat(array[index]);

        // Check if input is negative
        if (input < 0) {
            console.log("Negative number!");
            break;
        }
        else {
            // Multiply input by 2
            result = input * 2;
            console.log(`Result: ${result.toFixed(2)}`);
        }
        index++;
    }
}

MultiplyByTwo(["12", "43.2144", "12.3", "543.23", "-20"]);
MultiplyByTwo(["23.43", "12.3245", "0", "65.23432", "23", "65", "-12"]);
MultiplyByTwo([-123]);