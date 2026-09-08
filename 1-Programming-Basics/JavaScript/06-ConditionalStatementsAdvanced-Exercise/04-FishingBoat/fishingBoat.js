function FishingBoat(groupBudget, season, fisherAmount) {
  // Variable for later use
  let boatRentPrice = 0;

  // Check which season is it
  switch (season) {
    case "Spring":
      // Set the rent price for the boat in Spring
      boatRentPrice = 3000;

      // Check if the group amount to decide the discount
      if (fisherAmount <= 6) {
        boatRentPrice -= boatRentPrice * (10 / 100);
      } else if (fisherAmount >= 7 && fisherAmount <= 11) {
        boatRentPrice -= boatRentPrice * (15 / 100);
      } else if (fisherAmount >= 12) {
        boatRentPrice -= boatRentPrice * (25 / 100);
      }

      // If fisherAmount is equal to two they get additional discount of 5%
      if (fisherAmount % 2 === 0) {
        boatRentPrice -= boatRentPrice * (5 / 100);
      }
      break;
    case "Summer":
      // Set the rent price for the boat in Summer
      boatRentPrice = 4200;

      // Check if the group amount to decide the discount
      if (fisherAmount <= 6) {
        boatRentPrice -= boatRentPrice * (10 / 100);
      } else if (fisherAmount >= 7 && fisherAmount <= 11) {
        boatRentPrice -= boatRentPrice * (15 / 100);
      } else if (fisherAmount >= 12) {
        boatRentPrice -= boatRentPrice * (25 / 100);
      }

      // If fisherAmount is equal to two they get additional discount of 5%
      if (fisherAmount % 2 === 0) {
        boatRentPrice -= boatRentPrice * (5 / 100);
      }
      break;
    case "Autumn":
      // Set the rent price for the boat in Autumn
      boatRentPrice = 4200;

      // Check if the group amount to decide the discount
      if (fisherAmount <= 6) {
        boatRentPrice -= boatRentPrice * (10 / 100);
      } else if (fisherAmount >= 7 && fisherAmount <= 11) {
        boatRentPrice -= boatRentPrice * (15 / 100);
      } else if (fisherAmount >= 12) {
        boatRentPrice -= boatRentPrice * (25 / 100);
      }
      break;
    case "Winter":
      // Set the rent price for the boat in Winter
      boatRentPrice = 2600;

      // Check if the group amount to decide the discount
      if (fisherAmount <= 6) {
        boatRentPrice -= boatRentPrice * (10 / 100);
      } else if (fisherAmount >= 7 && fisherAmount <= 11) {
        boatRentPrice -= boatRentPrice * (15 / 100);
      } else if (fisherAmount >= 12) {
        boatRentPrice -= boatRentPrice * (25 / 100);
      }

      // If fisherAmount is equal to two they get additional discount of 5%
      if (fisherAmount % 2 === 0) {
        boatRentPrice -= boatRentPrice * (5 / 100);
      }
      break;
  }

  // Check if the budget is enough
  if (groupBudget >= boatRentPrice) {
    let remainingMoney = groupBudget - boatRentPrice;

    // Print the result to the console
    console.log(`Yes! You have ${remainingMoney.toFixed(2)} leva left.`);
  } else {
    let neededMoney = boatRentPrice - groupBudget;

    // Print the result to the console
    console.log(`Not enough money! You need ${neededMoney.toFixed(2)} leva.`);
  }
}

FishingBoat(3000, "Summer", 11);
FishingBoat(3600, "Autumn", 6);
FishingBoat(2000, "Winter", 13);
