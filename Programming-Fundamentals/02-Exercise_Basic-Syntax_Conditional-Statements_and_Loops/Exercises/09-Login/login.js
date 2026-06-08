function login(arr) {
    let username = arr[0];
    let password = username.split('').reverse().join('');
    let wrongPassCounter = 0;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === password) {
            console.log(`User ${username} logged in.`);
            break;
        }
        else {
            wrongPassCounter++;
            if (wrongPassCounter === 4) {
                console.log(`User ${username} blocked!`);
                break;
            }
            console.log(`Incorrect password. Try again.`);
        }
    }
}

login(['Acer','login','go','let me in','recA']);
login(['momo','omom']);
login(['sunny','rainy','cloudy','sunny','not sunny']);