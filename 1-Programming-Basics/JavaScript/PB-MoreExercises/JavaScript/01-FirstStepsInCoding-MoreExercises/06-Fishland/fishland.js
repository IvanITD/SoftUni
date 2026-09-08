function Fishland(mackerelPrice, spratPrice, bonitoKg, safridKg, musselsKg) {
    // Calculate the price for the mackerel price
    let bonitoPrice = mackerelPrice + (mackerelPrice * (60 / 100));
    let totalBonitoPrice = bonitoKg * bonitoPrice;

    // Get the price for the safrid
    let safridPrice = spratPrice + (spratPrice * (80 / 100));
    let totalSafridPrice = safridKg * safridPrice;

    // Get the price for the mussels
    let totalMusselsPrice = musselsKg * 7.50;

    // Get the total price for all the fish
    let totalPrice = totalBonitoPrice + totalSafridPrice + totalMusselsPrice;

    // Print the result
    console.log(totalPrice.toFixed(2));
}

Fishland(6.90, 4.20, 1.5, 2.5, 1);
Fishland(5.55, 3.57, 4.3, 3.6, 7);
Fishland(7.79, 5.35, 9.3, 0, 0);