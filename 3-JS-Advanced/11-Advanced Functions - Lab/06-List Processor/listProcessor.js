function listProcessor(data) {
    let list = [];

    const inner = {
        add(item) {
            list.push(item);
        },
        remove(item) {
            list = list.filter(i => i !== item);
        },
        print() {
            console.log(list.join(','));
        }
    };

    for (const line of data) {
        const [command, value] = line.split(' ');
        inner[command](value);
    }

    return inner;
}

listProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print']);

console.log('--------------------------------');

listProcessor(['add pesho', 'add george', 'add peter', 'remove peter','print']);