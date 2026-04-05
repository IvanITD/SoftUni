function WeatherForecast(weather) {
    // Check what weather is outside
    switch (weather) {
        case "sunny":
            console.log("It's warm outside!");
            break;
            default:
                console.log("It's cold outside!");
                break;
    }
}
WeatherForecast("sunny");
WeatherForecast("cloudy");
WeatherForecast("snowy");