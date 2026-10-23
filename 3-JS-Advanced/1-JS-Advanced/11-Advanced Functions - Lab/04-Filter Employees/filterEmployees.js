function filterEmployees(data, criteria) {
    const employees = JSON.parse(data);

    let filtered = employees;
    if (criteria !== 'all') {
        const [key, value] = criteria.split('-');
        filtered = employees.filter(employee => employee[key] === value);
    }

    for (let i = 0; i < filtered.length; i++) {
        const e = filtered[i];
        console.log(`${i}. ${e.first_name} ${e.last_name} - ${e.email}`);
    }
}


filterEmployees(`
[{ "id": "1", "first_name": "Ardine", "last_name": "Bassam", "email": "abassam0@cnn.com", "gender": "Female" },
{ "id": "2", "first_name": "Kizzee", "last_name": "Jost", "email": "kjost1@forbes.com", "gender": "Female" }, 
{ "id": "3", "first_name": "Evanne", "last_name": "Maldin", "email": "emaldin2@hostgator.com", "gender": "Male" }]`, 'gender-Female'
);

console.log('--------------------------------');

filterEmployees(`
[{ "id": "1", "first_name": "Kaylee", "last_name": "Johnson", "email": "k0@cnn.com", "gender": "Female" },
{"id": "2", "first_name": "Kizzee", "last_name": "Johnson", "email": "kjost1@forbes.com", "gender": "Female" },
{"id": "3","first_name": "Evanne", "last_name": "Maldin", "email": "emaldin2@hostgator.com", "gender": "Male" }, { "id": "4", "first_name": "Evanne", "last_name": "Johnson", "email": "ev2@hostgator.com", "gender": "Male" }]`, 'last_name-Johnson'
);