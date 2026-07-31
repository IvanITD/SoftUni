function softUniBarIncome(input) {
    let totalIncome = 0;

    for (let line of input) {
        if (line === 'end of shift') {
            break;
        }

        let pattern = /%(?<customer>[A-Z][a-z]+)%[^|$%.]*<(?<product>[\w\s]+)>[^|$%.]*\|(?<count>\d+)\|[^|$%.\d]*(?<price>\d+(?:\.\d+)?)\$/;
        let match = line.match(pattern);

        if (match) {
            let customer = match.groups.customer;
            let product = match.groups.product;
            let count = Number(match.groups.count);
            let price = Number(match.groups.price);
            let totalPrice = count * price;

            totalIncome += totalPrice;
            console.log(`${customer}: ${product} - ${totalPrice.toFixed(2)}`);
        }
    }

    console.log(`Total income: ${totalIncome.toFixed(2)}`);
}

softUniBarIncome(['%George%<Croissant>|2|10.3$', '%Peter%<Gum>|1|1.3$', '%Maria%<Cola>|1|2.4$', 'end of shift']);
console.log('--------------------------------');
softUniBarIncome(['%InvalidName%<Croissant>|2|10.3$', '%Peter%<Gum>1.3$', '%Maria%<Cola>|1|2.4', '%Valid%<Valid>valid|10|valid20$', 'end of shift']);