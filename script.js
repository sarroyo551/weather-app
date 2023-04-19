let leftAside = document.getElementById('leftAside')
let cityForm = document.querySelector('.cityForm')
let searchButton = document.getElementById('searchButton')
let randomCity = document.querySelector('.randomCity')


// api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=c1509208f603c4b4015e2841a9d5445f

function getAPI () {
    
let url = 'http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=c1509208f603c4b4015e2841a9d5445f'

fetch(url)
    .then(function (r) {
        return r.json();
    })
    .then(function (data) {
        console.log(data);
    })
}

function One (e) {
    e.preventDefault()
    console.log('is this working')
}

searchButton.addEventListener('click', getAPI, One)
