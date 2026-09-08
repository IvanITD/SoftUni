function employees(arr) {
    class Employee {
        constructor(name) {
            this.name = name;
            this.personalNumber = name.length;
        }
        print() {
            console.log(`Name: ${this.name} -- Personal Number: ${this.personalNumber}`);
        }
    }
    let employees = [];
    for (let name of arr) {
        employees.push(new Employee(name));
        employees[employees.length - 1].print();
    }
}

employees(['Silas Butler', 'Adnaan Buckley', 'Juan Peterson', 'Brendan Villarreal']);
console.log("--------------------------------");
employees(['Samuel Jackson', 'Will Smith', 'Bruce Willis', 'Tom Holland' ]);