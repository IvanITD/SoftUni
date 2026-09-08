function CircleAreaAndPerimeter(r) {
    // Calculate the area and perimeter of a circle
    let area = parseFloat(Math.PI * r * r);
    let perimeter = parseFloat(2 * Math.PI * r);

    // Print the results to the console
    console.log(`${area.toFixed(2)}`);
    console.log(`${perimeter.toFixed(2)}`);
}

CircleAreaAndPerimeter(3);
CircleAreaAndPerimeter(4.5);