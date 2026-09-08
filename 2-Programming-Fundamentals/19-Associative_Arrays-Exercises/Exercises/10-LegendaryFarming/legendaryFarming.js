function legendaryFarming(input) {
    let keyMaterials = {
        shards: 0,
        fragments: 0,
        motes: 0
    };
    
    let parts = input.split(' ');
    let junk = {};
    let obtained = '';


        for (let i = 0; i < parts.length; i += 2) {
            let quantity = Number(parts[i]);
            let material = parts[i + 1].toLowerCase();

            if (material === 'shards' || material === 'fragments' || material === 'motes') {
                keyMaterials[material] += quantity;
        
                if (keyMaterials[material] >= 250) {
                    if (material === 'shards') obtained = 'Shadowmourne';
                    else if (material === 'fragments') obtained = 'Valanyr';
                    else if (material === 'motes') obtained = 'Dragonwrath';
        
                    keyMaterials[material] -= 250;
                    break;
                }
            } else {
                if (!junk[material]) {
                    junk[material] = 0;
                }
                junk[material] += quantity;
            }
        }

    console.log(`${obtained} obtained!`);

    let sortedKey = Object.entries(keyMaterials)
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));

    for (let [material, quantity] of sortedKey) {
        console.log(`${material}: ${quantity}`);
    }

    let sortedJunk = Object.keys(junk).sort();

    for (let material of sortedJunk) {
        console.log(`${material}: ${junk[material]}`);
    }
}

legendaryFarming('3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards');
console.log('--------------------------------');
legendaryFarming('123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver');