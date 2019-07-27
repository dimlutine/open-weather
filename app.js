// init local storage
const storage = new Storage();
// Get stored location data
const weatherLocation = storage.getLocationData();
// intitialize weather object
const weather = new Weather(weatherLocation.zip);
// init ui
const ui = new UI();

// get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// Change location event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
    const zip = document.getElementById('zip').value;
    weather.changeLocation(zip);
    // Set location in local storage
    storage.setLocationData(zip);
    // Get and display weather
    getWeather();
    // Close modal
    $('#locModal').modal('hide');
});
// For Enter Key
document.getElementById('w-form').addEventListener('submit', (e) => {
    const zip = document.getElementById('zip').value;
    weather.changeLocation(zip);
    // Set location in local storage
    storage.setLocationData(zip);
    // Get and display weather
    getWeather();
    // Close modal
    $('#locModal').modal('hide');
});


function getWeather() {
    weather.getWeather()
        .then(results => {
            ui.paint(results);
        })
        .catch(err => console.log(err));
}