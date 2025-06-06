# Carolina Gutierrez – Weather App 
# Open-Meteo API Project

This project is a simple weather dashboard that uses the Open-Meteo API (https://open-meteo.com/) to retrieve real-time weather data for Houston, TX. It was built as part of the final project for the Code the Dream Intro to Programming course.

The app demonstrates use of API endpoints, DOM manipulation, conditional rendering, and responsive design. It meets all rubric requirements including two separate user-triggered GET requests and clear navigation between data points.

## Features

- Fetches and displays:
  - Current temperature (in °C and °F)
  - Current weather condition (e.g., Clear, Fog)
  - Wind speed in km/h
- Two user-controlled buttons to trigger individual GET requests (One for Temperature and One for condition and wind speed)
- Default fallback image displayed on page load
- Weather condition image updates based on live weather code
- Responsive layout with styled components and accessibility-friendly markup

## Technologies Used

- HTML5
- CSS3
- JavaScript (Fetch API, DOM manipulation)
- Open-Meteo Public API

## Folder Structure
weather-app/
├── index.html
├── README.md
├── css/
│ └── index.css
├── js/
│ └── index.js
└── images/
├── clear.png
├── drizzle.png
├── fog.png
├── partly-cloudy.png
├── overcast.png
├── rain.png
├── showers.png
├── thunderstorm.png
└── unknown.jpg


## How to Run the Project Locally
This project runs locally. Please download the files and open index.html in a browser to view the app. To do this:
1. Clone or download this repository to your computer.
2. Open the `index.html` file in any modern web browser.
3. Click the buttons labeled "Show Temperature" and "Show Condition" to retrieve live weather data for Houston.
4. Make sure you are connected to the internet so the API requests can complete.

Note: This project does not require a server. It runs entirely in the browser using JavaScript and the public Open-Meteo API.

## API Endpoints Used

1. GET /forecast?current_weather=true (for temperature)  
2. GET /forecast?current_weather=true (for condition and wind speed)

Each button triggers a separate GET request, satisfying the project rubric’s requirement to fetch only what is needed when it’s needed.

## Error Handling

- If the API call fails, an error message will be logged to the console.
- The UI will display fallback messages if temperature or condition cannot be loaded.

## Author

Carolina Gutierrez, PhD  
Aspiring Web Developer & Environmental Data Scientist | Ecologist | Educator  
GitHub: https://github.com/carolinagutierrez2024  
LinkedIn: https://www.linkedin.com/in/carolina-gutierrez-phd

