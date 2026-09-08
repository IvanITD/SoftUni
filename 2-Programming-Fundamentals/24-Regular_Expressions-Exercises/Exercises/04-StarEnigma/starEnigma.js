function starEnigma(input) {
    let n = Number(input[0]);
    let attacked = [];
    let destroyed = [];

    for (let i = 1; i <= n; i++) {
        let encrypted = input[i];

        let key = encrypted.match(/[star]/gi);
        let decryptionKey = key ? key.length : 0;

        let decrypted = '';

        for (let j = 0; j < encrypted.length; j++) {
            decrypted += String.fromCharCode(encrypted.charCodeAt(j) - decryptionKey);
        }
        let pattern = /@(?<planet>[A-Za-z]+)[^@\-!:>]*:(?<population>\d+)[^@\-!:>]*!(?<attackType>[AD])![^@\-!:>]*->(?<soldiers>\d+)/;
        let match = decrypted.match(pattern);

        if (match) {
            let planet = match.groups.planet;
            let attackType = match.groups.attackType;

            if (attackType === 'A') {
                attacked.push(planet);
            } else if (attackType === 'D') {
                destroyed.push(planet);
            }
        }
    }
    
    attacked.sort();
    destroyed.sort();

    console.log(`Attacked planets: ${attacked.length}`);
    for (let planet of attacked) {
        console.log(`-> ${planet}`);
    }

    console.log(`Destroyed planets: ${destroyed.length}`);
    for (let planet of destroyed) {
        console.log(`-> ${planet}`);
    }
}

starEnigma(['2', 'STCDoghudd4=63333$D$0A53333', 'EHfsytsnhf?8555&I&2C9555SR']);
console.log('--------------------------------');
starEnigma(['3', "tt(''DGsvywgerx>6444444444%H%1B9444", 'GQhrr|A977777(H(TTTT', 'EHfsytsnhf?8555&I&2C9555SR']);