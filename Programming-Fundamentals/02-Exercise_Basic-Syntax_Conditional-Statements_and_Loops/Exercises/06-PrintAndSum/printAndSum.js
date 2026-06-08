function printAndSum(givenStart, givenEnd) {
    let index = givenStart;
    let sum = 0;
    
    while (index <= givenEnd) {
        process.stdout.write(index + ' ');
        index++;
        sum += index - 1;
    }
    console.log();
    console.log(`Sum: ${sum}`);
}

printAndSum(5, 10);
printAndSum(0, 26);
printAndSum(50, 60);