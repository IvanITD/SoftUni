function ExcellentResult(grade) {
    if (grade >= 5.50) {
        console.log("Excellent!");
    }
}

ExcellentResult(6); // Excellent!
ExcellentResult(5); // No output
ExcellentResult(5.50); // Excellent!
ExcellentResult(5.49); // No output