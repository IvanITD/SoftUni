function divisibleByThree() {
    // Creating a loop to print all the numbers from 1 to 100
    for (let i = 1; i <= 100; i++) {
        // Only divisible by 3
        if (i % 3 === 0) { 
            // Print to the console
            console.log(i);
        }
    }
}

divisibleByThree();