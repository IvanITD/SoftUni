function daysInAMonth(month, year) {
    let date = new Date(year, month - 1);
    let days = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    console.log(days);
}

daysInAMonth(1, 2012);
daysInAMonth(2, 2021);