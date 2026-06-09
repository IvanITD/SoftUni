function formatGrade(grade) {
    let gradeAnswer = '';
    
    if (grade < 3.00) {
        gradeAnswer = "Fail";
        grade = 2;

        console.log(`${gradeAnswer} (${grade})`);
    }
    else if (grade >= 3.00 && grade < 3.50) {
        gradeAnswer = "Poor";

        console.log(`${gradeAnswer} (${grade.toFixed(2)})`);
    }
    else if (grade >= 3.50 && grade < 4.50) {
        gradeAnswer = "Good";

        console.log(`${gradeAnswer} (${grade.toFixed(2)})`);
    }
    else if (grade >= 4.50 && grade < 5.50) {
        gradeAnswer = "Very good";

        console.log(`${gradeAnswer} (${grade.toFixed(2)})`);
    }
    else if (grade >= 5.50) {
        gradeAnswer = "Excellent";

        console.log(`${gradeAnswer} (${grade.toFixed(2)})`);
    }

    
}

formatGrade(3.33);
formatGrade(4.50);
formatGrade(2.99);