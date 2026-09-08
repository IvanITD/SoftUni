function SumNumbers(array) {
    // Take the inputs from the array
    let totalAmount = parseInt(array[0]);
    
    // Variable for later use
    let totalSum = 0;
    
    // Create a variable for the index counter
    let index = 1;

    // Check if the totalSum is equal to the total amount
    while (totalSum < totalAmount) {
        totalSum += parseInt(array[index]);
        index++;
    }

    // Print the result to the console
    console.log(totalSum);
    
}

SumNumbers(["100", "10", "20", "30", "40"]);
SumNumbers(["20", "1", "2", "3", "4", "5", "6"]);