function SumPrimeNonPrime(array) {
  // Creating two variables. One for the prime numbers, and one for the non-prime numbers.
  let primeSum = 0;
  let nonPrimeSum = 0;

  // Create a variable for the index to count the loop
  let index = 0;
  let input = array[index];
  index++;

  // Got through the while loop
  while (input != "stop") {
    // Converting the string input into a number
    let number = parseInt(input);
    // Checking to see if the number is negative
    if (number < 0) {
      console.log("Number is negative.");
    } else {
      // Checking to see if the number is prime
      let isPrime = true;

      if (number <= 1) {
        // 0 and 1 are not prime
        isPrime = false;
      } else {
        // Checking to see if the number is divisible by any number from 2 to number 1
        for (let i = 2; i < number; i++) {
          if (number % i == 0) {
            // If a divisor is found, it means it's not prime
            isPrime = false;
            break; // Breaking the loop
          }
        }
      }
      // If the number is Prime, adding the number to appropriate sum
      if (isPrime) {
        primeSum += number;
      } else {
        nonPrimeSum += number;
      }
    }
    // Here we're continuing with the input.
    input = array[index];
    index++;
  }
  // Printing the result to the console
  console.log(`Sum of all prime numbers is: ${primeSum}`);
  console.log(`Sum of all non prime numbers is: ${nonPrimeSum}`);
}

SumPrimeNonPrime(["3", "9", "0", "7", "19", "4", "stop"]);
SumPrimeNonPrime(["30", "83", "33", "-1", "20", "stop"]);
SumPrimeNonPrime(["0", "-9", "0", "stop"]);
