function phoneShop(arr) {
    let phones = arr[0].split(", ");

    for (let i = 1; i < arr.length; i++) {
        let currentCommand = arr[i];

        if (currentCommand === "End") {
            break;
        }

        let tokens = currentCommand.split(" - ");
        let command = tokens[0];
        let phone = tokens[1];

        if (command === "Add") {
            if (!phones.includes(phone)) {
                phones.push(phone);
            }
        } else if (command === "Remove") {
            let index = phones.indexOf(phone);
            
            if (index !== -1) {
                phones.splice(index, 1);
            }
        } else if (command === "Bonus phone") {
            let bonusTokens = phone.split(":");
            let oldPhone = bonusTokens[0];
            let newPhone = bonusTokens[1];
            let index = phones.indexOf(oldPhone);

            if (index !== -1) {
                phones.splice(index + 1, 0, newPhone);
            }
        } else if (command === "Last") {
            let index = phones.indexOf(phone);

            if (index !== -1) {
                phones.splice(index, 1);
                phones.push(phone);
            }
        }
    }
    console.log(phones.join(", "));
}

phoneShop((["SamsungA50, MotorolaG5, IphoneSE", "Add - Iphone10", "Remove - IphoneSE", "End"]));
console.log();
phoneShop((["HuaweiP20, XiaomiNote", "Remove - Samsung", "Bonus phone - XiaomiNote:Iphone5", "End"]));
console.log();
phoneShop((["SamsungA50, MotorolaG5, HuaweiP10", "Last - SamsungA50", "Add - MotorolaG5", "End"]));