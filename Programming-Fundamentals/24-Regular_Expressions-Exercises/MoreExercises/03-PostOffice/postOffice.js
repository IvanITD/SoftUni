function postOffice(input) {
    if (Array.isArray(input)) {
        input = input[0];
    }
    
    let [part1, part2, part3] = input.split('|');

    let match1 = part1.match(/([#$%*&])([A-Z]+)\1/);
    let letters = match1[2].split('');

    let lengths = [];
    let pattern2 = /(\d{2}):(\d{2})/g;
    let match2;

    while ((match2 = pattern2.exec(part2)) !== null) {
        lengths.push({
            ascii: Number(match2[1]),
            length: Number(match2[2]) + 1
        });
    }

    let words = part3.split(/\s+/);

    for (let letter of letters) {
        let ascii = letter.charCodeAt(0);
        let targetLength = lengths.find(l => l.ascii === ascii).length;
        let word = words.find(w => w[0] === letter && w.length === targetLength);
        console.log(word);
    }
}

postOffice('sdsGGasAOTPWEEEdas$AOTP$|a65:1.2s65:03d79:01ds84:02! -80:07++ABs90:1.1|adsaArmyd Gara So La Arm Armyw21 Argo O daOfa Or Ti Sar saTheww The Parahaos');
console.log('--------------------------------');
postOffice('Urgent"Message.TO$#POAML#|readData79:05:79:0!2reme80:03--23:11{79:05}tak{65:11ar}!77:!23--)77:05ACCSS76:05ad|Remedy Por Ostream :Istream Post sOffices Office Of Ankh-Morpork MR.LIPWIG Mister Lipwig');
