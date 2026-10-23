function largestNumber(input1, input2, input3) {
    let largest = input1;

    if (input2 > largest) {
        largest = input2;
    }

    if (input3 > largest) {
        largest = input3;
    }

    console.log(`The largest number is ${largest}.`);
}


largestNumber(5, -3, 16);
largestNumber(-3, -5, -22.5);