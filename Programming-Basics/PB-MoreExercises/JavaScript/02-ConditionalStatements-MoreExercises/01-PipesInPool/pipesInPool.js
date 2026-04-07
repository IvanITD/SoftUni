function PipesInPool(v, p1, p2, h) {
    // For curtain amount of hours
    let p1H = parseFloat(p1 * h);
    let p2H = parseFloat(p2 * h);

    // Total pipe hours
    let totalPipeLiters = parseFloat(p1H + p2H);

    // Total pipe percentage
    let totalPoolPercentage = parseFloat((totalPipeLiters / v) * 100);

    // Percentage of each pipe
    let p1Percentage = (p1H / totalPipeLiters) * 100;
    let p2Percentage = (p2H / totalPipeLiters) * 100;

    // Overflow
    if (totalPipeLiters > v) {
        // Print the result to the console
        console.log(`For ${h} hours the pool overflows with ${totalPipeLiters - v} liters.`);
    }
    else {
        // Print the result to the console
        console.log(`The pool is ${totalPoolPercentage.toFixed(2)}% full Pipe 1: ${p1Percentage.toFixed(2)}%. Pipe 2: ${p2Percentage.toFixed(2)}%.`);
    }
}

PipesInPool(1000, 100, 120, 3);
PipesInPool(100, 100, 100, 2.5);