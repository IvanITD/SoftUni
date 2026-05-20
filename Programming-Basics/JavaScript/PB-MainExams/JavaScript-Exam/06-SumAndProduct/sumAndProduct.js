function SumAndProduct(number) {
    // Go through the loop
    for (let a = 1; a <= 9; a++) {
        for (let b = 9; b > a; b--) {
            for (let c = 0; c <= 9; c++) {
                for (let d = 9; d > c; d--) {
                    // Create the number as a string
                    let abcd = `${a}${b}${c}${d}`;
                    let dcba = `${d}${c}${b}${a}`;

                    // Calculate the sum and product
                    let sum = a + b + c + d;
                    let product = a * b * c * d;

                    // Check whether Sum is equal to the product and number ends with 5
                    if (sum === product && number % 10 === 5) {
                        // Print the result to the console
                        console.log(abcd);
                        return; // Stop at the first matching combination
                    }

                    // The task expects integer division behavior
                    if (Math.floor(product / sum) === 3 && number % 3 === 0) {
                        // Print the result to the console
                        console.log(dcba);
                        return; // Stop at the first matching combination
                    }
                }
            }
        }
    }

    console.log("Nothing found");
}

SumAndProduct(123);
SumAndProduct(145);
SumAndProduct(214);