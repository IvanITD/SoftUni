function carWash(arr) {
    let value = 0;
    
    
    for (let i = 0; i < arr.length; i++) {
        switch (arr[i]) {
            case 'soap':
                value += 10;
            break;

            case 'water':
                value += value * (20 / 100);
            break;

            case 'vacuum cleaner':
                value += value * (25 / 100);
            break;

            case 'mud':
                value -= value * (10 / 100);
            break;
        }
    }
    
    console.log(`The car is ${value.toFixed(2)}% clean.`);
}

carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']);
carWash(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"]);