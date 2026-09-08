function BikeRace(juniors, seniors, route) {
    // Keep the junior's and senior's prices in variables
    let juniorPrice = parseFloat(0.0);
    let seniorPrice = parseFloat(0.0);

    // Calculate the total number of riders
    let totalRiders = juniors + seniors;

    // Check the route
    switch (route) {
        case "trail":
            juniorPrice = 5.50;
            seniorPrice = 7.00;
        break;

        case "cross-country":
            juniorPrice = 8.00;
            seniorPrice = 9.50;

        if (totalRiders >= 50) {
            juniorPrice -= juniorPrice * 0.25;
            seniorPrice -= seniorPrice * 0.25;
        }
        break;

        case "downhill":
            juniorPrice = 12.25;
            seniorPrice = 13.75;
        break;

        case "road":
            juniorPrice = 20.00;
            seniorPrice = 21.50;
        break;
    }

    // Calculate teh price for each type of rider
    let juniorTotalPrice = juniors * juniorPrice;
    let seniorTotalPrice = seniors * seniorPrice;

    // Calculate the total price
    let total = juniorTotalPrice + seniorTotalPrice;

    // The expenses are 5% of the total price
    let expenses = total * 0.05;

    // Print the result to the console
    console.log((total-expenses).toFixed(2));
}

BikeRace(10, 20, "trail");
BikeRace(21, 26, "cross-country");
BikeRace(30, 25, "cross-country");
BikeRace(10, 10, "downhill");
BikeRace(3, 40, "road");