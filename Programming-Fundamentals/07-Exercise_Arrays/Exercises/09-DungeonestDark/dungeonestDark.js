function DungeonestDark(string) {
    let rooms = string.split('|');
    let initialHealth = 100;
    let initialCoins = 0;

    for (let i = 0; i < rooms.length; i++) {
        let command = rooms[i].split(' ');
        let value = Number(command[1]);

        if (command[0] === 'potion') {
            if (initialHealth + value > 100) {
                value = 100 - initialHealth;
            }
            initialHealth += value;
            console.log(`You healed for ${value} hp.`);
            console.log(`Current health: ${initialHealth} hp.`);
        }
        else if (command[0] === 'chest') {
            initialCoins += value;
            console.log(`You found ${value} coins.`);
        }
        else {
            initialHealth -= value;
            if (initialHealth > 0) {
                console.log(`You slayed ${command[0]}.`);
            }
            else if (initialHealth <= 0) {
                console.log(`You died! Killed by ${command[0]}.`);
                console.log(`Best room: ${i + 1}`);
                return;
            }
        }
    }
    console.log(`You've made it!`);
    console.log(`Coins: ${initialCoins}`);
    console.log(`Health: ${initialHealth}`);
}

DungeonestDark("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000");
DungeonestDark("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110");