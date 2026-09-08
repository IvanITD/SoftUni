function MatchTickets(budget, category, peopleAmountInGroup) {
    // Take the prices for the different categories
    let iP = parseFloat(499.99);
    let normal = parseFloat(249.99);

    // Variables for later use
    let transportPrice = parseFloat(0.0);
    let ticketPrice = parseFloat(0.0);

    // Check how many people are going to the concert and calculate the transport price
    if (peopleAmountInGroup >= 1 && peopleAmountInGroup <= 4) {
        transportPrice = budget * 0.75;
        budget -= transportPrice;
    }
    else if (peopleAmountInGroup >= 5 && peopleAmountInGroup <= 9) { // 60% of the budget
        transportPrice = budget * 0.60;
        budget -= transportPrice;
    }
    else if (peopleAmountInGroup >= 10 && peopleAmountInGroup <= 24) { // 50% of the budget
        transportPrice = budget * 0.50;
        budget -= transportPrice;
    }
    else if (peopleAmountInGroup >= 25 && peopleAmountInGroup <= 49) { // 40% of the budget
        transportPrice = budget * 0.40;
        budget -= transportPrice;
    }
    else if (peopleAmountInGroup >= 50) { // 25% of the budget
        transportPrice = budget * 0.25;
        budget -= transportPrice;
    }

    // Check the type of ticket the user wants to buy
    if (category === "VIP") {
        // Calculating the total VIP tickets price after multiplying by the people amount
        ticketPrice = iP * peopleAmountInGroup;
    }
    else if (category === "Normal") {
        // Calculating the total normal tickets price after multiplying by the people amount
        ticketPrice = normal * peopleAmountInGroup;
    }

    // Check if the user has enough money to buy the tickets
    if (budget >= ticketPrice) {
        // Print the result to the console
        console.log(`Yes! You have ${(budget - ticketPrice).toFixed(2)} leva left.`);
    }
    else {
        console.log(`Not enough money! You need ${(ticketPrice - budget).toFixed(2)} leva.`);
    }
}

MatchTickets(1000, "Normal", 1);
MatchTickets(30000, "VIP", 49);