function MultiplicationTable() {
    for (let firstNum = 1; firstNum <= 10; firstNum++) {
        for (let secondNum = 1; secondNum <= 10; secondNum++) {
            // Calculate the multiplication
            let total = firstNum * secondNum;
            console.log(`${firstNum} * ${secondNum} = ${total}`)
        }
    }
}

MultiplicationTable();