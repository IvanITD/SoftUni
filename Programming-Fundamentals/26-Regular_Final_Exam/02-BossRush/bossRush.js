function bossRush(input) {
    let n = Number(input[0]);

    for (let i = 1; i <= n; i++) {
        let line = input[i];
        let parts = line.split(':');

        if (parts.length !== 2) {
            console.log('Access denied!');
            continue;
        }

        let namePart = parts[0];
        let titlePart = parts[1];

        let isNameValid = /^\|[A-Z]{4,}\|$/.test(namePart);
        let isTitleValid = /^#[A-Za-z]+\s[A-Za-z]+#$/.test(titlePart);

        if (isNameValid && isTitleValid) {
            let name = namePart.slice(1, -1);
            let title = titlePart.slice(1, -1);

            console.log(`${name}, The ${title}`);
            console.log(`>> Strength: ${name.length}`);
            console.log(`>> Armor: ${title.length}`);
        } else {
            console.log(`Access denied!`);
        }
    }
}

bossRush(['3', '|PETER|:#Lead architect#', '|GEORGE|:#High Overseer#', '|ALEX|:#Assistant Game Developer#']);
console.log('--------------------------------');
bossRush(['3', '|STEFAN|:#H1gh Overseer#', '|IVAN|:#Master detective#', '|KARL|: #Marketing lead#']);