function VacationBooksList(totalPages, pagesPerHour, days) {
    let hoursToRead = totalPages / pagesPerHour;
    let neededHoursPerDay = hoursToRead / days;

    console.log(neededHoursPerDay);
}

VacationBooksList(212, 20, 2);
VacationBooksList(432, 15, 4);