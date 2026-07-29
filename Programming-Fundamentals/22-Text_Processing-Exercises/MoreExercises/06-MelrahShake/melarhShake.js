function melrahShake(input) {
    let string = input[0];
    let pattern = input[1];

    while (pattern.length > 0) {
        let first = string.indexOf(pattern);
        let last = string.lastIndexOf(pattern);

        if (first === -1 || first === last || first + pattern.length > last) {
            break;
        }

        string = string.slice(0, last) + string.slice(last + pattern.length);
        string = string.slice(0, first) + string.slice(first + pattern.length);


        console.log(`Shaked it.`);

        let mid = Math.floor(pattern.length / 2);
        pattern = pattern.slice(0, mid) + pattern.slice(mid + 1);
    }

    console.log('No shake.');
    console.log(string);
}

melrahShake(['astalavista baby', 'sta']);
console.log('--------------------------------');
melrahShake(['##mtm!!mm.mm*mtm.#', 'mtm']);