function passwordValidator(password) {
    let isValidLength = true;
    let isValidChar = true;
    let isValid2Number = true;
    let digitCount = 0;
    let correctPassCount = 0;
    
    
    passwordCorrectnessLogicSystem();

    passwordCorrectnessMessageSystem();


    function passwordCorrectnessLogicSystem() {
        if (password.length < 6 || password.length > 10) {isValidLength = false; correctPassCount++;}
    
    for (let i = 0; i < password.length; i++) {
        
        let charCode = password[i].charCodeAt(0);

        let isLetter = (charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122);
        let isDigit = charCode >= 48 && charCode <= 57;
        
        if (!isLetter && !isDigit) {isValidChar = false; correctPassCount++;}


        if (isDigit) {digitCount++;}
    }

    if (digitCount < 2) {isValid2Number = false; correctPassCount++;}

    }

    function passwordCorrectnessMessageSystem() {
        if (!isValidLength) {console.log("Password must be between 6 and 10 characters");}
        if (!isValidChar) {console.log("Password must consist only of letters and digits");}
        if (!isValid2Number) {console.log("Password must have at least 2 digits");}
        if (correctPassCount === 0) {console.log("Password is valid");}
    }
}

passwordValidator('logIn');
console.log();
passwordValidator('MyPass123');
console.log();
passwordValidator('Pa$s$s');