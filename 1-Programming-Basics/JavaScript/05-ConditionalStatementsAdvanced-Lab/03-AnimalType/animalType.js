function AnimalType(animal) {
    switch (animal) {
        case "dog":
            console.log("mammal");
            break;
        case "crocodile":
        case "tortoise":
        case "snake":
            console.log("reptile");
            break;
        default:
            console.log("unknown");
    }
}

AnimalType("dog");
AnimalType("snake");
AnimalType("cat");