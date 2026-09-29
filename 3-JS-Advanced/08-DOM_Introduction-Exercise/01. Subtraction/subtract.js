function subtract() {
    // Get the values of the input fields
    let firstNumberAsString = document.getElementById('firstNumber').value;
    let secondNumberAsString = document.getElementById('secondNumber').value;

    // Convert the strings to numbers
    let firstNumber = Number(firstNumberAsString);
    let secondNumber = Number(secondNumberAsString);

    // Subtract the numbers
    let result = firstNumber - secondNumber;
    
    //  Display the result
    document.getElementById('result').textContent = result;
}