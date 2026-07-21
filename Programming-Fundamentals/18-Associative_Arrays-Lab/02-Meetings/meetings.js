function meetings(arr) {
    let meetings = {};

    for (let line of arr) {
        let [weekday, person] = line.split(" ");

        if (meetings[weekday]) {
            console.log(`Conflict on ${weekday}!`);
            continue;
        }
        meetings[weekday] = person;
        console.log(`Scheduled for ${weekday}`);
    }

    for (let weekday in meetings) {
        console.log(`${weekday} -> ${meetings[weekday]}`);
    }

}

meetings(['Monday Peter', 'Wednesday Bill', 'Monday Tim', 'Friday Tim']);
console.log("--------------------------------");
meetings(['Friday Bob', 'Saturday Ted', 'Monday Bill', 'Monday John', 'Wednesday George']);

