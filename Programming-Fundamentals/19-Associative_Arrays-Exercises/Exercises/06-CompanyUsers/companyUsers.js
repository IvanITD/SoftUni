function companyUsers(arr) {
    let companies = new Map();

    for (let line of arr) {
        let [company, id] = line.split(' -> ');

        if (!companies.has(company)) {
            companies.set(company, new Set());
        }
        companies.get(company).add(id);
    }

    let sorted = [...companies.keys()].sort();
    for (let company of sorted) {
        console.log(company);
        for (let id of companies.get(company)) {
            console.log(`-- ${id}`);
        }
    }
}

companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
    ]);
console.log("--------------------------------");
companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
    ]);