function Graduation(array) {
    let name = array[0];
    let sumOfGrades = 0;
    let numberOfGrades = 0;
    let index = 1;

    while (true) {
        let grade = parseFloat(array[index]);
        index++;

        if (grade < 4) {
            console.log(`${name} has been excluded at ${numberOfGrades + 1} grade`);
            break;
        }

        sumOfGrades += grade;

        numberOfGrades++;

        if (numberOfGrades == 12) {
            console.log(`${name} graduated. Average grade: ${(sumOfGrades / numberOfGrades).toFixed(2)}`);
            break;
        }
    }
}

Graduation(["Gosho", "5", "5.5", "6", "5.43", "5.5", "6", "5.55", "5", "6", "6", "5.43", "5"]);
Graduation(["Mimi", "5", "6", "5", "6", "5", "6", "6", "2", "3"]);