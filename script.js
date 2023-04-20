let leftAside = document.getElementById('leftAside')
let cityForm = document.querySelector('.cityForm')
let searchButton = document.getElementById('searchButton')
let randomCity = document.querySelector('.randomCity')
let cityName = document.querySelector('#cityName')
let cityTemp = document.querySelector('#cityTemp')
let cityWind = document.querySelector('#cityWind')
let cityHumidity = document.querySelector('#cityHumidity')

// api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=c1509208f603c4b4015e2841a9d5445f

function getAPI (city) {

let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=c1509208f603c4b4015e2841a9d5445f`

fetch(url)
    .then(function (r) {
        return r.json();
    })
    .then(function (data) {
        console.log('current weather', data);
        city.value = ''
        getForecast(data.coord.lat, data.coord.lon)
        cityName.textContent = data.name + ' ' + `(${new Date().toLocaleDateString()})`;
        cityTemp.textContent = `Temp: ${data.main.temp} F`;
        cityWind.textContent = `Wind: ${data.wind.speed} MPH`;
        cityHumidity.textContent = `Humidity: ${data.main.humidity}%`;
    })
}

function getForecast (lat, lon) {
    let url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=c1509208f603c4b4015e2841a9d5445f`

fetch(url)
    .then(function (r) {
        return r.json();
    })
    .then(function (data) {
        console.log('forecast data', data);
    })
}

function One (e) {
    e.preventDefault()
    let city = document.querySelector('.inputOne');
    if (city.value == '') {
    return
    }
    console.log('is this working')
    getAPI(city.value)
}

searchButton.addEventListener('click', One)

getAPI('Princeton')