function ExamPreparation(array) {
    // Create a variable to take the user input
    let failedThreshold = parseInt(array[0]);

    // Variables for later use in the while loop
    let failedTimes = 0;
    let solvedProblemsCount = 0;
    let gradeSum = 0;
    let index = 1;

    // Variables for the last problem and if the student is failed
    let lastProblem = "";
    let isFailed = true;

    // While loop that will continue until the student is failed
    while (failedTimes < failedThreshold) {
        let problemName = array[index];
        index++;

        if (problemName == "Enough") {
            isFailed = false;
            break;
        }
        let grade = parseInt(array[index]);
        index++;

        gradeSum += grade;
        if (grade <= 4) { // If the grade is below 4, the student failed the problem
            failedTimes++;
        }
        solvedProblemsCount++;
        lastProblem = problemName;
    }

    if (isFailed) {
        // Print to the console
        console.log(`You need a break, ${failedTimes} poor grades.`);
    }
    else {
        // Print to the console
        console.log(`Average score: ${(gradeSum / solvedProblemsCount).toFixed(2)}`);
        console.log(`Number of problems: ${solvedProblemsCount}`);
        console.log(`Last problem: ${lastProblem}`);
    }
}

ExamPreparation(["3", "Money", "6", "Story", "4", "Spring Time", "5", "Bus", "6", "Enough"]);
ExamPreparation(["2", "Income", "3", "Game Info", "6", "Best Player", "4"]);