function GrandpaStavri(array) {
    // Taking the input from the array
    let n = parseInt(array[0]); // Number of days
    let totalLiters = 0;
    let totalDegreesSum = 0;

    // Creating a variable called index for the loop
    let index = 1;
    for (let i = 0; i < n; i++) {
        // Get the liters and degrees from the array as an input
        let liters = parseFloat(array[index]);
        let degree = parseFloat(array[index + 1]);
        index += 2;

        // Add the liters to the total
        totalLiters += liters;

        // Get the total degrees
        totalDegreesSum += liters * degree;
    }

    // Calculate the Average degree
    let averageDegree = totalDegreesSum / totalLiters;

    // Print to the console
    console.log(`Liter: ${totalLiters.toFixed(2)}`);
    console.log(`Degrees: ${averageDegree.toFixed(2)}`);

    // Check what the degree of the rakia is
    if (averageDegree < 38) {
        console.log("Not good, you should baking!");
    }
    else if (averageDegree <= 42) {
        console.log("Super!");
    }
    else if (averageDegree > 42) {
        console.log("Dilution with distilled water!");
    }
}

GrandpaStavri(["3", "100", "45", "50", "55", "150", "36"]);
GrandpaStavri(["2", "200", "43", "200", "40"]);