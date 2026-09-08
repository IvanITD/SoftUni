function towns(arr) {
    class Town {
        constructor(name, latitude, longitude) {
            this.name = name;
            this.latitude = Number(latitude).toFixed(2);
            this.longitude = Number(longitude).toFixed(2);
        }
        print() {
            console.log(`{ town: '${this.name}', latitude: '${this.latitude}', longitude: '${this.longitude}' }`);
        }
    }
    let towns = [];
    for (let town of arr) {
        towns.push(new Town(...town.split(" | ")));
        towns[towns.length - 1].print();
    }
}

towns(['Sofia | 42.696552 | 23.32601', 'Beijing | 39.913818 | 116.363625']);
console.log("--------------------------------");
towns(['Plovdiv | 136.45 | 812.575']);