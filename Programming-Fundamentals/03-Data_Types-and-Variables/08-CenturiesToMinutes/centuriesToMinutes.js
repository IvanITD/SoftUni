function CenturiesToMinutes(centuries) {
    let years = centuries * 100;
    let days = years * 365.2422;
    days = Math.trunc(days);

    let hours = days * 24;
    let minutes = hours * 60;

    console.log(`${centuries} centuries = ${years} years = ${days} days = ${hours} hours = ${minutes} minutes`);
}

CenturiesToMinutes(1);
CenturiesToMinutes(5);