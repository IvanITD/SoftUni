function radioCrystals(arr) {
    let neededThickness = arr[0];  

    function cut(x) { return x / 4; }
    function lap(x) { return x - x * 0.2; }
    function grind(x) { return x - 20; }
    function etch(x) { return x - 2; }
    function xray(x) { return x + 1; }
    
    for (let i = 1; i < arr.length; i++) {  
        let currentThickness = arr[i];       
        console.log(`Processing chunk ${currentThickness} microns`);

        while (currentThickness !== neededThickness) {
            let cutCount = 0;
            let lapCount = 0;
            let grindCount = 0;
            let etchCount = 0;

            while ((currentThickness / 4) >= neededThickness) {
                currentThickness = cut(currentThickness);
                cutCount++;
            }
            if (cutCount > 0) {
                console.log(`Cut x${cutCount}`);
                console.log(`Transporting and washing`);
                currentThickness = Math.floor(currentThickness);
            }

            while ((currentThickness - currentThickness * 0.2) >= neededThickness) {
                currentThickness = lap(currentThickness);
                lapCount++;
            }
            if (lapCount > 0) {
                console.log(`Lap x${lapCount}`);
                console.log(`Transporting and washing`);
                currentThickness = Math.floor(currentThickness);
            }

            while ((currentThickness - 20) >= neededThickness) {
                currentThickness = grind(currentThickness);
                grindCount++;
            }
            if (grindCount > 0) {
                console.log(`Grind x${grindCount}`);
                console.log(`Transporting and washing`);
                currentThickness = Math.floor(currentThickness);
            }

            while ((currentThickness - 2) >= neededThickness - 1) {
                currentThickness = etch(currentThickness);
                etchCount++;
            }
            if (etchCount > 0) {
                console.log(`Etch x${etchCount}`);
                console.log(`Transporting and washing`);
                currentThickness = Math.floor(currentThickness);
            }

            if (currentThickness < neededThickness) {
                currentThickness = xray(currentThickness);
                console.log(`X-ray x1`);
            }
        }
        console.log(`Finished crystal ${neededThickness} microns`);
    }
}

radioCrystals([1375, 50000]);
console.log();
radioCrystals([1000, 4000, 8100]);