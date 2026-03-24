function NumbersInRange(number) {
    // Check if the number is in range
    if (number >= -100 && number <= 100 && number !== 0) {
        console.log("Yes");
    }
    else {
        console.log("No");
    }
}

NumbersInRange(-25);
NumbersInRange(0);
NumbersInRange(25);