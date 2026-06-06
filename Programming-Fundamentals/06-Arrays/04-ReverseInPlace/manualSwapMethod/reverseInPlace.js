function ReverseInPlace(arr) {
    for (let i = 0; i < arr.length / 2; i++) {
        let temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
    arr = arr.join(' ');

    console.log(arr);
}

ReverseInPlace(['a', 'b', 'c', 'd', 'e']);
ReverseInPlace(['abc', 'def', 'hig', 'klm', 'nop']);
ReverseInPlace(['33', '123', '0', 'dd']);