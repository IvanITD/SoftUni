function SpecialNumbers(n) {
    // Create a variable for later use
    let result = "";

    for (let number = 1111; number <= 9999; number++) {
        let isSpecial = true;

        let currentNumber = number;

        while (currentNumber > 0) {
            let digit = currentNumber % 10; // Get the last digit

            if (digit == 0 || n % digit != 0) {
                isSpecial = false;
                break; // Exit the loop early if any digit doesn't divide N
            }

            currentNumber = Math.floor(currentNumber /= 10); // Remove the last digit
        }

        if (isSpecial) {
                result += number + " ";
            }
    }
    console.log(result.trim());
}

SpecialNumbers(3);
SpecialNumbers(11);
SpecialNumbers(16);