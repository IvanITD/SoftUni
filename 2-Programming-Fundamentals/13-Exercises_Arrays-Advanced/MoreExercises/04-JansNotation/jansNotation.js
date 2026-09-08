function jansNotation(arr) {
    let stack = [];
    for (let item of arr) {
        if (typeof item === 'number') {
            stack.push(item);
        } else {
            if (stack.length < 2) {
                console.log('Error: not enough operands!');
                return;
            }
            let b = stack.pop();
            let a = stack.pop();

            let result;
            switch (item) {
                case '+':
                    result = a + b;
                    break;
                case '-':
                    result = a - b;
                    break;
                case '*':
                    result = a * b;
                    break;
                case '/':
                    result = a / b;
                    break;
            }
            stack.push(result);
        }
    }

    if (stack.length === 1) {
        console.log(stack[0]);
    } else {
        console.log('Error: too many operands!');
    }
}

jansNotation([3, 4, '+']);
console.log();
jansNotation([5, 3, 4, '*', '-']);
console.log();
jansNotation([7, 33, 8, '-']);
console.log();
jansNotation([15, '/']);
console.log();
jansNotation([31, 2, '+', 11, '/']);
console.log();
jansNotation([-1, 1, '+', 101, '*', 18, '+', 3, '/']);