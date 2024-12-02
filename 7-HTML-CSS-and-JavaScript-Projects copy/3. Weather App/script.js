async function getWeather() {
    const city = document.getElementById('city').value;
    const apiKey = 'da5cc509bc967933cf9f957a7a06eb9b'; // Replace with a valid API key
    const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const forecastWeatherUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

    try {
        // Fetch current weather
        const currentResponse = await fetch(currentWeatherUrl);
        const currentData = await currentResponse.json();

        document.getElementById('cityName').textContent = currentData.name;
        document.getElementById('temperature').textContent = `Temperature: ${currentData.main.temp}°C`;
        document.getElementById('description').textContent = currentData.weather[0].description;

        const currentIcon = currentData.weather[0].icon;
        document.querySelector('.current-weather .icon').innerHTML = `<img src="https://openweathermap.org/img/wn/${currentIcon}@2x.png" alt="weather icon">`;

        // Fetch forecast data
        const forecastResponse = await fetch(forecastWeatherUrl);
        const forecastData = await forecastResponse.json();

        const forecastDays = document.querySelectorAll('.day');
        forecastDays.forEach((day, index) => {
            const forecast = forecastData.list[index * 8]; // 24-hour interval
            const forecastIcon = forecast.weather[0].icon;

            const weekday = new Date(forecast.dt_txt).toLocaleDateString('en-US', { weekday: 'long' });
            day.querySelector('.weekday').textContent = weekday;
            day.querySelector('.icon').innerHTML = `<img src="https://openweathermap.org/img/wn/${forecastIcon}@2x.png" alt="forecast icon">`;
            day.querySelector('.temp').textContent = `${Math.round(forecast.main.temp)}°C`;
        });
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}
function changeBackground(condition) {
    const body = document.body;
    body.className = ''; // Reset existing classes

    switch (condition) {
        case 'clear':
            body.classList.add('clear');
            break;
        case 'clouds':
            body.classList.add('clouds');
            break;
        case 'rain':
            body.classList.add('rain');
            break;
        case 'snow':
            body.classList.add('snow');
            break;
        default:
            body.classList.add('default');
            break;
    }

    console.log(`Background class applied: ${body.className}`); // Debug log
}

