function ArrayRotation(arr, totalRotations) {
    for (let currentRotation = 1; currentRotation <= totalRotations; currentRotation++) {
        let firstElement = arr.shift();
        arr.push(firstElement);
    }

    console.log(arr.join(' '));
}

ArrayRotation([51, 47, 32, 61, 21], 2);
ArrayRotation([32, 21, 61, 1], 4);
ArrayRotation([2, 4, 15, 31], 5);