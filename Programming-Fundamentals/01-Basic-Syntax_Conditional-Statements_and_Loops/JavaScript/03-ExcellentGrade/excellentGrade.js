function excellentGrade(number) {
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

excellentGrade(5.50); // Output: Excellent
excellentGrade(4.35); // Output: Not excellent