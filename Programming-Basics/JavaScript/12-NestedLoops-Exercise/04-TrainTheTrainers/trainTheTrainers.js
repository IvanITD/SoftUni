function TrainTheTrainers(array) {
  // Take the user input from the array
  let juryCourt = parseInt(array[0]);

  // Creating variables for later use
  let totalScore = 0.0;
  let presentationCount = 0;
  let index = 1;

  // Creating a string variable so that the User can input the named of the presentation
  let presentationName = array[index];
  index++;

  // Creating a while loop to circle through the presentations
  while (presentationName != "Finish") {
    // Creating a double variable to count the presentationTotal
    let presentationTotal = 0;

    // Receive the scores for the presentations
    for (let i = 0; i < juryCourt; i++) {
      // User inputs the score
      let score = parseFloat(array[index]);
      index++;

      // Adding the score to the total presentation
      presentationTotal += score;
    }

    // Calculate and print the average for this presentation
    let presentationAverage = presentationTotal / juryCourt;
    console.log(`${presentationName} - ${presentationAverage.toFixed(2)}.`);

    // Updating the total score
    totalScore += presentationAverage;
    presentationCount++;

    // Receiving the next presentation name from the User
    presentationName = array[index];
    index++;
  }
  // Calculating the final assessment
  let finalAverage = parseFloat(totalScore / presentationCount);

  // Printing the result to the console
  console.log(`Student's final assessment is ${finalAverage.toFixed(2)}.`);
}

TrainTheTrainers(["2", "While-Loop", "6.00", "5.50", "For-Loop", "5.84", "5.66", "Finish"]);
TrainTheTrainers(["3", "Arrays", "4.53", "5.23", "5.00", "Lists", "5.83", "6.00", "5.42", "Finish"]);
TrainTheTrainers(["2", "Objects and Classes", "5.77", "4.23", "Dictionaries", "4.62", "5.02", "RegEx", "2.88", "3.42", "Finish"]);
