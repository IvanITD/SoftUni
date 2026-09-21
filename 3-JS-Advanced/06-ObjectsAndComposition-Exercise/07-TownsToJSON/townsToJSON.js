function townsToJSON(arr) {
    let towns = [];
    for (let i = 1; i < arr.length; i++) {
        let parts = arr[i]
            .split('|')
            .map(x => x.trim())
            .filter(x => x !== '');
        let town = parts[0];
        let latitude = Number(Number(parts[1]).toFixed(2));
        let longitude = Number(Number(parts[2]).toFixed(2));
        towns.push({ Town: town, Latitude: latitude, Longitude: longitude });
    }
    console.log(JSON.stringify(towns));
}

townsToJSON([
    '| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |'
]);
console.log('--------------------------------');
townsToJSON([
    '| Town | Latitude | Longitude |',
    '| Veliko Turnovo | 43.0757 | 25.6172 |',
    '| Monatevideo | 34.50 | 56.11 |'
]);