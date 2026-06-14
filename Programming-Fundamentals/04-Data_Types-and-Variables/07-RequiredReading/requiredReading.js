function requiredReading(numberOfPages, pagesPerHour, numberOfDays) {
    let readingTime = numberOfPages / pagesPerHour;
    let requiredHoursPerDay = readingTime / numberOfDays;
    console.log(requiredHoursPerDay);
}

requiredReading(212, 20 , 2);
requiredReading(434, 15, 4);