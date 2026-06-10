function palindromeIntegers(arr) {
    let isPalindrome = true;

    for (let i = 0; i < arr.length; i++) {
        let index = arr[i]
        let reversedIndex = String(arr[i]).split('').reverse().join('');
        
        reversedIndex = Number(reversedIndex);

        if (index !== reversedIndex) {
            isPalindrome = false;
        }
        else {
            isPalindrome = true;
            
        }

        console.log(isPalindrome);
    }

    
}

palindromeIntegers([123,323,421,121]);
console.log();
palindromeIntegers([32,2,232,1010]);