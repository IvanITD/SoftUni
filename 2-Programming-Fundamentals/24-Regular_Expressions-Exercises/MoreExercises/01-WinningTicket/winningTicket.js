function winningTicket(input) {
    let tickets = input.split(/\s*,\s*/);
    for (let ticket of tickets) {
        if (ticket.length !== 20) {
            console.log('invalid ticket');
            continue;
        }

        let leftHalf = ticket.slice(0, 10);
        let rightHalf = ticket.slice(10);

        let symbols = ['@', '#', '$', '^'];
        let maxLength = 0;
        let winSymbol = '';

        for (let symbol of symbols) {
            let escaped = symbol.replace(/[$^]/g, '\\$&');
            let pattern = new RegExp(`${escaped}{6,}`);
            let leftMatch = leftHalf.match(pattern);
            let rightMatch = rightHalf.match(pattern);

            if (leftMatch && rightMatch) {
                let length = Math.min(leftMatch[0].length, rightMatch[0].length);

                if (length > maxLength) {
                    maxLength = length;
                    winSymbol = symbol;
                }
            }
        }

        if (maxLength === 0) {
            console.log(`ticket "${ticket}" - no match`);
        } else if (maxLength === 10) {
            console.log(`ticket "${ticket}" - 10${winSymbol} Jackpot!`);
        } else {
            console.log(`ticket "${ticket}" - ${maxLength}${winSymbol}`);
        }
    }
}

winningTicket('Cash$$$$$$Ca$$$$$$sh');
console.log('--------------------------------');
winningTicket('$$$$$$$$$$$$$$$$$$$$, aabb  , th@@@@@@eemo@@@@@@ey');
console.log('--------------------------------');
winningTicket('validticketnomatch:(');