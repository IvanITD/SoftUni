function netherRealms(input) {
    let demons = input.split(/\s*,\s*/);
    let demonData = [];

    for (let demon of demons) {
        let health = 0;

        for (let char of demon) {
            if (!/[0-9+\-*\/\.]/.test(char)) {
                health += char.charCodeAt(0);
            }
        }

        let numbers = demon.match(/[+-]?\d+(?:\.\d+)?/g);
        let damage = 0;

        if (numbers) {
            for (let num of numbers) {
                damage += Number(num);
            }
        }
        let operators = demon.match(/[\*\/]/g);

        if (operators) {
            for (let op of operators) {
                if (op === '*') {
                    damage *= 2;
                } else if (op === '/') {
                    damage /= 2;
                }
            }
        }
        demonData.push({ name: demon, health, damage });
    }
    demonData.sort((a, b) => a.name.localeCompare(b.name));

    for (let d of demonData) {
        console.log(`${d.name} - ${d.health} health, ${d.damage.toFixed(2)} damage`);
    }
}

netherRealms('M3ph-0.5s-0.5t0.0**');
console.log('--------------------------------');
netherRealms('M3ph1st0**, Azazel');
console.log('--------------------------------');
netherRealms('Gos/ho');