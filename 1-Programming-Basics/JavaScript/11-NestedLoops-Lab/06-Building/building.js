function Building(floors, rooms) {
    for (let i = floors; i > 0; i--) {
        let line = "";
        for (let j = 0; j < rooms; j++) {
            if (i == floors) {
                line += `L${i}${j} `;
            }
            else if (i % 2 == 0) {
                line += `O${i}${j} `;
            }
            else {
                line += `A${i}${j} `;
            }
        }
        console.log(line.trim());
    }
}

Building(6, 4);
Building(9, 5);
Building(4, 4);