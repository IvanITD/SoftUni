function sequences(array) {
    let unique = [];

    for (let str of array) {
        let arr = JSON.parse(str);

        let sortedNew = [...arr].sort((a, b) => a - b);

        let isDublicate = unique.some(existing => {
            let sortedExisting = [...existing].sort((a, b) => a - b);
            return sortedExisting.join(",") === sortedNew.join(",");
        });

        if (!isDublicate) {
            unique.push(arr);
        }
        unique.sort((a, b) => a.length - b.length);
    }

    for (let arr of unique) {
        let descending = [...arr].sort((a, b) => b - a);
        console.log(`[${descending.join(", ")}]`);
    }
}

sequences(["[-3, -2, -1, 0, 1, 2, 3, 4]", "[10, 1, -17, 0, 2, 13]", "[4, -3, 3, -2, 2, -1, 1, 0]"]);
console.log("--------------------------------");
sequences(["[7.14, 7.180, 7.339, 80.099]", "[7.339, 80.0990, 7.140000, 7.18]", "[7.339, 7.180, 7.14, 80.099]"]);