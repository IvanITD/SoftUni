function Password(array) {
    // Created variables for later use
    let username = array[0];
    let password = array[1];
    let data = array[2];
    let index = 3;

    // Check the password
    while (data != password) {
        data = array[index];
        index++;
    }
    console.log(`Welcome ${username}!`);
}

Password(["Nakov", "1234", "Pass", "1324", "1234"]);
Password(["Gosho", "secret", "secret"]);