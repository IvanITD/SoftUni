function cars(input) {
    const cars = {};

    const inner = {
        create(name, inherit, parentName) {
            if (inherit) {
                cars[name] = Object.create(cars[parentName]);
            } else {
                cars[name] = {};
            }
        },
        set(name, key, value) {
            cars[name][key] = value;
        },
        print(name) {
            const result = [];
            for (const key in cars[name]) {
                result.push(`${key}:${cars[name][key]}`);
            }
            console.log(result.join(','));
        }
    };

    for (const line of input) {
        const [command, name, key, value] = line.split(' ');
        inner[command](name, key, value);
    }
}

cars([
    'create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',    
    'print c1',
    'print c2'
]);