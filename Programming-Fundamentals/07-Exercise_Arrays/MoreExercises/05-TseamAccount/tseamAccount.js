function tseamAccount(arr) {
    let games = arr.shift().split(' ');

    for (let i = 0; i < arr.length; i++) {
        let tokens = arr[i].split(' ');
        let command = tokens[0];
        let game = tokens[1];

        switch (command) {
            case 'Install':
                if (!games.includes(game)) {
                    games.push(game);
                }
            break;
            case 'Uninstall':
                if (games.includes(game)) {
                    let index = games.indexOf(game);
                    games.splice(index, 1);
                }
            break;
            case 'Update':
                if (games.includes(game)) {
                    let index = games.indexOf(game);
                    games.splice(index, 1);
                    games.push(game);
                }
            break;
            case 'Expansion':
                let expansionTokens = game.split('-');
                let expansionGame = expansionTokens[0];
                let expansion = expansionTokens[1];

                if (games.includes(expansionGame)) {
                    let index = games.indexOf(expansionGame);
                    let expansionName = `${expansionGame}:${expansion}`;
                    games.splice(index + 1, 0, expansionName);
                }
            break;
            case 'Play!':
            break;
        }
    }
    console.log(games.join(' '));
}

tseamAccount(['CS WoW Diablo', 'Install LoL', 'Uninstall WoW', 'Update Diablo', 'Expansion CS-Go', 'Play!']);
tseamAccount(['CS WoW Diablo', 'Uninstall XCOM', 'Update PeshoGame', 'Update WoW', 'Expansion Civ-V', 'Play!']);