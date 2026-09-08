function Salary(array) {
    // Create variables for later use
    let openTabs = array[0];
    let salary = array[1];

    // Loop through the number for Open Tabs, each time we read a website name
    for (let read = 0; read < openTabs; read++) {
        // Create the variable with the array for the websites
        let website = array[read + 2];
        
        // Check which website is it
        if (website === "Facebook") {
            salary -= 150;
        }
        else if (website === "Instagram") {
            salary -= 100;
        }
        else if (website === "Reddit") {
            salary -= 50;
        }

        // Check whether you lost your salary
        if (salary <= 0) {
            // Print to the console
            console.log("You have lost your salary.");
            break;
        }
    }
    // Print the remaining salary after checking all tabs
    if (salary > 0) {
        console.log(salary);
    }
}

Salary([10, 750, "Facebook", "Dev.bg", "Instagram", "Facebook", "Reddit", "Facebook", "Facebook"]);
Salary([3, 500, "Github.com", "Stackoverflow.com", "softuni.bg"]);