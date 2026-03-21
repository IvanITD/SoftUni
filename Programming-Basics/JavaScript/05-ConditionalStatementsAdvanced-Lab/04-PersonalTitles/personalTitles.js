function PersonalTitles(age, gender) {
    // Start by checking the age and then the gender
    if (age >= 16) {
        if (gender === 'm') {
            console.log("Mr.");
        }
        else if (gender === 'f') {
            console.log("Ms.");
        }
    }
    else if (age < 16) {
        if (gender === 'm') {
            console.log("Master");
        }
        else if (gender === 'f') {
            console.log("Miss");
        }
    }
}

PersonalTitles(12, "f");
PersonalTitles(17, "m");
PersonalTitles(25, "f");
PersonalTitles(13.5, "m");