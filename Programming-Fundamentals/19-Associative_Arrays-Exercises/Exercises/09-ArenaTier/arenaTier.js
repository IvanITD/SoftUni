function arenaTier(arr) {
    let gladiators = new Map();

    function getTotalSkill(techniquesMap) {
        let sum = 0;
        for (let skill of techniquesMap.values()) {
            sum += skill;
        }
        return sum;
    }

    for (let line of arr) {
        if (line === 'Ave Cesar') {
            break;
        }

        if (line.includes(' -> ')) {
            let [name, technique, skill] = line.split(' -> ');
            skill = Number(skill);

            if (!gladiators.has(name)) {
                gladiators.set(name, new Map());
            }

            let techniques = gladiators.get(name);
            if (!techniques.has(technique) || skill > techniques.get(technique)) {
                techniques.set(technique, skill);
            }
        } else if (line.includes(' vs ')) {
            let [name1, name2] = line.split(' vs ');

            if (!gladiators.has(name1) || !gladiators.has(name2)) {
                continue;
            }

            let techniques1 = gladiators.get(name1);
            let techniques2 = gladiators.get(name2);

            let hasCommonTechnique = [...techniques1.keys()].some(t => techniques2.has(t));
            if (!hasCommonTechnique) {
                continue;
            }

            let totalSkill1 = getTotalSkill(techniques1);
            let totalSkill2 = getTotalSkill(techniques2);

            if (totalSkill1 > totalSkill2) {
                gladiators.delete(name2);
            } else if (totalSkill2 > totalSkill1) {
                gladiators.delete(name1);
            }
        }
    }

    let sortedGladiators = [...gladiators].sort(
        (a, b) => getTotalSkill(b[1]) - getTotalSkill(a[1]) || a[0].localeCompare(b[0])
    );

    for (let [name, techniques] of sortedGladiators) {
        let total = getTotalSkill(techniques);
        console.log(`${name}: ${total} skill`);

        let sortedTechniques = [...techniques].sort(
            (a, b) => b[1] - a[1] || a[0].localeCompare(b[0])
        );

        for (let [technique, skill] of sortedTechniques) {
            console.log(`- ${technique} <!> ${skill}`);
        }
    }
}

arenaTier([
    'Peter -> BattleCry -> 400',
    'Alex -> PowerPunch -> 300',
    'Stefan -> Duck -> 200',
    'Stefan -> Tiger -> 250',
    'Ave Cesar'
]);
console.log('--------------------------------');
arenaTier([
    'Peter -> Duck -> 400',
    'Julius -> Shield -> 150',
    'Gladius -> Heal -> 200',
    'Gladius -> Support -> 250',
    'Gladius -> Shield -> 250',
    'Peter vs Gladius',
    'Gladius vs Julius',
    'Gladius vs Maximilian',
    'Ave Cesar'
]);
