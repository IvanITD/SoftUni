function FishTank(length, width, height, percent) {
    // Calculate the volume of the aquarium in liters
    let aquariumVolume = length * width * height;
    let volumeInLiters = aquariumVolume / 1000;

    // Calculate the needed liters of water to fill the aquarium
    let filledVolume = percent / 100;
    let neededLiters = volumeInLiters * (1 - filledVolume);

    // Print the result to console
    console.log(neededLiters);
}

FishTank(85, 75, 47, 17);
FishTank(105, 77, 89, 18.5);