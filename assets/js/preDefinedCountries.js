
let tokyo = "http://api.weatherapi.com/v1/forecast.json?key=8e0f6dfa5af14b779b395844251611&q=Tokyo&days=1";
let hydrabad = "http://api.weatherapi.com/v1/forecast.json?key=8e0f6dfa5af14b779b395844251611&q=hyderabad&days=1";
let sydney = "http://api.weatherapi.com/v1/forecast.json?key=8e0f6dfa5af14b779b395844251611&q=sydney&days=1";
let toronto = "http://api.weatherapi.com/v1/forecast.json?key=8e0f6dfa5af14b779b395844251611&q=toronto&days=1";
let newYork = "http://api.weatherapi.com/v1/forecast.json?key=8e0f6dfa5af14b779b395844251611&q=new york&days=1";

let info = {};

function updateWeather(url, imgId, tempId) {
    fetch(url)
        .then(res => res.json())
        .then(data => {

            let img = document.getElementById(imgId);
            let temp = document.getElementById(tempId);

            if (img) img.src = "https:" + data.current.condition.icon;
            if (temp) temp.innerText = data.current.temp_c + "°C";

        })
        .catch(err => console.log(err));
}

let tokyoImg = document.getElementById("tokyoImg");
let tokyoTemp = document.getElementById("tokyoTemp");
let hydrabadImg = document.getElementById("hydrabadImg");
let hydrabadTemp = document.getElementById("hydrabadTemp");
let sydneyImg = document.getElementById("sydneyImg");
let sydneyTemp = document.getElementById("sydneyTemp");
let canadaImg = document.getElementById("canadaImg");
let canadaTemp = document.getElementById("canadaTemp");
let newyorkImg = document.getElementById("newyorkImg");
let newyorkTemp = document.getElementById("newyorkTemp");


updateWeather(tokyo, "tokyoImg", "tokyoTemp");
updateWeather(hydrabad, "hydrabadImg", "hydrabadTemp");
updateWeather(sydney, "sydneyImg", "sydneyTemp");
updateWeather(toronto, "canadaImg", "canadaTemp");
updateWeather(newYork, "newyorkImg", "newyorkTemp");