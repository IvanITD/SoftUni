function gladiatorExpenses(lostFightsCount, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let helmetDamaged = 0;
    let swordDamaged = 0;
    let shieldDamaged = 0;
    let armorDamaged = 0;

    let shieldBreaksCount = 0;
    
    for (let fights = 1; fights <= lostFightsCount; fights++) {
        if (fights % 2 === 0) {
            helmetDamaged++;
        }

        if (fights % 3 === 0) {
            swordDamaged++;
        }

        if (fights % 2 === 0 && fights % 3 === 0) {
            shieldDamaged++;
            shieldBreaksCount++;
        }

        if (shieldBreaksCount === 2) {
            armorDamaged++;
            shieldBreaksCount = 0;
        }
    }
    let sum = (helmetDamaged * helmetPrice) + (swordDamaged * swordPrice) + (shieldDamaged * shieldPrice) + (armorDamaged * armorPrice);
    console.log(`Gladiator expenses: ${sum.toFixed(2)} aureus`);
}

gladiatorExpenses(7, 2, 3, 4, 5);
gladiatorExpenses(23, 12.50, 21.50, 40, 200);