function PrintNthElement(arr) {
    let nStep = Number(arr[arr.length - 1]);
    let result = [];

    for (let i = 0; i < arr.length - 1; i += nStep) {
        result.push(arr[i]);
    }
    console.log(result.join(' '));
}

PrintNthElement(['5', '20', '31', '4', '20', '2']);
PrintNthElement(['dsa', 'asd', 'test', 'test', '2']);
PrintNthElement(['1', '2', '3', '4', '5', '6']);