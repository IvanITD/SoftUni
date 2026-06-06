function ReverseInPlace(arr) {
    arr = arr.reverse();
    arr = arr.join(' ');

    console.log(arr);

}

ReverseInPlace(['a', 'b', 'c', 'd', 'e']);
ReverseInPlace(['abc', 'def', 'hig', 'klm', 'nop']);
ReverseInPlace(['33', '123', '0', 'dd']);