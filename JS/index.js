// URL for current weather in Houston, TX (lat/lon)
const apiUrl = 'https://api.open-meteo.com/v1/forecast?latitude=29.76&longitude=-95.36&current_weather=true';

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    console.log("Fetch successful. Here's the weather data:", data);

    // Extract data points
    const temp = data.current_weather.temperature;
    const weatherCode = data.current_weather.weathercode;
    const windSpeed = data.current_weather.windspeed; //New for Week 14

    // Display on page with a conversion to Fahrenheit
    const tempF = (temp * 9/5 + 32).toFixed(1);
    document.getElementById("temperature").innerHTML = `<strong>Temperature:</strong> ${temp}°C / ${tempF}°F`;
    const readableCondition = interpretWeatherCode(weatherCode);
    document.getElementById("condition").innerHTML = `<strong>Condition:</strong> ${readableCondition}`;

      const imagePath = getWeatherImage(weatherCode);
      document.getElementById("weatherImage").src = imagePath;

    document.getElementById("wind").innerHTML = `<strong>Wind Speed:</strong> ${windSpeed} km/h`; //New for week 14

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


function getWeatherImage(code) {
  const images = {
    0: "images/clear.png",
    1: "images/mostly-clear.png",
    2: "images/partly-cloudy.png",
    3: "images/overcast.png",
    45: "images/fog.png",
    51: "images/drizzle.png",
    61: "images/rain.png",
    80: "images/showers.png",
    95: "images/thunderstorm.png",
  };

  return images[code] || "images-default.png"; // fallback image
}
