console.log("Js Loaded!!");


//http://api.weatherapi.com/v1/current.json?key=8e0f6dfa5af14b779b395844251611&q=ratmalana&aqi=no

let informations = {};

//http://api.weatherapi.com/v1/current.json?key=8e0f6dfa5af14b779b395844251611&q=ratmalana&aqi=no
function searchingLocationDetails() {

    let searchedValue = document.getElementById("navTxtSearch").value.toLowerCase();

    let location = "http://api.weatherapi.com/v1/current.json?key=8e0f6dfa5af14b779b395844251611&q=";
    location += searchedValue + "&aqi=no";

    //http://api.weatherapi.com/v1/forecast.json?key=8e0f6dfa5af14b779b395844251611&q=colombo&days=7
    let forecastLocation = "http://api.weatherapi.com/v1/forecast.json?key=8e0f6dfa5af14b779b395844251611&q="
    forecastLocation += searchedValue + "&days=7"

    let setPlaceValue = document.getElementById("mainSearchedPlace");
    let mainSearchedDay = document.getElementById("mainSearchedDay");

    let mainSearchedDate = document.getElementById("mainSearchedDate");
    let mainSerchedCelsius = document.getElementById("mainSerchedCelsius");
    let mainSearchedCondition = document.getElementById("mainSerchedCelsius");
    let mainSearchedFeelsLike = document.getElementById("mainSerchedCelsius");

    let searchedWindValue = document.getElementById("searchedWindValue");
    let searchedHumidityValue = document.getElementById("searchedHumidityValue");
    let searchedSunSetTime = document.getElementById("searchedSunSetTime");
    let searchedSunRiseTime = document.getElementById("searchedSunRiseTime");

    let serachedUvValue = document.getElementById("serachedUvValue");
    let searchedVisibilityValue = document.getElementById("searchedVisibilityValue");
    let searchedTimeValue = document.getElementById("searchedTimeValue");
    let searchedPressureValue = document.getElementById("searchedPressureValue");
    let searchedCloudCoverValue = document.getElementById("searchedCloudCoverValue");
    let setWeatherIcon=document.getElementById("setWeatherIcon");

    fetch(location)
        .then(res => res.json())
        .then(data => {
            informations = data;
            let foundedValue = informations.location.name.toLowerCase();
            if (foundedValue == searchedValue) {
                setPlaceValue.innerText = informations.location.country + " , " + informations.location.name;

                let time = informations.location.localtime;
                let day = getDay(time);

                mainSearchedDay.innerText = day;
                console.log(day);
                mainSearchedDate.innerText = fullDate(time);

                mainSerchedCelsius.innerText = informations.current.temp_c;
                mainSearchedCondition.innerText = informations.current.condition.text;
                mainSearchedFeelsLike.innerText = informations.current.feelslike_c;
                searchedWindValue.innerText = informations.current.wind_kph;
                searchedHumidityValue.innerText = informations.current.humidity;
                serachedUvValue.innerText = informations.current.uv;
                searchedVisibilityValue.innerText = informations.current.vis_km;
                searchedTimeValue.innerText = getTime(time);
                searchedPressureValue.innerText = informations.current.pressure_mb;
                searchedCloudCoverValue.innerText = informations.current.cloud;

                setWeatherIcon.src = "https:" + informations.current.condition.icon;





                console.log("awa");
            } else if (informations.location.name != searchedValue) {



                console.log("awa not ekat");
            }

        })
        .catch(err => console.log("Waradii Check Karanna : ", err));


    fetch(forecastLocation)
        .then(res => res.json())
        .then(data => {
            informations = data;
            let foundedValue = informations.location.name.toLowerCase();
            if (foundedValue == searchedValue) {
                searchedSunSetTime.innerText = data.forecast.forecastday[0].astro.sunrise;
                searchedSunRiseTime.innerText = data.forecast.forecastday[0].astro.sunset;


                console.log("awa");
            } else if (informations.location.name != searchedValue) {
                searchedSunSetTime.innerText = "00 - 00";
                searchedSunRiseTime.innerText = "00 - 00";

            }

        })
        .catch(err => console.log("Waradii Check Karanna : ", err));

}

function getDay(localtime) {
    const date = new Date(localtime);

    const days = [
        "Sunday", "Monday", "Tuesday",
        "Wednesday", "Thursday", "Friday", "Saturday"
    ];
    return days[date.getDay()];
}

function fullDate(localtime) {
    const date = new Date(localtime);

    const day = date.getDate();

    const months = [
        "January", "February", "March",
        "April", "May", "June",
        "July", "August", "September",
        "October", "November", "December"
    ];

    const monthName = months[date.getMonth()];
    const year = date.getFullYear();

    return `${day} ${monthName} ${year}`;
}

function getTime(localtime) {
    const date = new Date(localtime);

    let hours = date.getHours();
    let minutes = date.getMinutes();

    if (minutes < 10) minutes = "0" + minutes;

    return `${hours}:${minutes}`;
}



function darkMode() {
    let btnDarkModeOrigi = document.getElementById("btnDarkModeId");
    let btnDarkModeText = document.getElementById("btnDarkModeValue").innerText;
    let btnDarkMode = document.getElementById("btnDarkModeValue");
    let site_Title = document.getElementById("site_Title");


    if (btnDarkModeText === "Dark Mode") {
        document.body.style.backgroundColor = "#000000"; // black
        document.body.style.color = "#FFFFFF"; // white
        site_Title.style.color = "#FFFFFF";


        btnDarkMode.innerText = "Light Mode";

        console.log("Dark Mode");


    } else {
        document.body.style.backgroundColor = "#FFFFFF"; // white
        document.body.style.color = "#000000"; // black

        btnDarkMode.innerText = "Dark Mode";

        console.log("Light Mode");
    }
}









