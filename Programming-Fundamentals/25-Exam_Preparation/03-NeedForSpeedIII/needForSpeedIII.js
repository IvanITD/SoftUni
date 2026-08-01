function needForSpeedIII(input) {
    let n = Number(input[0]);
    let cars = {};

    for (let i = 1; i <= n; i++) {
        let [car, mileage, fuel] = input[i].split('|');
        cars[car] = { mileage: Number(mileage), fuel: Number(fuel) };
    }

    for (let i = n + 1; i < input.length; i++) {
        let line = input[i];

        if (line === 'Stop') {
            break;
        }

        let parts = line.split(' : ');
        let command = parts[0];

        if (command === 'Drive') {
            let car = parts[1];
            let distance = Number(parts[2]);
            let fuelNeeded = Number(parts[3]);

            if (cars[car].fuel < fuelNeeded) {
                console.log(`Not enough fuel to make that ride`);
                continue;
            }

            cars[car].mileage += distance;
            cars[car].fuel -= fuelNeeded;
            console.log(`${car} driven for ${distance} kilometers. ${fuelNeeded} liters of fuel consumed.`);

            if ( cars[car].mileage >= 100000) {
                console.log(`Time to sell the ${car}!`);
                delete cars[car];
            }
        } else if (command === 'Refuel') {
            let car = parts[1];
            let fuelAmount = Number(parts[2]);

            let spaceLeft = 75 - cars[car].fuel;
            let actualFuel = Math.min(fuelAmount, spaceLeft);
            cars[car].fuel += actualFuel;
            console.log(` ${car} refueled with ${actualFuel} liters`);
        } else if (command === 'Revert') {
            let car = parts[1];
            let kilometers = Number(parts[2]);

            cars[car].mileage -= kilometers;
            if (cars[car].mileage < 10000) {
                cars[car].mileage = 10000;
            } else {
                console.log(`${car} mileage decreased by ${kilometers} kilometers`);
            }
        }
    }
    for (let car in cars) {
        console.log(`${car} -> Mileage: ${cars[car].mileage} kms, Fuel in the tank: ${cars[car]. fuel} lt.`);
    }
}

needForSpeedIII(['3', 'Audi A6|38000|62', 'Mercedes CLS|11000|35', 'Volkswagen Passat CC|45678|5', 'Drive : Audi A6 : 543 : 47', 'Drive : Mercedes CLS : 94 : 11', 'Drive : Volkswagen Passat CC : 69 : 8', 'Refuel : Audi A6 : 50', 'Revert : Mercedes CLS : 500', 'Revert : Audi A6 : 30000', 'Stop']);
console.log('--------------------------------');
needForSpeedIII(['4', 'Lamborghini Veneno|11111|74', 'Bugatti Veyron|12345|67', 'Koenigsegg CCXR|67890|12', 'Aston Martin Valkryie|99900|50', 'Drive : Koenigsegg CCXR : 382 : 82', 'Drive : Aston Martin Valkryie : 99 : 23', 'Drive : Aston Martin Valkryie : 2 : 1', 'Refuel : Lamborghini Veneno : 40', 'Revert : Bugatti Veyron : 2000', 'Stop']);