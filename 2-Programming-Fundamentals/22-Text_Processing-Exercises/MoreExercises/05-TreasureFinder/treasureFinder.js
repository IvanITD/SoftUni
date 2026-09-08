function treasureFinder(input) {
    let key = input[0].split(' ').map(Number);

    for (let i = 1; i < input.length; i++) {
        if (input[i] === 'find') {
            break;
        }

        let line = input[i];

        let decrypted = '';
        let keyIndex = 0;

        for (let char of line) {
            let code = char.charCodeAt(0) - key[keyIndex];
            decrypted += String.fromCharCode(code);
            keyIndex++;
            if (keyIndex === key.length) {
                keyIndex = 0;
            }
        }

        let type = decrypted.split('&')[1];

        let start = decrypted.indexOf('<') + 1;
        let end = decrypted.indexOf('>');
        let coordinates = decrypted.substring(start, end);

        console.log(`Found ${type} at ${coordinates}`);
    }
}

treasureFinder(["1 2 1 3", "ikegfp'jpne)bv=41P83X@", "ujfufKt)Tkmyft'duEprsfjqbvfv=53V55XA", "find"]);
console.log('--------------------------------');
treasureFinder(["1 4 2 5 3 2 1", `Ulgwh"jt$ozfj!'kqqg(!bx"A3U237GC`, "tsojPqsf$(lrne'$CYfqpshksdvfT$>634O57YC", "'stj)>34W68Z@", "find"]);