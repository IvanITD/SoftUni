function petShop(dogFoodAmount, catFoodAmount) {
    let dogFoodPrice = 2.50;
    let catFoodPrice = 4.00;

    let totalPrice = (dogFoodAmount * dogFoodPrice) + (catFoodAmount * catFoodPrice);
    console.log(`${totalPrice} lv.`);
}

petShop(5, 4);
petShop(13, 9);