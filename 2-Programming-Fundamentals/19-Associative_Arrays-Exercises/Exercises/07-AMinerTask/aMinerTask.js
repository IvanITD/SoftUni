function aMinerTask(arr) {
    let resources = new Map();

    for (let i = 0; i < arr.length; i += 2) {
        let resource = arr[i];
        let quantity = Number(arr[i + 1]);

        if (!resources.has(resource)) {
            resources.set(resource, quantity);
        } else {
            resources.set(resource, resources.get(resource) + quantity);
        }
    }
    for (let [resource, quantity] of resources) {
        console.log(`${resource} -> ${quantity}`);
    }
}

aMinerTask([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17'
    ]);
console.log("--------------------------------");
aMinerTask([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
    ]);