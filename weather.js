class Weather {
    constructor(zip) {
            this.apiKey = '46367a371a74074cc7ac79d4dfd190f5';
            this.zip = zip;
        }
        // Fetch weather from API
    async getWeather() {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${this.zip},us&appid=${this.apiKey}&units=imperial`);
            const responseData = await response.json();
            return responseData;
        }
        // Change location
    changeLocation(zip) {
        this.zip = zip;
    }
}