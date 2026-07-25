function travelTime(arr) {
    let destinations = new Map();
    for (let line of arr) {
        let [country, town, price] = line.split(' > ');
        let cost = Number(price);
        if (!destinations.has(country)) {
            destinations.set(country, new Map());
        }
        let towns = destinations.get(country);
        if (!towns.has(town) || cost < towns.get(town)) {
            towns.set(town, cost);
        }
    }
    let sortedCountries = [...destinations.keys()].sort((a, b) => a.localeCompare(b));
    for (let country of sortedCountries) {
        let sortedTowns = [...destinations.get(country).entries()].sort((a, b) => a[1] - b[1] || a[0].localeCompare(b[0]));
        let output = `${country} -> ${sortedTowns.map(t => `${t[0]} -> ${t[1]}`).join(' ')}`;
        console.log(output);
    }
}

travelTime([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
    ]);
console.log('--------------------------------');
travelTime([
    'Bulgaria > Sofia > 25000',
    'Bulgaria > Sofia > 25000',
    'Kalimdor > Orgrimar > 25000',
    'Albania > Tirana > 25000',
    'Bulgaria > Varna > 25010',
    'Bulgaria > Lukovit > 10'
    ]);