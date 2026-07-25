function armies(input) {
    let leaders = {};
    let armyOwner = {};

    for (let line of input) {
        if (line.endsWith(' arrives')) {
            let leader = line.replace(' arrives', '');

            leaders[leader] = { armies: {} };
        } else if (line.endsWith(' defeated')) {
            let leader = line.replace(' defeated', '');

            if (leaders[leader]) {
                for (let armyName in leaders[leader].armies) {
                    delete armyOwner[armyName];
                }
                delete leaders[leader];
            }
        } else if (line.includes(': ')) {
            let parts = line.split(': ');
            let leader = parts[0];
            let armyParts = parts[1].split(', ');
            let armyName = armyParts[0];
            let armyCount = parseInt(armyParts[1]);

            if (leaders[leader]) {
                leaders[leader].armies[armyName] = armyCount;
                armyOwner[armyName] = leader;
            }
        } else if (line.includes(' + ')) {
            let parts = line.split(' + ');
            let armyName = parts[0];
            let armyCount = parseInt(parts[1]);

            let leader = armyOwner[armyName];

            if (leader && leaders[leader]) {
                leaders[leader].armies[armyName] += armyCount;
            }
        }
    }

    let leaderNames = Object.keys(leaders);

    leaderNames.sort((a, b) => {
        let totalA = Object.values(leaders[a].armies).reduce((sum, count) => sum + count, 0);
        let totalB = Object.values(leaders[b].armies).reduce((sum, count)=> sum + count, 0);
        return totalB - totalA;
    });

    for (let leader of leaderNames) {
        let armies = leaders[leader].armies;
        let total = Object.values(armies).reduce((sum, count) => sum + count, 0);

        console.log(`${leader}: ${total}`);

        let armyNames = Object.keys(armies);

        armyNames.sort((a, b) => armies[b] - armies[a]);

        for (let armyName of armyNames) {
            console.log(`>>> ${armyName} - ${armies[armyName]}`);
        }
    }
}

armies(['Rick Burr arrives', 'Fergus: Wexamp, 30245', 'Rick Burr: Juard, 50000', 
    'Findlay arrives', 'Findlay: Britox, 34540', 'Wexamp + 6000', 
    'Juard + 1350', 'Britox + 4500', 'Porter arrives', 'Porter: Legion, 55000', 
    'Legion + 302', 'Rick Burr defeated', 'Porter: Retix, 3205']);
console.log('--------------------------------');
armies(['Rick Burr arrives', 'Findlay arrives', 'Rick Burr: Juard, 1500', 'Wexamp arrives', 
    'Findlay: Wexamp, 34540', 'Wexamp + 340', 'Wexamp: Britox, 1155', 'Wexamp: Juard, 43423']);