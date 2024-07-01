document.getElementById('get-weather-btn').addEventListener('click', getWeather);

function getWeather() {
    const city = document.getElementById('city').value.trim();
    if (city !== '') {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=379b64a62bd85e3979ed724856d99cf6&units=metric`)
            .then(response => response.json())
            .then(data => {
                if (data.cod === 200) {
                    document.getElementById('city-name').textContent = data.name;
                    document.getElementById('weather-icon').src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
                    document.getElementById('temperature').textContent = `Temperature: ${data.main.temp} °C`;
                    document.getElementById('description').textContent = `Weather: ${data.weather[0].description}`;
                    document.getElementById('weather-info').classList.remove('hidden');
                    document.getElementById('weather-info').classList.add('slideIn');
                } else {
                    alert('City not found!');
                }
            })
            .catch(error => console.error('Error:', error));
    } else {
        alert('Please enter a city name!');
    }
}
