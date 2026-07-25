function piccolo(arr) {
    let parking = new Set();

    for (let command of arr) {
        let [direction, plate] = command.split(', ');

        if (direction === 'IN') {
            parking.add(plate);
        } else {
            parking.delete(plate);
        }
    }

    let sorted = [...parking].sort();

        if (sorted.length === 0) {
            console.log('Parking Lot is Empty');
        } else {
            for (let plate of sorted) {
                console.log(plate);
            }
        }
}

piccolo(['IN, CA2844AA', 'IN, CA1234TA', 'OUT, CA2844AA', 'IN, CA9999TT', 'IN, CA2866HI', 'OUT, CA1234TA', 'IN, CA2844AA', 'OUT, CA2866HI', 'IN, CA9876HH', 'IN, CA2822UU']);
console.log("--------------------------------");
piccolo(['IN, CA2844AA', 'IN, CA1234TA', 'OUT, CA2844AA', 'OUT, CA1234TA']);