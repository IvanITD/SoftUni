function SequenceTwoKPlusOne(number) {
    // Create a variable to count the loops
    let index = 1;

    // Create a while loop that repeats until the counter is less than the number from the console
    while (index <= number) {
        console.log(index);
        index = index * 2 + 1;
    }
}

SequenceTwoKPlusOne(3);
SequenceTwoKPlusOne(8);
SequenceTwoKPlusOne(17);
SequenceTwoKPlusOne(31);