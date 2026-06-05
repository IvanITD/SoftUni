function RotateArray(arr) {
    let rotations = Number(arr.pop());

    for (let i = 0; i < rotations; i++) {
        let lastElement = arr.pop();
        arr.unshift(lastElement);
    }
    console.log(arr.join(' '));
}

RotateArray(['1', '2', '3', '4', '2']);
RotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15']);