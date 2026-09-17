function passwordReset(input) {
    let password = input[0];

    for (let i =1; i < input.length; i++) {
        let line = input[i];

        if (line === 'Done') {
            break;
        }

        let parts = line.split(' ');
        let command = parts[0];

        if (command === 'TakeOdd') {
            let result = '';
            for (let j = 1; j < password.length; j += 2) {
                result += password[j];
            }
            password = result;
            console.log(password);
        } else if (command === 'Cut') {
            let index = Number(parts[1]);
            let length = Number(parts[2]);
            let substring = password.substring(index, index + length);
            password = password.replace(substring, '');
            console.log(password);
        } else if (command === 'Substitute') {
            let substring = parts[1];
            let substitute = parts[2];
            if (password.includes(substring)) {
                password = password.split(substring).join(substitute);
                console.log(password);
            } else {
                console.log('Nothing to replace!');
            }
        }
    }
    console.log(`Your password is: ${password}`);
}

passwordReset((["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr", "TakeOdd", "Cut 15 3", "Substitute :: -", "Substitute | ^", "Done"]))
console.log('--------------------------------');
passwordReset((["up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy", "TakeOdd", "Cut 18 2", "Substitute ! ***", "Substitute ? .!.", "Done"]));