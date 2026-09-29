function generateReport() {
    let tableHeaderRef = document.querySelectorAll("thead tr th");
    let tableRowRef = document.querySelectorAll("tbody tr");
    let outputRef = document.getElementById("output");

    let headerToDisplay = new Map();
    let tableHeaderArr = Array.from(tableHeaderRef);
    for (let i = 0; i < tableHeaderArr.length; i++) {
        let checkbox = tableHeaderArr[i].querySelector("input");
        if (checkbox.checked) {
            headerToDisplay.set(i, checkbox.name);
        }
    }

    let result = [];
    let rows = Array.from(tableRowRef);
    for (let row of rows) {
        let rowData = {};
        for (let [colIndex, key] of headerToDisplay) {
            rowData[key] = row.cells[colIndex].textContent;
        }
        result.push(rowData);
    }

    outputRef.value = JSON.stringify(result);
}
