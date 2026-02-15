function projectsCreation (architectName, projectsAmount) {
    let hoursNeeded = projectsAmount * 3;
    console.log(`The architect ${architectName} will need ${hoursNeeded} hours to complete ${projectsAmount} project/s.`);
}

projectsCreation("George", 4);
projectsCreation("Sanya", 9);