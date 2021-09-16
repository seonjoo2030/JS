const API_KEY = "5615ee87f4f077bc8b754ad4d770fc66";

function onGeoOk(position)
{
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    // then으로 response 사용.
    fetch(url)
    .then(response => response.json())
    .then(data => {
        const weather= document.querySelector("#weather span:first-child");
        const city= document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}°C`;
    }); // js가 해당 url로 요청을 보냄
}

function onGeoError()
{
    alert("Can`t find you. No weather for you.");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);