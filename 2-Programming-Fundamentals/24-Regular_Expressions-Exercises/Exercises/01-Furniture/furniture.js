function furniture(input) {
    let bought = [];
    let total = 0;

    for (let line of input) {
        if (line === 'Purchase') {
            break;
        }

        let pattern = />>(?<name>[A-Z][A-Za-z]*)<<(?<price>\d+(?:\.\d+)?)!(?<quantity>\d+)/;
        let match = line.match(pattern);

        if (match) {
            let name = match.groups.name;
            let price = Number(match.groups.price);
            let quantity = Number(match.groups.quantity);

            bought.push(name);
            total += price * quantity;
        }
    }

    if (bought.length > 0) {
        console.log(`Bought furniture:\n${bought.join('\n')}`);
    } else {
        console.log('Bought furniture:');
    }
    console.log(`Total money spend: ${total.toFixed(2)}`);
}

furniture(['>>Sofa<<312.23!3', '>>TV<<300!5', '>Invalid<<!5', 'Purchase']);
console.log('--------------------------------');
furniture(['>>Laptop<<312.2323!3', '>>TV<<300.21314!5', '>Invalid<<!5', '>>TV<<300.21314!20', '>>Invalid<!5', '>>TV<<30.21314!5', '>>Invalid<<!!5', 'Purchase']);
console.log('--------------------------------');
furniture(['>Invalid<<!4', '>Invalid<<!2', '>Invalid<<!5', 'Purchase']);