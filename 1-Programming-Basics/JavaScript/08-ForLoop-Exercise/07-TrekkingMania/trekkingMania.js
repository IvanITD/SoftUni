function TrekkingMania(array) {
    let groups = parseInt(array[0]);
    let musala = 0;
    let montblanc = 0;
    let kilimanjaro = 0;
    let k2 = 0;
    let everest = 0;
    let totalPeople = 0;

    // Loop through the groups
    for (let i = 1; i <= groups; i++) {
        // Take the variable for the people
        let people = parseInt(array[i]);
        totalPeople += people;

        // Check for the group of people
        if (people <= 5) {
            musala += people;
        } 
        else if (people >= 6 && people <= 12) {
            montblanc += people;
        }
        else if (people >= 13 && people <= 25) {
            kilimanjaro += people;
        }
        else if (people >= 26 && people <= 40) {
            k2 += people;
        }
        else if (people >= 41) {
            everest += people;
        }
    }

    // Calculate the percentage in regards fo each location
    let musalaPercentage = (musala / totalPeople) * 100;
    let montblancPercentage = (montblanc / totalPeople) * 100;
    let kilimanjaroPercentage = (kilimanjaro / totalPeople) * 100;
    let k2Percentage = (k2 / totalPeople) * 100;
    let everestPercentage = (everest / totalPeople) * 100;

    // Print the results to the console
    console.log(`${musalaPercentage.toFixed(2)}%`);
    console.log(`${montblancPercentage.toFixed(2)}%`);
    console.log(`${kilimanjaroPercentage.toFixed(2)}%`);
    console.log(`${k2Percentage.toFixed(2)}%`);
    console.log(`${everestPercentage.toFixed(2)}%`);
}

TrekkingMania(["10", "10", "5", "1", "100", "12", "26", "17", "37", "40", "78"]);
TrekkingMania(["5", "25", "41", "31", "250", "6"]);