function ReadText(array) {
    // Create a variable for later use
    let index = 0;
    let word = array[index];

    while (word != "Stop") {
        console.log(word);
        index++;
        word = array[index];
    }
    
}

ReadText(["Nakov", "SoftUni", "Sofia", "Bulgaria", "SomeText", "Stop", "AfterStop", "Europe", "HelloWorld"]);
ReadText(["Sofia", "Berlin", "Moscow", "Athens", "Madrid", "London", "Paris", "Stop", "AfterStop"]);