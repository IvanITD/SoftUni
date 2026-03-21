function MinNumber(array) {
    let minNumber = parseInt(array[0]);
    let index = 1;

    while (true) {
        let input = array[index];
        index++;

        if (input === "Stop") {
            break;
        }

        let number = parseInt(input);

        if (number < minNumber) {
            minNumber = number;
        }
    }
    console.log(minNumber);
}

MinNumber(["100", "99", "80", "70", "Stop"]);
MinNumber(["-10", "20", "-30", "Stop"]);
MinNumber(["45", "-20", "7", "99", "Stop"]);
MinNumber(["999", "Stop"]);
MinNumber(["-1", "-2", "Stop"]);