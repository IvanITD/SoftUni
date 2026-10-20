class Hotel {
    constructor(initialBudget) {
        this.initialBudget = initialBudget;
        this.roomAvailability = {};
        this.supplyStock = {};
    }

    restockSupplies(supplies) {
        const messages = [];

        for (const supply of supplies) {
            const [name, quantityText, priceText] = supply.split(' ');
            const quantity = Number(quantityText);
            const price = Number(priceText);

            if (price <= this.initialBudget) {
                this.initialBudget -= price;

                if (!this.supplyStock[name]) {
                    this.supplyStock[name] = 0;
                }

                this.supplyStock[name] += quantity;
                messages.push(`Successfully stocked ${quantity} ${name}`);
            } else {
                messages.push(`There was not enough money to restock ${quantity} ${name}`);
            }
        }

        return messages.join('\n');
    }

    addRoomType(roomType, neededSupplies, pricePerNight) {
        if (this.roomAvailability[roomType]) {
            return `The ${roomType} is already available in our hotel, try something different.`;
        }

        this.roomAvailability[roomType] = {
            neededSupplies,
            pricePerNight,
        };

        const count = Object.keys(this.roomAvailability).length;
        return `Great idea! Now with the ${roomType}, we have ${count} types of rooms available, any other ideas?`;
    }

    showAvailableRooms() {
        const rooms = Object.entries(this.roomAvailability);

        if (rooms.length === 0){
            return 'Our rooms are not ready yet, please come back later...';
        }

        return rooms
            .map(([roomType, room]) => `${roomType} - $ ${room.pricePerNight}`)
            .join('\n');
    }

    bookRoom(roomType) {
        const room = this.roomAvailability[roomType];

        if (!room) {
            return `There is no ${roomType} available, would you like to book another room?`;
        }

        for (const supply of room.neededSupplies) {
            const [name, quantityText] = supply.split(' ');
            const quantity = Number(quantityText);

            if (!this.supplyStock[name] || this.supplyStock[name] < quantity) {
                return `We are currently unable to accommodate your request for ${roomType}, sorry for the inconvenience.`;
            }
        }

        return `Your booking for ${roomType} has been confirmed! The price is $${room.pricePerNight} per night.`;
    }
}