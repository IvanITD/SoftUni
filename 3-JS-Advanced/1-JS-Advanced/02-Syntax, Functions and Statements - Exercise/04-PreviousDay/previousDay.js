function previousDay(year, month, day) {
    let date = new Date(year, month - 1, day - 1);
    let myYear = date.getFullYear();
    let myMonth = date.getMonth() + 1;
    let myDay = date.getDate();

    console.log(`${myYear}-${myMonth}-${myDay}`);
}

previousDay(2016, 9, 30);
console.log('---');
previousDay(2015, 5, 10);
console.log('---');