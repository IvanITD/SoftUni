function jansNotation(arr) {
    const stack = [];
    for (const element of arr) {
        if (typeof element === 'number') {
            stack.push(element);
        } else {
            if (stack.length < 2) {
                console.log('Error: not enough operands!');
                return;
            }
            const right = stack.pop();
            const left = stack.pop();
            switch (element) {
                case '+':
                    stack.push(left + right);
                    break;
                case '-':
                    stack.push(left - right);
                    break;
                case '*':
                    stack.push(left * right);
                    break;
                case '/':
                    stack.push(left / right);
                    break;
            }
        }
    }
    if (stack.length !== 1) {
        console.log('Error: too many operands!');
        return;
    }
    console.log(stack.pop());
}

jansNotation([3, 4, '+']);
console.log('--------------------------------');
jansNotation([5, 3, 4, '*', '-']);
console.log('--------------------------------');
jansNotation([7, 33, 8, '-']);
console.log('--------------------------------');
jansNotation([15, '/']);
