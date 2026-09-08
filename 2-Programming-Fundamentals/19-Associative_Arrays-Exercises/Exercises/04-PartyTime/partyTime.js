function partyTime(arr) {
    let vip = [];
    let regular = [];

    while (arr[0] !== 'PARTY') {
        let guest = arr.shift();

        if (guest[0] >= '0' && guest[0] <= '9') {
            vip.push(guest);
        } else {
            regular.push(guest);
        }
    }

    for (let guest of arr) {
        let vipIndex = vip.indexOf(guest);
        if (vipIndex !== -1) {
            vip.splice(vipIndex, 1);
            continue;
        }
        let regIndex = regular.indexOf(guest);
        if (regIndex !== -1) {
            regular.splice(regIndex, 1);
        }
    }
    console.log(vip.length + regular.length);

    for (let guest of vip) {
        console.log(guest);
    }
    for (let guest of regular) {
        console.log(guest);
    }
}

partyTime(['7IK9Yo0h', '9NoBUajQ', 'Ce8vwPmE', 'SVQXQCbc', 'tSzE5t0p', 'PARTY', '9NoBUajQ', 
    'Ce8vwPmE', 'SVQXQCbc']);
console.log("--------------------------------");
partyTime(['m8rfQBvl', 'fc1oZCE0', 'UgffRkOn', '7ugX7bm0', '9CQBGUeJ', '2FQZT3uC', 'dziNz78I', 
    'mdSGyQCJ', 'LjcVpmDL', 'fPXNHpm1', 'HTTbwRmM', 'B5yTkMQi', '8N0FThqG', 'xys2FYzn', 'MDzcM9ZK', 
    'PARTY', '2FQZT3uC', 'dziNz78I', 'mdSGyQCJ', 'LjcVpmDL', 'fPXNHpm1', 'HTTbwRmM', 'B5yTkMQi', 
    '8N0FThqG', 'm8rfQBvl', 'fc1oZCE0', 'UgffRkOn', '7ugX7bm0', '9CQBGUeJ']);