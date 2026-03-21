function Moving(array) {
    // Take the user inputs from the array
    let width = parseInt(array[0]);
    let length = parseInt(array[1]);
    let height = parseInt(array[2]);

    // Create an index that will count the while loop
    let index = 3;

    // Calculating the total volume of the box
    let totalVolume = width * length * height;

    // While loop to check if there is any space left
    while (totalVolume > 0) {
        // Take the user input from the Array
        let command = array[index];
        index++;

        // If the command is "Done" or the total volume is less than 0, break the loop
        if (command == "Done" || totalVolume <= 0) {
            // Printing the message
            console.log(`${totalVolume} Cubic meters left.`);
            break;
        }
        // Parsing the command to an integer
        let boxes = parseInt(command);

        // Substracting the boxes from the total volume
        totalVolume -= boxes;

        // If the total volume is less than 0, print the message and break the loop
        if (totalVolume <= 0) {
            // Print the message
            console.log(`No more free space! You need ${Math.abs(totalVolume)} Cubic meters more.`);
            break;
        }
    }
}

Moving(["10", "10", "2", "20", "20", "20", "20", "122"]);
Moving(["10", "1", "2", "4", "6", "Done"]);