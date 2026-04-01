function TrapeziodArea(b1, b2, h) {
    // Calculate the area of the trapezoid
    let area = parseFloat((b1 + b2) * h / 2);

    // Print the are to the console
    console.log(`${area.toFixed(2)}`);
}

TrapeziodArea(8, 13, 7);