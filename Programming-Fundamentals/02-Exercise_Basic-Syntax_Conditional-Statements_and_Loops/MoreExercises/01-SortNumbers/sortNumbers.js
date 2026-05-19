function SortNumbers(num1, num2, num3) {
    // Sum the three numbers
    let sum = num1 + num2 + num3;
    
    // Find the maximum and minimum numbers
    let maxNumber = Math.max(num1, num2, num3);
    let minNumber = Math.min(num1, num2, num3);

    // Find the middle number by substracting the max and min numbers from the sum
    let middleNumber = sum - maxNumber - minNumber;

    // Print the result to the console
    console.log(maxNumber);
    console.log(middleNumber);
    console.log(minNumber);
}

SortNumbers(2, 1, 3);
SortNumbers(-2, 1, 3);
SortNumbers(0, 0, 2);