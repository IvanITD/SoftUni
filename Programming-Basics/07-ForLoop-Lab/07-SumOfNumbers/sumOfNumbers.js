function SumOfNumber(text) {
    // Create a variable for later use
    let sum = 0;

    // Check the numbered letter and sum depending on the number
    for (let i = 0; i < text.length; i++) {
        let letter = text[i];

        switch (letter) {
            case '1':
                sum+=1;
                break;

            case '2':
                sum+=2;
                break;

            case '3':
                sum+=3;
                break;

            case '4':
                sum+=4;
                break;

            case '5':
                sum+=5;
                break;

            case '6':
                sum+=6;
                break;

            case '7':
                sum+=7;
                break;

            case '8':
                sum+=8;
                break;

            case '9':
                sum+=9;
                break;
        }
    }

    // Print the result to the console
    console.log(`The sum of the digits is:${sum}`);
}

SumOfNumber("1234");
SumOfNumber("564891");