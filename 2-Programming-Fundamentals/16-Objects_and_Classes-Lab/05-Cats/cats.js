function cats(arr) {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }
    
    let cats = [];
    for (let cat of arr) {
        let [name, age] = cat.split(" ");
        cats.push(new Cat(name, age));
    }
    for (let cat of cats) {
        cat.meow();
    }
}

cats(['Mellow 2', 'Tom 5']);
console.log("--------------------------------");
cats(['Candy 1', 'Poppy 3', 'Nyx 2']);