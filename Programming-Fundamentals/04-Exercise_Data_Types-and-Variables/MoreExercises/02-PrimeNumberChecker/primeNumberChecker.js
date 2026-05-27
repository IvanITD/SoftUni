function PrimeNumberChecker(number) {
    let isPrime = true;
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            isPrime = false;
            break;
        }

        if (number < 0 || number === 0 || number === 1 ) {
            isPrime = false;
            break;
        }
    }
    console.log(isPrime);
}

PrimeNumberChecker(7);
PrimeNumberChecker(8);
PrimeNumberChecker(81);