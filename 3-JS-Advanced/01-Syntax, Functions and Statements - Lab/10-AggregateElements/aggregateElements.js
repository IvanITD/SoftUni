function aggregateElements(input) {
    let sum = 0;
    let sum2 = 0;
    let sum3 = '';

    for (let i = 0; i < input.length; i++) {
        sum += input[i];
        sum2 += 1 / input[i];
        sum3 += input[i].toString();
    }

    console.log(sum);
    console.log(sum2);
    console.log(sum3);
}

aggregateElements([1, 2, 3]);
console.log('---');
aggregateElements([2, 4, 8, 16]);
console.log('---');