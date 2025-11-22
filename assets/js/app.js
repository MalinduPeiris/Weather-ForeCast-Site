console.log("Js Loaded!!");
//find normal weather
//http://api.weatherapi.com/v1/current.json?key=8e0f6dfa5af14b779b395844251611&q=ratmalana&aqi=no 

//find normal and forecast
//http://api.weatherapi.com/v1/forecast.json?key=8e0f6dfa5af14b779b395844251611&q=colombo&days=7

// `http://api.weatherapi.com/v1/forecast.json?key=8e0f6dfa5af14b779b395844251611&q=${location}&days=7` 



async function searchingLocationDetails() {

    let searchedValue = document.getElementById("navTxtSearch").value.toLowerCase();

    /*  My way to find the api for related searching location 
    let location = "http://api.weatherapi.com/v1/current.json?key=8e0f6dfa5af14b779b395844251611&q=";
    location += searchedValue + "&aqi=no";

    let forecastLocation = "http://api.weatherapi.com/v1/forecast.json?key=8e0f6dfa5af14b779b395844251611&q="
    forecastLocation += searchedValue + "&days=7"
    */

    let apiKey = "8e0f6dfa5af14b779b395844251611";

    let todayWeatherApi = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${searchedValue}&aqi=no`;
    let forecastWeatherApi = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}&days=7`;

    await fetch(todayWeatherApi)
        .then(res => res.json())
        .then(data => {
            setAllTodayWeatherDetails(data, searchedValue);
        })
        .catch(err => console.log("Waradii Check Karanna  :   ", err));


    await fetch(forecastWeatherApi)
        .then(res => res.json())
        .then(data => {
            setAllOtherDaysForecastValues(data, searchedValue);
        })
        .catch(err => console.log("Waradii Check Karanna  :   ", err));

}


function setAllTodayWeatherDetails(data, searchedValue) {
    let informations = data;
    let setPlaceValue = document.getElementById("mainSearchedPlace");
    let mainSearchedDay = document.getElementById("mainSearchedDay");

    let mainSearchedDate = document.getElementById("mainSearchedDate");
    let mainSerchedCelsius = document.getElementById("mainSerchedCelsius");
    let mainSearchedCondition = document.getElementById("mainSerchedCelsius");
    let mainSearchedFeelsLike = document.getElementById("mainSerchedCelsius");

    let searchedWindValue = document.getElementById("searchedWindValue");
    let searchedHumidityValue = document.getElementById("searchedHumidityValue");


    let serachedUvValue = document.getElementById("serachedUvValue");
    let searchedVisibilityValue = document.getElementById("searchedVisibilityValue");
    let searchedTimeValue = document.getElementById("searchedTimeValue");
    let searchedPressureValue = document.getElementById("searchedPressureValue");
    let searchedCloudCoverValue = document.getElementById("searchedCloudCoverValue");
    let setWeatherIcon = document.getElementById("setWeatherIcon");

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
        setPlaceValue.innerText="Not Found : "+searchedValue
        mainSerchedCelsius.innerText = "0.0";
        mainSearchedCondition.innerText = "";
        mainSearchedFeelsLike.innerText = "";
        searchedWindValue.innerText = "";
        searchedHumidityValue.innerText = "";
        serachedUvValue.innerText = "";
        searchedVisibilityValue.innerText = "";
        searchedTimeValue.innerText = getTime(time);
        searchedPressureValue.innerText = "";
        searchedCloudCoverValue.innerText = "";
        setWeatherIcon.src="/assets/img/sunset.png";

        console.log("awa not ekat");
    }

}

function setAllOtherDaysForecastValues(data, searchedValue) {
    let informations = data;

    let searchedSunSetTime = document.getElementById("searchedSunSetTime");
    let searchedSunRiseTime = document.getElementById("searchedSunRiseTime");

    let cardOneDay = document.getElementById("cardOneDay");
    let cardOneImg = document.getElementById("cardOneImg");
    let cardOneTemp = document.getElementById("cardOneTemp");

    let cardTwoDay = document.getElementById("cardTwoDay");
    let cardTwoImg = document.getElementById("cardTwoImg");
    let cardTwoTemp = document.getElementById("cardTwoTemp");

    let cardThreeDay = document.getElementById("cardThreeDay");
    let cardThreeImg = document.getElementById("cardThreeImg");
    let cardThreeTemp = document.getElementById("cardThreeTemp");

    let cardFourDay = document.getElementById("cardFourDay");
    let cardFourImg = document.getElementById("cardFourImg");
    let cardFourTemp = document.getElementById("cardFourTemp");

    let cardFiveDay = document.getElementById("cardFiveDay");
    let cardFiveImg = document.getElementById("cardFiveImg");
    let cardFiveTemp = document.getElementById("cardFiveTemp");

    let cardSixDay = document.getElementById("cardSixDay");
    let cardSixImg = document.getElementById("cardSixImg");
    let cardSixTemp = document.getElementById("cardSixTemp");

    let foundedValue = informations.location.name.toLowerCase();
    if (foundedValue == searchedValue) {
        searchedSunSetTime.innerText = data.forecast.forecastday[0].astro.sunrise;
        searchedSunRiseTime.innerText = data.forecast.forecastday[0].astro.sunset;


        cardOneDay.innerText = getDay(informations.forecast.forecastday[0].date) === getDay(informations.location.localtime) ? "Today" : getDay(informations.forecast.forecastday[0].date);
        cardTwoDay.innerText = getDay(informations.forecast.forecastday[1].date);
        cardThreeDay.innerText = getDay(informations.forecast.forecastday[2].date);
        cardFourDay.innerText = getDay(informations.forecast.forecastday[3].date);
        cardFiveDay.innerText = getDay(informations.forecast.forecastday[4].date);
        cardSixDay.innerText = getDay(informations.forecast.forecastday[5].date);

        cardOneImg.src = "https:" + informations.forecast.forecastday[0].day.condition.icon;
        cardTwoImg.src = "https:" + informations.forecast.forecastday[1].day.condition.icon;
        cardThreeImg.src = "https:" + informations.forecast.forecastday[2].day.condition.icon;
        cardFourImg.src = "https:" + informations.forecast.forecastday[3].day.condition.icon;
        cardFiveImg.src = "https:" + informations.forecast.forecastday[4].day.condition.icon;
        cardSixImg.src = "https:" + informations.forecast.forecastday[5].day.condition.icon;

        cardOneTemp.innerText = informations.forecast.forecastday[0].day.avgtemp_c;
        cardTwoTemp.innerText = informations.forecast.forecastday[1].day.avgtemp_c;
        cardThreeTemp.innerText = informations.forecast.forecastday[2].day.avgtemp_c;
        cardFourTemp.innerText = informations.forecast.forecastday[3].day.avgtemp_c;
        cardFiveTemp.innerText = informations.forecast.forecastday[4].day.avgtemp_c;
        cardSixTemp.innerText = informations.forecast.forecastday[5].day.avgtemp_c;

        console.log(informations.forecast.forecastday.date);
    } else if (informations.location.name != searchedValue) {
        searchedSunSetTime.innerText = "00 - 00";
        searchedSunRiseTime.innerText = "00 - 00";

        cardOneTemp.innerText = "0.0";
        cardTwoTemp.innerText = "0.0";
        cardThreeTemp.innerText = "0.0";
        cardFourTemp.innerText = "0.0";
        cardFiveTemp.innerText = "0.0";
        cardSixTemp.innerText = "0.0";

    }

}


function getDay(localtime) {
    let date = new Date(localtime);

    const days = [
        "Sunday", "Monday", "Tuesday",
        "Wednesday", "Thursday", "Friday", "Saturday"
    ];
    console.log(typeof (date));
    return days[date.getDay()];
}

function fullDate(localtime) {
    let date = new Date(localtime);

    let day = date.getDate();
    const months = [
        "January", "February", "March",
        "April", "May", "June",
        "July", "August", "September",
        "October", "November", "December"
    ];

    let monthName = months[date.getMonth()];
    let year = date.getFullYear();

    return `${day} ${monthName} ${year}`;
}

function getTime(localtime) {
    let date = new Date(localtime);

    let hours = date.getHours();
    let minutes = date.getMinutes();
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    return `${hours}:${minutes}`;
}

function darkMode() {
    let btnDarkModeOrigi = document.getElementById("btnDarkModeId");
    let btnDarkModeText = document.getElementById("btnDarkModeValue").innerText;
    let btnDarkMode = document.getElementById("btnDarkModeValue");
    let site_Title = document.getElementById("site_Title");


    if (btnDarkModeText === "Dark Mode") {
        document.body.style.backgroundColor = "#000000";
        document.body.style.color = "#FFFFFF";
        site_Title.style.color = "#FFFFFF";


        btnDarkMode.innerText = "Light Mode";

        console.log("Dark Mode");


    } else {
        document.body.style.backgroundColor = "#FFFFFF";
        document.body.style.color = "#000000";

        btnDarkMode.innerText = "Dark Mode";

        console.log("Light Mode");
    }
}









