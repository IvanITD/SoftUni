function FoodDelivery(chickenMenuCount, fishMenuCount, vegetarianMenuCount) {
    // Menu prices
    const chickenMenuPrice = 10.35;
    const fishMenuPrice = 12.40;
    const vegetarianMenuPrice = 8.15;

    // Delivery price
    const deliveryPrice = 2.50;

    // Calculations per menu
    let chickenMenuTotal = chickenMenuCount * chickenMenuPrice;
    let fishMenuTotal = fishMenuCount * fishMenuPrice;
    let vegetarianMenuTotal = vegetarianMenuCount * vegetarianMenuPrice;

    // Total price before dessert
    let totalPriceBeforeDessert = chickenMenuTotal + fishMenuTotal + vegetarianMenuTotal;

    // Dessert price is 20% of the total price before the dessert
    const dessertPrice = totalPriceBeforeDessert * (20 / 100);

    // Final total price
    let finalTotalPrice = totalPriceBeforeDessert + dessertPrice + deliveryPrice;

    // Print the result to the console
    console.log(finalTotalPrice);
}

FoodDelivery(2, 4, 3);
FoodDelivery(9, 2, 6);