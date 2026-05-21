function RequiredReading(numberOfPages, pagesPerHour, numberOfDays) {
    let readingTime = numberOfPages / pagesPerHour;
    let requiredHoursPerDay = readingTime / numberOfDays;
    console.log(requiredHoursPerDay);
}

RequiredReading(212, 20 , 2);
RequiredReading(434, 15, 4);