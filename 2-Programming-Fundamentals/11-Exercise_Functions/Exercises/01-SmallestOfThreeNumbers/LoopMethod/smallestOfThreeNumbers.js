function smallestOfThreeNumbers (num1, num2, num3) {    
    let smallestNum = num1;

    if (num2 < num1 && num2 < num3) {smallestNum = num2;}
    else if (num3 < num1 && num3 < num2) {smallestNum = num3;}

    console.log(smallestNum);
}

smallestOfThreeNumbers(2, 5, 3);
smallestOfThreeNumbers(600,342, 123);
smallestOfThreeNumbers(25, 21, 4);
smallestOfThreeNumbers(2, 2, 2);