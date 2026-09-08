function reverseInPlace(arr) {
    arr = arr.reverse();
    arr = arr.join(' ');

    console.log(arr);

}

reverseInPlace(['a', 'b', 'c', 'd', 'e']);
reverseInPlace(['abc', 'def', 'hig', 'klm', 'nop']);
reverseInPlace(['33', '123', '0', 'dd']);