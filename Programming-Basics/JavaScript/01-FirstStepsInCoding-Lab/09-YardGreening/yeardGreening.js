function yardGreening(greenArea) {
    let greeningPricePerM2 = 7.61;
    let totalPrice = greenArea * greeningPricePerM2;
    let discount = totalPrice * 0.18;
    let finalPrice = totalPrice -  discount;

    console.log(`The final price is: ${finalPrice} lv.`);
    console.log(`The discount is: ${discount} lv.`);
}

yardGreening(550);
yardGreening(150);