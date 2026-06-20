function buildAWall(arr) {
    let sections = arr.map(Number);

    let dailyConcrete = [];

    while (sections.some(section => section < 30)) {
        let crewsWorking = 0;
        
        for (let i = 0; i < sections.length; i++) {
            if (sections[i] < 30) {
                sections[i]++;
                crewsWorking++;
            }
        }

        dailyConcrete.push(crewsWorking * 195);
    }

    console.log(dailyConcrete.join(', '));
    let totalConcrete = dailyConcrete.reduce((a, b) => a + b, 0);
    console.log(totalConcrete * 1900 + ' pesos');
}

buildAWall([21, 25, 28]);
console.log();
buildAWall([17]);
console.log();
buildAWall([17, 22, 17, 19, 17]);