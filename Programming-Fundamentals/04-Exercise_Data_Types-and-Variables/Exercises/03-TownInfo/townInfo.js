function TownInfo(town, population, area) {
    let isValid = true;
    
    let townInLength = town.length;

    if (townInLength < 3) {
        console.log(`Town name must be at least 3 characters!`);
        isValid = false;
    }
    
    if (population < 0){
        console.log(`Population must be a positive number!`);
        isValid = false;
    }
    
    if (area < 0) {
        console.log(`Area must be a positive number!`);
        isValid = false;
    }
    
    if (isValid) {
        console.log(`Town ${town} has population of ${population} and area ${area} square km.`);
    }
}

TownInfo('Sofia', 1286383, 492);
TownInfo('LA', 1481353, 512);
TownInfo('Plovdiv', -45000, 100);
TownInfo('Ka', 3600, -50);