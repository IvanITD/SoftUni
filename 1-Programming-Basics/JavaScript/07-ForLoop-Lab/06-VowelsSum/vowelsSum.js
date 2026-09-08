function VowelsSum(text) {
    // Create a variable for later use
    let sum = 0;

    // Check to see if the letter is a vowel and if yes, add the value to the sum
    for (let i = 0; i < text.length; i++) {
        let letter = text[i];

        switch (letter) {
            case 'a':
                sum +=1;
                break;
            
            case 'e':
                sum += 2;
                break;

            case 'i':
                sum +=3;
                break;

            case 'o':
                sum +=4;
                break;

            case 'u':
                sum +=5;
                break;
        }
    }

    // Print the result to the console
    console.log(sum);
}

VowelsSum("hello");
VowelsSum("hi");
VowelsSum("bamboo");
VowelsSum("beer");