function santasSecretHelper(input) {
    let key = Number(input[0]);
    let goodChildren = [];

    for (let i = 1; i < input.length; i++) {
        let line = input[i];

        if (line === 'end') {
            break;
        }

        let decrypted = '';
        for (let j = 0; j < line.length; j++) {
            decrypted += String.fromCharCode(line.charCodeAt(j) - key);
        }

        let pattern = /@(?<name>[A-Za-z]+)[^@\-!:>]*!(?<type>[GN])!/;
        let match = decrypted.match(pattern);

        if (match && match.groups.type === 'G') {
            goodChildren.push(match.groups.name);
        }
    }
    for (let name of goodChildren) {
        console.log(name);
    }
}

santasSecretHelper(['3', 'CNdwhamigyenumje$J$', 'CEreelh-nmguuejnW$J$', 'CVwdq&gnmjkvng$Q$', 'end']);
console.log('--------------------------------');
santasSecretHelper(['3', 'N}eideidmk${mnyenmCNlpamnin$J$', 'ddddkkkkmvkvmCFrqqru-nvevek$J$nmgievnge', 'ppqmkkkmnolmnnCEhq/vkievk$Q$', 'yyegiivoguCYdohqwlqh/kguimhk$J$', 'end']);