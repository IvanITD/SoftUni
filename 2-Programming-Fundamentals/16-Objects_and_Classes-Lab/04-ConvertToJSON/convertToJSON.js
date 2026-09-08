function convertToJSON() {
    let obj = {
        name: arguments[0],
        lastName: arguments[1],
        hairColor: arguments[2]
    }

    console.log(JSON.stringify(obj));
}

convertToJSON('George', 'Jones', 'Brown');
console.log("--------------------------------");
convertToJSON('Peter', 'Smith', 'Blond');