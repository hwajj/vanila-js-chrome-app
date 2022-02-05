const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");
const API_KEY = "3f08b07685db998d400b2e405e143ea0";
https://api.openweathermap.org/data/2.5/weather?lat=37.4801086&lon=127.0452815&appid=3f08b07685db998d400b2e405e143ea0



function onGeoOk(position) {
  //success함수는 GeolocationPosition 객체 하나를 받는다
  console.log(position);
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  console.log(lat + "   " + lon);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  //화씨->섭씨온도 units=metric 추가
  fetch(url) //js가 직접 url 불러오기
        
      .then((response) =>response.json())
      .then((data) => {
        //  console.log(data.name)
          //console.log(data.weather[0].main)
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
      });
}
function onGeoError() {
  alert("Can't find you. No weather for you.");
}

//getCurrentPosition 는 success시 함수, error시 함수 두가지를 매개변수로 받음
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
