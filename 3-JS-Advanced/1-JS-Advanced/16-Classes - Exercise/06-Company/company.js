class Company {
    constructor() {
        this.departments = {};
    }

    addEmployee(name, salary, position, department) {
        const values = [name, salary, position, department];

        if (values.some(value => value === '' || value === undefined || value === null || salary < 0)) {
            throw new Error('Invalid input!');
        }

        if (!this.departments[department]) {
            this.departments[department] = [];
        }

        this.departments[department].push({ name, salary, position });

        return `New employee is hired. Name: ${name}. Position: ${position}`;
    }

    bestDepartment() {
        let bestName = '';
        let bestAverage = 0;

        for (const department in this.departments) {
            const employees = this.departments[department];
            const total = employees.reduce((sum, employee) => sum + employee.salary, 0);
            const average = total / employees.length;

            if (average > bestAverage) {
                bestAverage = average;
                bestName = department;
            }
        }

        const employees = this.departments[bestName].sort((a, b) => {
            return b.salary - a.salary || a.name.localeCompare(b.name);
        });

        const lines = [
            `Best Department is: ${bestName}`,
            `Average salary: ${bestAverage.toFixed(2)}`
        ];

        for (const employee of employees) {
            lines.push(`${employee.name} ${employee.salary} ${employee.position}`);
        }

        return lines.join('\n');
    }
}


let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
