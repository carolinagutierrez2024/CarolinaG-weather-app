document.addEventListener("DOMContentLoaded", function () {
  // Base API URL for Houston
  const apiUrl = 'https://api.open-meteo.com/v1/forecast?latitude=29.76&longitude=-95.36&current_weather=true';

  // Fetch and display temperature
  document.getElementById("tempBtn").addEventListener("click", () => {
    fetch(apiUrl)
      .then(res => res.json())
      .then(data => {
        const temp = data.current_weather.temperature;
        const tempF = (temp * 9 / 5 + 32).toFixed(1);
        document.getElementById("temperature").innerHTML =
          `<strong>Temperature:</strong> ${temp}°C / ${tempF}°F`;
      })
      .catch(error => {
        console.error("Error fetching temperature:", error);
        document.getElementById("temperature").innerText = "Unable to load temperature.";
      });
  });

  // Fetch and display condition + wind + image
  document.getElementById("conditionBtn").addEventListener("click", () => {
    fetch(apiUrl)
      .then(res => res.json())
      .then(data => {
        const code = data.current_weather.weathercode;
        const condition = interpretWeatherCode(code);
        const windSpeed = data.current_weather.windspeed;

        document.getElementById("condition").innerHTML = `
          <strong>Condition:</strong> ${condition}<br>
          <strong>Wind Speed:</strong> ${windSpeed} km/h`;

        const imagePath = getWeatherImage(code);
        document.getElementById("weatherImage").src = imagePath;
      })
      .catch(error => {
        console.error("Error fetching condition:", error);
        document.getElementById("condition").innerText = "Unable to load condition.";
      });
  });

  // Show fallback image on initial load
  document.getElementById("weatherImage").src = "images/unknown.jpg";
  document.getElementById("weatherImage").alt = "Waiting for weather update...";

  // ADD FOOTER HERE
  const thisYear = new Date().getFullYear();
  const footer = document.getElementById("footer");
  footer.innerHTML = `&copy; ${thisYear} Carolina Gutierrez`;
});

// Outside the DOMContentLoaded: helper functions
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
    95: "images/thunderstorm.png"
  };
  return images[code] || "images/unknown.jpg";
}
