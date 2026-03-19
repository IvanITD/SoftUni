function Histogram(number) {
    // Create a variable for later use
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;
    
    // Create a variable that will keep the first number and decide how many numbers are going to be read
    let numAmount = number[0];

    // Create a loop to go through the numbers
    for (let i = 1; i < number.length; i++) {
        // Check which range number[i] falls into
        if (number[i] < 200) {
            p1++;
        }
        else if (number[i] < 400) {
            p2++;
        }
        else if (number[i] < 600) {
            p3++;
        }
        else if (number[i] < 800) {
            p4++;
        }
        else if (number[i] >= 800) {
            p5++;
        }
    }

    // Calculations
    let result1 = (p1 / numAmount) * 100;
    let result2 = (p2 / numAmount) * 100;
    let result3 = (p3 / numAmount) * 100;
    let result4 = (p4 / numAmount) * 100;
    let result5 = (p5 / numAmount) * 100;

    // Print the result to the console
    console.log(`${result1.toFixed(2)}%`);
    console.log(`${result2.toFixed(2)}%`);
    console.log(`${result3.toFixed(2)}%`);
    console.log(`${result4.toFixed(2)}%`);
    console.log(`${result5.toFixed(2)}%`);
}

Histogram([3, 1, 2, 999]);
Histogram([7, 800, 801, 250, 199, 399, 599, 799]);
Histogram([9, 367, 99, 200, 799, 999, 333, 555, 111, 9]);
Histogram([14, 53, 7, 56, 180, 450, 920, 12, 7, 150, 250, 680, 2, 600, 200]);