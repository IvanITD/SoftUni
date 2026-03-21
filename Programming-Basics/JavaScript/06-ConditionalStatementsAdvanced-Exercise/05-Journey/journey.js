function Journey(budget, season) {
  // Variable for later use
  let destination;
  let placeToStay
  let total;

  // Check the budget
  if (budget <= 100) {
    destination = "Bulgaria";

    // Check what is the season
    switch (season) {
      case "summer":

        // The place to stay is hotel
        placeToStay = "Camp";

        // If its summer 30% from the budget
        total = budget * (30 / 100);
        break;
      case "winter":

        // The place to stay is hotel
        placeToStay = "Hotel";

        // If its winter 70% from the budget
        total = budget * (70 / 100);
        break;
    }
  } else if (budget <= 1000) {
    destination = "Balkans";
    
    // Check what is the season
    switch (season) {
      case "summer":
        
        // The place to stay is hotel
        placeToStay = "Camp";

        // If its summer 40% from the budget
        total = budget * (40 / 100);
        break;
      case "winter":

        // The place to stay is hotel
        placeToStay = "Hotel";
        
        // If its winter 80% from the budget
        total = budget * (80 / 100);
        break;
    }

  } else if (budget > 1000) {
    destination = "Europe";

    // Check what is the season
    switch (season) {
      case "summer":
      case "winter":
        
        // The place to stay is hotel
        placeToStay = "Hotel";

        // If its summer 30% from the budget
        total = budget * (90 / 100);
        break;
    }
  }

  // Print to the console
  console.log(`Somewhere in ${destination}`);
  console.log(`${placeToStay} - ${total.toFixed(2)}`);
}

Journey(50, "summer");
Journey(75, "winter");
Journey(312, "summer");
Journey(678.53, "winter");
Journey(1500, "summer");