function storage(arr) {
    let storage = new Map();
    for (let line of arr) {
        let [item, qty] = line.split(" ");
        qty = Number(qty);

        if (!storage.has(item)) {
            storage.set(item, qty);
        } else {
            let oldQty = storage.get(item);
            storage.set(item, oldQty + qty);
        }
    }
    for (let [item, qty] of storage) {
        console.log(`${item} -> ${qty}`);
    }
}

storage(['tomatoes 10', 'coffee 5', 'olives 100', 'coffee 40']);
console.log("--------------------------------");
storage(['apple 50', 'apple 61', 'coffee 115', 'coffee 40']);