function Cake(array) {
    // Take the inputs from the array
    let width = parseInt(array[0]);
    let length = parseInt(array[1]);

    // Create a variable to circle while using the loop
    let index = 2;

    // Calculating the total pieces of the cake
    let totalPieces = width * length;

    // While loop to check if there is any cake left
    while (totalPieces > 0)
    {
        // Take input from the array again
        let command = array[index];
        index++;

        // If the command is "STOP", break the loop
        if (command === "STOP") {
            // Printing the message to the console
            console.log(`${totalPieces} pieces are left.`);
            break;
        }

        // Parsing the command to an integer
        let pieces = parseInt(command);

        // Substracting the pieces from the total pieces
        totalPieces -= pieces;

        // If the total pieces are less than 0, print the message and break the loop
        if (totalPieces <= 0) {
            // Printing the message and breaking the loop
            console.log(`No more cake left! You need ${Math.abs(totalPieces)} pieces more.`);
            break;
        }
    }
}

Cake(["10", "10", "20", "20", "20", "20", "21"]);
Cake(["10", "2", "2", "4", "6", "STOP"]);