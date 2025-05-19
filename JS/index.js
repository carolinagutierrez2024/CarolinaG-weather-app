// URL for current weather in Houston, TX (lat/lon)
const apiUrl = 'https://api.open-meteo.com/v1/forecast?latitude=29.76&longitude=-95.36&current_weather=true';

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    console.log("Fetch successful. Here's the weather data:", data);

    // Extract data points
    const temp = data.current_weather.temperature;
    const weatherCode = data.current_weather.weathercode;

    // Display on page
    document.getElementById("temperature").innerText = `Temperature: ${temp}°C`;
    const readableCondition = interpretWeatherCode(weatherCode);
document.getElementById("condition").innerText = `Condition: ${readableCondition}`;

  })
  .catch(error => {
    console.error("Error fetching data:", error);
  });

  //Code to convert the numbers for weather into words we can understand:
  function interpretWeatherCode(code) {
  const codes = {
    0: "Clear",
    1: "Mainly clear",
    2: "Partly cloudy",
    3: "Overcast",
    45: "Fog",
    51: "Light drizzle",
    61: "Light rain",
    80: "Rain showers",
    95: "Thunderstorm"
    // Add more if needed
  };
  return codes[code] || "Unknown condition";
}
