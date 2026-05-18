function PrintAndSum(givenStart, givenEnd) {
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

PrintAndSum(5, 10);
PrintAndSum(0, 26);
PrintAndSum(50, 60);