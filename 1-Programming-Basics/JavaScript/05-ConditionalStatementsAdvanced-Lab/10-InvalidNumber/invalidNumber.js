function InvalidNumber(number) {
    if (number >= 100 && number <= 200 || number === 0) {
    }
    else {
        console.log("invalid");
    }
}

InvalidNumber(75);
InvalidNumber(150);
InvalidNumber(220);
InvalidNumber(199);
InvalidNumber(-1);
InvalidNumber(100);
InvalidNumber(200);
InvalidNumber(0);