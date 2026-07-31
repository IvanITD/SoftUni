function race(input) {
    let participants = input.shift().split(', ');
    let distances = {};

    for (let name of participants) {
        distances[name] = 0;
    }

    for (let i = 0; i <input.length; i++) {
        let line = input[i];

        if (line === 'end of race') {
            break;
        }
        let letters = line.match(/[A-Za-z]/g);

        if (!letters) {
            continue;
        }

        let name = letters.join('');
        name = name[0].toUpperCase() + name.slice(1).toLowerCase();

        let digits = line.match(/\d/g);

        if (!digits) {
            continue;
        }

        let distance = 0;
        for (let d of digits) {
            distance += Number(d);
        }

        if (distances.hasOwnProperty(name)) {
            distances[name] += distance;
        }
    }

    let sorted = Object.entries(distances);
    sorted.sort((a, b) => b[1] - a[1]);

    console.log(`1st place: ${sorted[0] [0]}`);
    console.log(`2nd place: ${sorted[1] [0]}`);
    console.log(`3rd place: ${sorted[2] [0]}`);
}

race(['George, Peter, Bill, Tom', 'G4e@55or%6g6!68e!!@ ', 'R1@!3a$y4456@', 'B5@i@#123ll', 'G@e54o$r6ge#', '7P%et^#e5346r', 'T$o553m&6', 'end of race']);
console.log('--------------------------------');
race(['Ronald, Bill, Tom, Timmy, Maggie, Michonne', 'Mi*&^%$ch123o!#$%#nne787) ', '%$$B(*&&)i89ll)*&) ', 'R**(on%^&ald992) ', 'T(*^^%immy77) ', 'Ma10**$#g0g0g0i0e', 'end of race']);