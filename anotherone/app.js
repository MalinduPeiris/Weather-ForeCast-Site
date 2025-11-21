console.log("Js Loaded!!");

let informations = {};

//http://api.weatherapi.com/v1/current.json?key=8e0f6dfa5af14b779b395844251611&q=ratmalana&aqi=no
function searchingLocationDetails() {

    let searchedValue = document.getElementById("navTxtSearch").value.toLowerCase();
    let setPlaceValue = document.getElementById("mainSearchedPlace");
    let setCountryValue = document.getElementById("mainSerchedCountry");
    let setCelsiusValue = document.getElementById("mainSerchedCelsius");
    let setConditionValue = document.getElementById("mainSearchedCondition");
    let setTimeValue = document.getElementById("mainSearchedTime");

    let setWeatherIcon = document.getElementById("weatherImgValue");
    let setSunRise = document.getElementById("setSunRise");
    let setSunSet = document.getElementById("setSunSet");

    let setWindValue = document.getElementById("setWindValue");
    let setCloudCoverValue = document.getElementById("setCloudCoverValue");
    let setPressureValue = document.getElementById("setPressureValue");
    let setHumidityValue = document.getElementById("setHumidityValue");
    let setUvIndexValue = document.getElementById("setUvIndexValue");
    let setVisibilityValue = document.getElementById("setVisibilityValue");

    let location = "http://api.weatherapi.com/v1/current.json?key=8e0f6dfa5af14b779b395844251611&q=";
    location += searchedValue + "&aqi=no";

    let forecastLocation = "http://api.weatherapi.com/v1/forecast.json?key=8e0f6dfa5af14b779b395844251611&q="
    forecastLocation += searchedValue + "&days=1"

    fetch(location)
        .then(res => res.json())
        .then(data => {
            informations = data;
            let foundedValue = informations.location.name.toLowerCase();
            if (foundedValue == searchedValue) {
                setPlaceValue.innerText = informations.location.name;
                setCountryValue.innerText = informations.location.country;
                setCelsiusValue.innerText = informations.current.temp_c+" °C";
                setConditionValue.innerText = informations.current.condition.text;
                setTimeValue.innerText = informations.location.localtime;

                setWeatherIcon.src = "https:" + informations.current.condition.icon;

                setWindValue.innerText=informations.current.wind_kph+" Km/h";
                setCloudCoverValue.innerText=informations.current.cloud+" %";
                setPressureValue.innerText=informations.current.pressure_mb+" HPa";
                setHumidityValue.innerText=informations.current.humidity+" %";
                setUvIndexValue.innerText=informations.current.uv+" (low)";
                setVisibilityValue.innerText=informations.current.vis_km+" Km";


                console.log("awa");
            } else if (informations.location.name != searchedValue) {
                setPlaceValue.innerText = "Not found";
                setCountryValue.innerText = "Not Found";
                setCelsiusValue.innerText = "0";
                setConditionValue.innerText = "Not Found";
                setTimeValue.innerText = "12-12-2000\n 12-00 AM";

                console.log("awa not ekat");
            }

        })
        .catch(err => console.log("Fetch Error:", err));


    fetch(forecastLocation)
        .then(res => res.json())
        .then(data => {
            informations = data;
            let foundedValue = informations.location.name.toLowerCase();
            if (foundedValue == searchedValue) {
                setSunRise.innerText = data.forecast.forecastday[0].astro.sunrise;
                setSunSet.innerText = data.forecast.forecastday[0].astro.sunset;

                console.log("awa");
            } else if (informations.location.name != searchedValue) {
                setSunRise.innerText = "00 - 00";
                setSunSet.innerText = "00 - 00";

            }

        })
        .catch(err => console.log("Fetch Error:", err));

}


