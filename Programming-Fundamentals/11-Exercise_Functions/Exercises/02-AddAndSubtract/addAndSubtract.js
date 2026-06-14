function addAndSubtract(num1, num2, num3) {
    function sum(num1, num2) {
        let add = num1 + num2;

        return add;
    }

    let addition = sum(num1,num2);

    function subtract(addition, num3) {
        let subtract = addition - num3;

        return subtract;
    }

    let totalSum = subtract(addition, num3);

    console.log(totalSum);
}

addAndSubtract(23, 6, 10);
addAndSubtract(1, 17, 30);
addAndSubtract(42, 58, 100);