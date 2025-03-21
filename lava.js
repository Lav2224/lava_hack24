 const apiKey = 'your_api_key'; 

        function getWeather() {
            const city = document.getElementById('city').value;

            if (city === '') {
                document.getElementById('error-message').innerHTML = 'Please enter a city name.';
                document.getElementById('weather-info').innerHTML = '';
                return;
            }
          document.getElementById('error-message').innerHTML = '';
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

            fetch(url)
                .then(response => response.json())
                .then(data => {
                    
                    if (data.cod === 200) {
                        
                        const cityName = data.name;
                        const temperature = data.main.temp;
                        const description = data.weather[0].description;
                        const humidity = data.main.humidity;
                        const windSpeed = data.wind.speed;

                       
                        document.getElementById('weather-info').innerHTML = `
                            <h2>Weather in ${cityName}</h2>
                            <p><strong>Temperature:</strong> ${temperature}°C</p>
                            <p><strong>Condition:</strong> ${description}</p>
                            <p><strong>Humidity:</strong> ${humidity}%</p>
                            <p><strong>Wind Speed:</strong> ${windSpeed} m/s</p>
                        `;
                    } else {
                        
                        document.getElementById('weather-info').innerHTML = '';
                        document.getElementById('error-message').innerHTML = 'City not found. Please try again.';
                    }
                })
                .catch(error => {
                    document.getElementById('weather-info').innerHTML = '';
                    document.getElementById('error-message').innerHTML = 'Error fetching data. Please try again later.';
                });
        }
