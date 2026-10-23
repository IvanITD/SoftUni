function sumOfNumbersN_MnoExpireTime(n, m) {
  let num1 = Number(n);
  let num2 = Number(m);
  let sum = 0;

  for (let i = num1; i <= num2; i++) {
    sum += i;
  }

  console.log(sum);
}

sumOfNumbersN_MnoExpireTime('1', '5');
sumOfNumbersN_MnoExpireTime('-8', '20');
