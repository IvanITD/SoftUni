function MaxNumber(array) {
    let maxNumber = parseInt(array[0]);
    let index = 1;

    while (true) {
        let input = array[index];
        index++;

        if (input === "Stop") {
            break;
        }

        let number = parseInt(input);

        if (number > maxNumber) {
            maxNumber = number;
        }
    }
    console.log(maxNumber);
}

MaxNumber(["100", "99", "80", "70", "Stop"]);
MaxNumber(["-10", "20", "-30", "Stop"]);
MaxNumber(["45", "-20", "7", "99", "Stop"]);
MaxNumber(["999", "Stop"]);
MaxNumber(["-1", "-2", "Stop"]);