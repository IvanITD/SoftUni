function garage(input) {
    let garages = {};

    for (let line of input) {
        let parts = line.split(' - ');
        let garageNumber = parts[0];
        let carInfo = parts[1];

        let propertyStrings = carInfo.split(', ');

        let car = {};

        for (let prop of propertyStrings) {
            let keyValue = prop.split(': ');
            let key = keyValue[0]
            let value = keyValue[1];
            car[key] = value;
        }
        if (!garages[garageNumber]) {
            garages[garageNumber] = [];
        }
        garages [garageNumber].push(car);
    }
    let garageNumbers =Object.keys(garages);
    garageNumbers.sort((a, b) => Number(a) - Number(b));

    for (let num of garageNumbers) {
        console.log(`Garage № ${num}`);

        let cars = garages[num];

        for (let car of cars) {
            let pairs = [];

            for (let key in car) {
                pairs.push(`${key} - ${car[key]}`);
            }

            console.log(`--- ${pairs.join(', ')}`);
        }
    }
}


garage(['1 - color: blue, fuel type: diesel', '1 - color: red, manufacture: Audi', 
    '2 - fuel type: petrol', '4 - color: dark blue, fuel type: diesel, manufacture: Fiat']);
console.log('--------------------------------');
garage(['1 - color: green, fuel type: petrol',
    '1 - color: dark red, manufacture: WV',
    '2 - fuel type: diesel',
    '3 - color: dark blue, fuel type: petrol']);