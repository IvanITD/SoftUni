function gladiatorInventory(arr) {
    let inventory = arr.shift().split(' ');

    for (let i = 0; i < arr.length; i++) {
        let command = arr[i];
        let tokens = command.split(' ');
        let action = tokens[0];

        if (action === 'Buy') {
            let item = tokens[1];
            
            if (!inventory.includes(item)) {
                inventory.push(item);
            }
        }  else if (action === 'Trash') {
            let item = tokens[1];
            let index = inventory.indexOf(item);

            if (index !== -1) {
                inventory.splice(index, 1);
            }
        } else if (action === 'Repair') {
            let item = tokens[1];
            let index = inventory.indexOf(item);

            if (index !== -1) {
                inventory.splice(index, 1);
                inventory.push(item);
            }
        } else if (action === 'Upgrade') {
            let parts = tokens[1].split('-');
            let item = parts[0];
            let upgrade = parts[1];
            let index = inventory.indexOf(item);

            if (index !== -1) {
                inventory.splice(index + 1, 0, `${item}:${upgrade}`);
            }
        }
    }
    console.log(inventory.join(' '));
}

gladiatorInventory(['SWORD Shield Spear', 'Buy Bag', 'Trash Shield', 'Repair Spear', 'Upgrade SWORD-Steel']);
console.log();
gladiatorInventory(['SWORD Shield Spear', 'Trash Bow', 'Repair Shield', 'Upgrade Helmet-V']);