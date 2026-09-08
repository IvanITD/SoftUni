function OperationsBetweenNumbers(N1, N2, operator) {
    // Variable for later use
    let total;
    let even_odd;
    
    // Check what type of operation are dealing with
    switch (operator) {
        case "+":
            total = N1 + N2;

            // Check if the its even or odd
            if (total % 2 === 0) {
                even_odd = "even";
            }
            else {
                even_odd = "odd";
            }

            // Print the Result to the console
            console.log(`${N1} ${operator} ${N2} = ${total} - ${even_odd}`);
            break;
        case "-":
            total = N1- N2;

            // Check if the its even or odd
            if (total % 2 === 0) {
                even_odd = "even";
            }
            else {
                even_odd = "odd";
            }

            // Print the Result to the console
            console.log(`${N1} ${operator} ${N2} = ${total} - ${even_odd}`);
            break;
        case "*":
            total = N1 * N2;

            // Check if the its even or odd
            if (total % 2 === 0) {
                even_odd = "even";
            }
            else {
                even_odd = "odd";
            }

            // Print the Result to the console
            console.log(`${N1} ${operator} ${N2} = ${total} - ${even_odd}`);
            break;
        case "/":
            // Check if N1 or N2 have zeroes
            if (N2 == 0) {
                console.log(`Cannot divide ${N1} by zero`);
                break;
            }
            else {
                total = N1 / N2;
            }

            // Print the Result to the console
            console.log(`${N1} / ${N2} = ${total.toFixed(2)}`);
            break;
        case "%":
            // Check if N1 or N2 have zeroes
            if (N2 == 0) {
                console.log(`Cannot divide ${N1} by zero`);
                break;
            }
            else {
                total = N1 % N2;
            }

            // Print the Result to the console
            console.log(`${N1} % ${N2} = ${total}`);
            break;
    }
}

OperationsBetweenNumbers(10, 12, "+");
OperationsBetweenNumbers(123, 12, "/");
OperationsBetweenNumbers(112, 0, "/");
OperationsBetweenNumbers(10, 1, "-");
OperationsBetweenNumbers(10, 3, "%");
OperationsBetweenNumbers(10, 0, "%");
OperationsBetweenNumbers(7, 3, "*");