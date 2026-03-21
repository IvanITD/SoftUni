function MultiplicationTable(number) {
    // Variable for later use
    let total = 0;
    
    // For every number from 1 to 10 multiply by 5
    for (let i = 1; i <= 10; i++) {
        switch (i) {
            case 1:
                total = 1 * number;
                console.log(`1 * ${number} = ${total}`);
                break;
            case 2:
                total = 2 * number;
                console.log(`2 * ${number} = ${total}`);
                break;
            case 3:
                total = 3 * number;
                console.log(`3 * ${number} = ${total}`);
                break;
            case 4:
                total = 4 * number;
                console.log(`4 * ${number} = ${total}`);
                break;
            case 5:
                total = 5 * number;
                console.log(`5 * ${number} = ${total}`);
                break;
            case 6:
                total = 6 * number;
                console.log(`6 * ${number} = ${total}`);
                break;
            case 7:
                total = 7 * number;
                console.log(`7 * ${number} = ${total}`);
                break;
            case 8:
                total = 8 * number;
                console.log(`8 * ${number} = ${total}`);
                break;
            case 9:
                total = 9 * number;
                console.log(`9 * ${number} = ${total}`);
                break;
            case 10:
                total = 10 * number;
                console.log(`10 * ${number} = ${total}`);
                break;
        }
    }
}

MultiplicationTable(5);
MultiplicationTable(2);