function factorialDivision(a, b) {
    let factoryA = factorial(a);
    let factoryB = factorial(b);

    let result = factoryA / factoryB;

    console.log(result.toFixed(2));


    function factorial(number) {
        let result = 1;
        for (let i = 2; i <= number; i++) {
            result = result * i;
        }
        return result;
    }
}

factorialDivision(5, 2);
factorialDivision(6, 2);
