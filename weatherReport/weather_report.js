function showweatherDetails(event){
    event.preventDefault();
    const city = document.getElementById('city').value;
    const apiKey = '492938d3529c29f001377db626eb2098';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        temp = kelvin_to_fahrenheit(data.main.temp)
        const weatherInfo = document.getElementById('weatherInfo');
        weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                                <p>Temperature: ${temp} &#8457;</p>
                                <p>Weather: ${data.weather[0].description}</p>`;
    })
    .catch(error => {
        console.error('Error fetching weather: ',error);
        const weatherInfo = document.getElementById('weatherInfo');
        weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
    });
}

function kelvin_to_fahrenheit(k){
    return parseInt((k - 273.15) * 1.8 + 32);
}

document.getElementById('weatherForm').addEventListener('submit',showweatherDetails);