function Repainting(neededNaylonM2, neededPaintLiters, neededDiluentLiters, workerNeededHours, ) {
    // Item prices
    const coveringNaylonM2 = 1.50;
    const paintPerLiter = 14.50;
    const diluentPerLiter = 5.00;

    // Rumen also wants to add 10% to the paint and 2M2 for the naylon, and 0.40 for the bags
    const morePaint = neededPaintLiters * (10 / 100);
    const moreNaylon = 2;
    const bags = 0.40;

    // Calculations
    let naylonPrice = (neededNaylonM2 + moreNaylon) * coveringNaylonM2;
    let paintPrice = (neededPaintLiters + morePaint) * paintPerLiter;
    let diluentPrice = neededDiluentLiters * diluentPerLiter;

    // Total price for materials
    let totalPriceWithoutWorkers = naylonPrice + paintPrice + diluentPrice + bags;

    // Price for workers
    let workersPrice = totalPriceWithoutWorkers * (30 / 100) * workerNeededHours;

    // Total project price
    let totalProjectPrice = totalPriceWithoutWorkers + workersPrice;

    // Print to the console
    console.log(totalProjectPrice);
}

Repainting(10, 11, 4, 8);
Repainting(5, 10, 10, 1);