function carFactory(obj) {
    let engine = {};
    if (obj.power <= 90) {
        engine.power = 90;
        engine.volume = 1800;
    } else if (obj.power <= 120) {
        engine.power = 120;
        engine.volume = 2400;
    } else if (obj.power <= 200) {
        engine.power = 200;
        engine.volume = 3500;
    }

    let carriage = {};

    if (obj.carriage === 'hatchback') {
        carriage.type = 'hatchback';
        carriage.color = obj.color;
    } else if (obj.carriage === 'coupe') {
        carriage.type = 'coupe';
        carriage.color = obj.color;
    }

    let wheels = [];
    if (obj.wheelsize % 2 === 0) {
        wheels.push(obj.wheelsize - 1);
        wheels.push(obj.wheelsize - 1);
        wheels.push(obj.wheelsize - 1);
        wheels.push(obj.wheelsize - 1);
    } else {
        wheels.push(obj.wheelsize);
        wheels.push(obj.wheelsize);
        wheels.push(obj.wheelsize);
        wheels.push(obj.wheelsize);
    }

    return {
        model: obj.model,
        engine: engine,
        carriage: carriage,
        wheels: wheels
    };
}

console.log(carFactory({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14 
}));
console.log('--------------------------------');
console.log(carFactory(
    {
        model: 'Opel Vectra',
        power: 110,
        color: 'grey',
        carriage: 'coupe',
        wheelsize: 17
}));