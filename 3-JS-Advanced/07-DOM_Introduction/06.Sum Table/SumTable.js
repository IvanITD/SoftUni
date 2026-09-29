function sumTable() {
    const rows = document.querySelectorAll('table tbody tr');
    let totalSum = 0;
    for (let i = 1; i < rows.length; i++) {
        const cols = rows[i].querySelectorAll('td');
        const cost = cols[1].textContent;
        totalSum += Number(cost);
    }
    document.getElementById('sum').textContent = totalSum;
    return totalSum;
}