function OldBooks(array) {
    // Create a variable that will hold the correct book
    let correctBook = array[0];

    // Create and index for the loop
    let index = 1;

    // Counter for the books
    let bookCounter = 0;

    // Loop through the books to see if you find the correct one
    while (true) {
        // Ani checks the books
        let book = array[index];
        index++;

        // Check if the book is found
        if (book == correctBook) {
            console.log(`You checked ${bookCounter} books and found it.`);
            break;
        }
        else if (book == "No More Books") {
            console.log("The book you search is not here!");
            console.log(`You checked ${bookCounter} books.`);
            break;
        }

        // Add to the book counter
        bookCounter++;
    }
}

OldBooks(["Troy", "Stronger", "Life Style", "Troy"]);
OldBooks(["The Spot", "Hunger Games", "Harry Potter", "Torronto", "Spotify", "No More Books"]);
OldBooks(["Bourne", "True Story", "Forever", "More Space", "The Girl", "Spaceship", "Strongest", "Profit", "Tripple", "Stella", "The Matrix", "Bourne"]);