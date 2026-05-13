function ExcellentGrade(number) {
    // Writing a single number to check if the grade is excellent or not
    if (number >= 5.50) { // If the number is equal or higher than 5.50
        // Print to the console 'Excellent'
        console.log('Excellent');
    }
    else { // If the number is lower than 5.50
        // Print to the console 'Not excellent'
        console.log('Not excellent');
    }
}

ExcellentGrade(5.50); // Output: Excellent
ExcellentGrade(4.35); // Output: Not excellent