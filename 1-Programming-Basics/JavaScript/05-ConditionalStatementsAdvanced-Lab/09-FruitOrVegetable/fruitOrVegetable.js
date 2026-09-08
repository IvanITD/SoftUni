function FruitOrVegetable(productName) {
    // Check if the product is a fruit or a vegetable
    switch (productName) {
        case "banana":
        case "apple":
        case "kiwi":
        case "cherry":
        case "lemon":
        case "grapes":
            console.log("fruit");
            break;

        case "tomato":
        case "cucumber":
        case "pepper":
        case "carrot":
            console.log("vegetable");
            break;

        default:
            console.log("unknown");
    }
}

FruitOrVegetable("banana");
FruitOrVegetable("apple");
FruitOrVegetable("tomato");
FruitOrVegetable("water");