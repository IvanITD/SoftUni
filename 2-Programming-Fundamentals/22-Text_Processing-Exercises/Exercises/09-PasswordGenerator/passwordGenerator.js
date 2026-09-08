function passwordGenerator(arr) {
    let combined = arr[0] + arr[1];
    let vowels = 'aeiouAEIOU';

    let replaceChars = arr[2];
    let replaceIndex = 0;
    let result = '';

    for (let i = 0; i < combined.length; i++) {
        let char = combined[i];

        if (vowels.includes(char)) {
            result += replaceChars[replaceIndex].toUpperCase();
            replaceIndex++;

            if (replaceIndex >= replaceChars.length) {
                replaceIndex = 0;
            }
        } else {
            result += char;
        }
    }

    result = result.split('').reverse().join('');
    console.log(`Your generated password is ${result}`);
}

passwordGenerator(['ilovepizza', 'ihatevegetables', 'orange']);
console.log('--------------------------------');
passwordGenerator(['easymoneyeazylife', 'atleasttencharacters', 'absolute']);
console.log('--------------------------------');
passwordGenerator(['areyousureaboutthisone', 'notquitebutitrustyou', 'disturbed']);