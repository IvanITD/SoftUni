function createPerson(firstName, lastName) {
    return {
        firstName,
        lastName,

        get fullName() {
            return `${this.firstName} ${this.lastName}`;
        },

        set fullName(value) {
            const parts = value.split(' ');

            if (parts.length === 2) {
                this.firstName = parts[0];
                this.lastName = parts[1];
            }
        }
    };
}

let person1 = createPerson("Peter", "Ivanov");
console.log(person1.fullName); //Peter Ivanov
person1.firstName = "George";
console.log(person1.fullName); //George Ivanov
person1.lastName = "Peterson";
console.log(person1.fullName); //George Peterson
person1.fullName = "Nikola Tesla";
console.log(person1.firstName); //Nikola
console.log(person1.lastName); //Tesla

console.log("--------------------------------");

let person2 = createPerson("Albert", "Simpson");
console.log(person2.fullName); //Albert Simpson
person2.firstName = "Simon";
console.log(person2.fullName); //Simon Simpson
person2.fullName = "Peter";
console.log(person2.firstName); // Simon
console.log(person2.lastName); // Simpson