function Rounding(roundedNumber, precision) {
    // Check if the precision is greater than 15
    if (precision > 15) {
        // Set the precision to 15 if it exceeds the limit
        precision = 15;
    }
    // round the number to the specified precision
    let result = roundedNumber.toFixed(precision);

    // Convert the string result to a number
    let roundedResult = parseFloat(result);
    
    // Print to the console
    console.log(roundedResult);
}

Rounding(3.1415926535897932384626433832795, 2);
Rounding(10.5,3);