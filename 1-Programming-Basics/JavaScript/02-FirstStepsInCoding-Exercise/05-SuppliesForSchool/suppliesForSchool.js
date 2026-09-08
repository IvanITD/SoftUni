function SuppliesForSchool(penPackets, markerPackets, boardCLeanerInLiters, discount) {
    // Price for each task item
    let penPacketPrice = 5.80;
    let markerPacketPrice = 7.20;
    let boardCleanerPricePerLiter = 1.20;

    // Total for each item
    let totalPenPacketPrice = penPackets * penPacketPrice;
    let totalMarkerPacketPrice = markerPackets * markerPacketPrice;
    let totalBoardCleanerPrice = boardCLeanerInLiters * boardCleanerPricePerLiter;

    // Total price without the discount
    let totalPriceWithoutDiscount = totalPenPacketPrice + totalMarkerPacketPrice + totalBoardCleanerPrice;

    // Total price with the discount
    let totalPriceWithDiscount = totalPriceWithoutDiscount - (totalPriceWithoutDiscount * (discount / 100));

    // Print the result
    console.log(totalPriceWithDiscount);
}

SuppliesForSchool(2, 3, 4, 25);
SuppliesForSchool(4,2,5,13);