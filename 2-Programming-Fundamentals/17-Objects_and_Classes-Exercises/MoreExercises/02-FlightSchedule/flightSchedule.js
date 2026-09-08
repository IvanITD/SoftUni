function flightSchedule(arr) {
    let flight = arr[0];
    let changes = arr[1];
    let statusToCheck = arr[2][0];

    let schedule = {}

    for (let i = 0; i < flight.length; i++) {
        let firstSpace = flight[i].indexOf(" ");
        let flightNumber = flight[i].slice(0, firstSpace);
        let Destination = flight[i].slice(firstSpace + 1);

        schedule[flightNumber] = { Destination, Status: "Ready to fly" };
    }

    let changedFlights = new Set();

    for (let i = 0; i < changes.length; i++) {
        let firstSpace = changes[i].indexOf(" ");
        let flightNumber = changes[i].slice(0, firstSpace);
        let status = changes[i].slice(firstSpace + 1);

        if (schedule[flightNumber]) {
            schedule[flightNumber].Status = status;
            changedFlights.add(flightNumber);
        }
    }

    for (let flightNumber in schedule) {
        let flight = schedule[flightNumber];

        if (statusToCheck === "Ready to fly") {
            if (!changedFlights.has(flightNumber)) {
                console.log(`{ Destination: '${flight.Destination}', Status: '${flight.Status}' }`);
            }
        } else {
            if (changedFlights.has(flightNumber) && flight.Status === statusToCheck) {
                console.log(`{ Destination: '${flight.Destination}', Status: '${flight.Status}' }`)
            }
        }
    }
}

flightSchedule([['WN269 Delaware', 'FL2269 Oregon', 'WN498 Las Vegas', 'WN3145 Ohio', 'WN612 Alabama', 'WN4010 New York', 'WN1173 California', 'DL2120 Texas', 'KL5744 Illinois', 'WN678 Pennsylvania'], ['DL2120 Cancelled', 'WN612 Cancelled', 'WN1173 Cancelled', 'SK430 Cancelled'], ['Cancelled']]);
console.log("--------------------------------");
flightSchedule([['WN269 Delaware', 'FL2269 Oregon', 'WN498 Las Vegas', 'WN3145 Ohio', 'WN612 Alabama', 'WN4010 New York', 'WN1173 California', 'DL2120 Texas', 'KL5744 Illinois', 'WN678 Pennsylvania'], ['DL2120 Cancelled', 'WN612 Cancelled', 'WN1173 Cancelled', 'SK330 Cancelled'], ['Ready to fly'] ]);