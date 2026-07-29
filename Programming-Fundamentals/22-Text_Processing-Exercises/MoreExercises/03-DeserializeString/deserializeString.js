function deserializeString(lines) {
    let maxIndex = 0;

    for (let line of lines) {
        if (line === 'end') break;

        let indexesPart = line.split(':')[1];
        let indexes = indexesPart.split('/').map(Number);

        for (let index of indexes) {
            if (index > maxIndex) {
                maxIndex = index;
            }
        }
    }

    let result = new Array(maxIndex + 1);

    for (let line of lines) {
        if (line === 'end') break;

        let char = line.split(':')[0];
        let indexesPart = line.split(':')[1];
        let indexes = indexesPart.split('/').map(Number);

        for (let index of indexes) {
            result[index] = char;
        }
    }

    console.log(result.join(''));
}

deserializeString(['a:0/2/4/6', 'b:1/3/5', 'end']);
console.log('--------------------------------');
deserializeString(['a:0/3/5/11', 'v:1/4', 'j:2', 'm:6/9/15', 's:7/13', 'd:8/14', 'c:10', 'l:12', 'end']);