function WeatherForecastTwo(celsius) {
    // Check what is the temperature in Celsius and print the corresponding weather forecast
    if (celsius >= 26.00 && celsius <= 35.00) {
        // Print to the console "Hot"
        console.log("Hot");
    }
    else if (celsius >= 20.10 && celsius <= 25.90) {
        // Print to the console "Warm"
        console.log("Warm");
    }
    else if (celsius >= 15.00 && celsius <= 20.00) {
        // Print to the console "Mild"
        console.log("Mild");
    }
    else if (celsius >= 12.00 && celsius <= 14.90) {
        // Print to the console "Cool"
        console.log("Cool");
    }
    else if (celsius >= 5.00 && celsius <= 11.90) {
        // Print to the console "Cold"
        console.log("Cold");
    }
    else {
        // Print to the console "unknown"
        console.log("unknown");
    }
}

WeatherForecastTwo(16.5);
WeatherForecastTwo(8);
WeatherForecastTwo(22.4);
WeatherForecastTwo(26);
WeatherForecastTwo(0);