function DepositCalculator(depositSum, depositTerm, annualInterestRate) {
    let builtUpTax = depositSum * (annualInterestRate / 100);
    let taxPerMonth = builtUpTax / 12; // 12 equals the number of months in a year
    let totalSum = depositSum + depositTerm * taxPerMonth;
    
    console.log(totalSum);
}

DepositCalculator(200, 3, 5.7)
DepositCalculator(2350, 6, 7)