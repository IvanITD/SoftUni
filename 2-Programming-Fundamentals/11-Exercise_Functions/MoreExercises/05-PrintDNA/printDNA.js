function printDNA(helixNumber) {
    let sequence = "ATCGTTAGGG";
    
    for (let i = 1; i <= helixNumber; i++) {
        let firstLetter = (i - 1) * 2 % 10;
        let secondLetter = ((i -1) * 2 + 1) % 10;

        let firstChar = sequence[firstLetter];
        let secondChar = sequence[secondLetter];

        switch (i % 4) {
            case 1:
                console.log(`**${firstChar}${secondChar}**`);
                break;
            case 2:
                console.log(`*${firstChar}--${secondChar}*`);
                break;
            case 3:
                console.log(`${firstChar}----${secondChar}`);
                break;
            case 0:
                console.log(`*${firstChar}--${secondChar}*`);
                break;
        }
    }
}

printDNA(4);
printDNA(10);