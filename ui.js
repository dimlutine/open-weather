class UI {
    constructor() {
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        this.details = document.getElementById('w-detail');
        this.icon = document.getElementById('w-icon');
        this.humidity = document.getElementById('w-humidity');
        this.pressure = document.getElementById('w-pressure');
        this.dewpoint = document.getElementById('w-dewpoint');
        this.windSpeed = document.getElementById('w-wind-speed');
        this.windDegree = document.getElementById('w-wind-degree');
        this.dewpoint = document.getElementById('w-dewpoint');
    }
    paint(weather) {
        // Compass func, change to switch when less lazy
        let direction = function(deg) {
            if (deg >= 0 && deg < 45) {
                return 'North';
            } else if (deg >= 45 && deg < 90) {
                return 'North-East';
            } else if (deg >= 90 && deg < 135) {
                return 'East';
            } else if (deg >= 135 && deg < 180) {
                return 'South-East';
            } else if (deg >= 180 && deg < 225) {
                return 'South';
            } else if (deg >= 225 && deg < 270) {
                return 'South-West';
            } else if (deg >= 270 && deg < 315) {
                return 'West';
            } else {
                return 'North-West';
            }
        }
        this.location.textContent = weather.name;
        this.desc.textContent = weather.weather[0].main;
        this.string.textContent = `${weather.main.temp} \u00B0`;
        this.icon.setAttribute('src', `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`);
        this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}%`;
        this.pressure.textContent = `Pressure: ${weather.main.pressure} hPa`;
        this.windSpeed.textContent = `Wind Speed: ${weather.wind.speed} MPH`;

        this.windDegree.textContent = `Wind Direction: ${ direction(weather.wind.deg) }`;
        // calc Dewpoint in F
        this.dewpoint.textContent = `Dewpoint: ${(Math.ceil((((weather.main.temp - 32) * (5 / 9)) - ((100 - weather.main.humidity) / 5)) * 9/5 + 32))} \u00B0`;
    }
}