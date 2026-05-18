function PrintAndSum(givenStart, givenEnd) {
    let index = givenStart;
    
    while (index <= givenEnd) {
        console.log(index);
        index++;
    }
}

PrintAndSum(5, 10);
PrintAndSum(0, 26);
PrintAndSum(50, 60);