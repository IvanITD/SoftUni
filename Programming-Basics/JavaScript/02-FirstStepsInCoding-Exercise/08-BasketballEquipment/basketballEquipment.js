function BasketballEquipment (basketballYearlyFee) {
    
    // Basketball shoes price
    let basketballShoesPrice = basketballYearlyFee - (basketballYearlyFee * (40 / 100));
    
    // Basketball clothes price
    let basketballClothesPrice = basketballShoesPrice - (basketballShoesPrice * (20 / 100));
    
    // Basketball ball price
    let basketballBallPrice = basketballClothesPrice / 4;
    
    // Basketball accessories price
    let basketballAccessoriesPrice = basketballBallPrice / 5;

    // Total price
    let totalPrice = basketballYearlyFee + basketballShoesPrice + basketballClothesPrice + basketballBallPrice + basketballAccessoriesPrice;

    // Print the total price to the console
    console.log(totalPrice);
}

BasketballEquipment(365);
BasketballEquipment(550);