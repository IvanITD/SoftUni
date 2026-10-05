function commandProcessor() {
    let text = '';

    return {
        append(str) {
            text += str;
        },
        removeStart(n) {
            text = text.slice(n);
        },
        removeEnd(n) {
            text = text.slice(0, text.length - n);
        },
        print() {
            console.log(text);
        }
    };
}

let firstZeroTest = commandProcessor();
firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();

console.log('--------------------------------');

let secondZeroTest = commandProcessor();
secondZeroTest.append('123');
secondZeroTest.append('45');
secondZeroTest.removeStart(2);
secondZeroTest.removeEnd(1);
secondZeroTest.print();