function CinemaTickets(array) {
    // Creating variables for later use
    let totalTickets = 0;
    let studentTickets = 0;
    let standardTickets = 0;
    let kidTickets = 0;
    let index = 0;

    // Creating a while loop to circle through the movie, tickets, and seats
    while (true) {
        // Take the user input from the array
        let movieName = array[index];
        index++;

        // Checking to see if the movie name is Finish
        if (movieName === "Finish") {
            // If the movie name is Finish, break the loop
            break;
        }

        // Take user input again from the array for the free seats
        let freeSeats = parseInt(array[index]);
        index++;

        // Creating a counter to store the current tickets
        let currentTickets = 0;

        // Checking to see if the current tickets are less that the free seats
        while (currentTickets < freeSeats) {
            // Take the user inputs from the array for the ticket type
            let ticketType = array[index];
            index++;

            // If the ticket type is END
            if (ticketType === "End") {
                break; // Break the loop
            }
            else {
                // Creating a switch case to check what type is the ticket
                switch (ticketType) {
                    case "student":
                        studentTickets++;
                        break;
                    case "standard":
                        standardTickets++
                        break;
                    case "kid":
                        kidTickets++;
                        break;                
                }
                // Adding plus one for each counted ticket
                currentTickets++;
            }
        }
        // Calculating the percentage of seats that have been occupied.
            let hallOccupancy = (currentTickets * 100.0) / freeSeats;

            // Printing the name of the movie and at what percentage it is occupied.
            console.log(`${movieName} - ${hallOccupancy.toFixed(2)}% full.`);
    }
    // Adding the student, standard, and kid tickets to a total
    totalTickets = studentTickets + standardTickets + kidTickets;

    // Printing the result to the console.
    console.log(`Total tickets: ${totalTickets}`);
    console.log(`${(studentTickets * 100.0 / totalTickets).toFixed(2)}% student tickets.`);
    console.log(`${(standardTickets * 100.0 / totalTickets).toFixed(2)}% standard tickets.`);
    console.log(`${(kidTickets * 100.0 / totalTickets).toFixed(2)}% kids tickets.`);
}

CinemaTickets(["Taxi", "10", "standard", "kid", "student", "student", "standard", "standard", "End", "Scary Movie", "6", "student", "student", "student", "student", "student", "student", "Finish"]);
CinemaTickets(["The Matrix", "20", "student", "standard", "kid", "kid", "student", "student", "standard", "student", "End", "The Green Mile", "17", "student", "standard", "standard", "student", "standard", "student", "End", "Amadeus", "3", "standard", "standard", "standard", "Finish"]);