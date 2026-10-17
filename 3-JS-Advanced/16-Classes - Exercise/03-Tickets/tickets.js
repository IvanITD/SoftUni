function tickets(ticketDescriptions, sortingCriteria) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
    }

    const allTickets = ticketDescriptions.map(line => {
        const [destination, price, status] = line.split('|');
        return new Ticket(destination, price, status);
    });

    return allTickets.sort((a, b) => {
        if (sortingCriteria === 'price') {
            return a.price - b.price;
        }

        return a[sortingCriteria].localeCompare(b[sortingCriteria]);
    });
}

console.log(tickets([
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination'
));