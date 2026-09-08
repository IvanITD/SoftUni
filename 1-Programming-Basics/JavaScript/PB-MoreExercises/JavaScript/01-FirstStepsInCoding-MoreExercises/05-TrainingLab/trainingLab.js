function TrainingLab(width, height) {
    // Turning meters to centimeters
    let widthCm = parseFloat(width * 100);
    let heightCm = parseFloat(height * 100);

    // Now I need to remove the 100 cm for the corridor
    heightCm -= 100;

    // Amount of desks in a row (by width) and amount of rows (by height)
    let desksPerRow = parseInt(heightCm / 70);
    let rows = parseInt(widthCm / 120);

    // Total amount of desks
    let totalDesks = parseInt(desksPerRow * rows);

    // Removing three desks for the teacher's desk and the front door
    totalDesks -= 3;

    // Print the result to the console
    console.log(totalDesks);
}

TrainingLab(15, 8.9);
TrainingLab(8.4, 5.2);