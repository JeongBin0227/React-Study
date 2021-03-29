import React, { useEffect, useState } from "react";
import axios from "axios";
const API_KEY = "dc45d86814337b06efe773c9d5a6a9a6";

function wDescEngToKor(w_id) {
  var w_id_arr = [
    201,
    200,
    202,
    210,
    211,
    212,
    221,
    230,
    231,
    232,
    300,
    301,
    302,
    310,
    311,
    312,
    313,
    314,
    321,
    500,
    501,
    502,
    503,
    504,
    511,
    520,
    521,
    522,
    531,
    600,
    601,
    602,
    611,
    612,
    615,
    616,
    620,
    621,
    622,
    701,
    711,
    721,
    731,
    741,
    751,
    761,
    762,
    771,
    781,
    800,
    801,
    802,
    803,
    804,
    900,
    901,
    902,
    903,
    904,
    905,
    906,
    951,
    952,
    953,
    954,
    955,
    956,
    957,
    958,
    959,
    960,
    961,
    962,
  ];
  var w_kor_arr = [
    "가벼운 비를 동반한 천둥구름",
    "비를 동반한 천둥구름",
    "폭우를 동반한 천둥구름",
    "약한 천둥구름",
    "천둥구름",
    "강한 천둥구름",
    "불규칙적 천둥구름",
    "약한 연무를 동반한 천둥구름",
    "연무를 동반한 천둥구름",
    "강한 안개비를 동반한 천둥구름",
    "가벼운 안개비",
    "안개비",
    "강한 안개비",
    "가벼운 적은비",
    "적은비",
    "강한 적은비",
    "소나기와 안개비",
    "강한 소나기와 안개비",
    "소나기",
    "악한 비",
    "중간 비",
    "강한 비",
    "매우 강한 비",
    "극심한 비",
    "우박",
    "약한 소나기 비",
    "소나기 비",
    "강한 소나기 비",
    "불규칙적 소나기 비",
    "가벼운 눈",
    "눈",
    "강한 눈",
    "진눈깨비",
    "소나기 진눈깨비",
    "약한 비와 눈",
    "비와 눈",
    "약한 소나기 눈",
    "소나기 눈",
    "강한 소나기 눈",
    "박무",
    "연기",
    "연무",
    "모래 먼지",
    "안개",
    "모래",
    "먼지",
    "화산재",
    "돌풍",
    "토네이도",
    "구름 한 점 없는 맑은 하늘",
    "약간의 구름이 낀 하늘",
    "드문드문 구름이 낀 하늘",
    "구름이 거의 없는 하늘",
    "구름으로 뒤덮인 흐린 하늘",
    "토네이도",
    "태풍",
    "허리케인",
    "한랭",
    "고온",
    "바람부는",
    "우박",
    "바람이 거의 없는",
    "약한 바람",
    "부드러운 바람",
    "중간 세기 바람",
    "신선한 바람",
    "센 바람",
    "돌풍에 가까운 센 바람",
    "돌풍",
    "심각한 돌풍",
    "폭풍",
    "강한 폭풍",
    "허리케인",
  ];
  for (var i = 0; i < w_id_arr.length; i++) {
    if (w_id_arr[i] == w_id) {
      return w_kor_arr[i];
      break;
    }
  }
  return "none";
}
// Rain: {
//     colors:["#00C6FB", "#005BEA"],
//     title: "Raining",
//     subtitle: "우산 챙기세요",
//     icon: "ios-rainy"
// },
// Clear: {
//     colors:["#FEF253", "#FF7300"],
//     title: "Sunny",
//     subtitle: "날이 좋아요",
//     icon: "ios-sunny"
// },
// Thunderstorm: {
//     colors:["#00ECBC", "#007ADF"],
//     title: "Thunderstrom",
//     subtitle: "천둥이쳐요!",
//     icon: "ios-thunderstorm"
// },
// Clouds: {
//     colors:["#D7D2CC", "#304352"],
//     title: "Clouds",
//     subtitle: "구름이 꼈어요",
//     icon: "ios-cloudy"
// },
// Snow: {
//     colors:["#7DE2FC", "#B9B6E5"],
//     title: "Snow",
//     subtitle: "눈이와요!",
//     icon: "ios-snow"
// },
// Drizzle: {
//     colors:["#89F7FE", "#66A6FF"],
//     title: "Drizzle",
//     subtitle: "이슬비가 내려요",
//     icon: "ios-rainy-outline"
// },
// Haze: {
//     colors:["#89F7FE", "#66A6FF"],
//     title: "Haze",
//     subtitle: "이슬비가 내려요",
//     icon: "ios-rainy-outline"
// },
// Mist: {
//     colors:["#89F7FE", "#66A6FF"],
//     title: "Mist",
//     subtitle: "이슬비가 내려요",
//     icon: "ios-rainy-outline"
// }
export const Weather = () => {
  const [initialData, setInitialData] = useState({
    lat: 0,
    long: 0,
    temperature: 0,
    name: "",
    icon: "",
  });

  const getPosition = () => {
    const options = {
      timeout: 10000,
      enableHighAccuracy: true,
      maximumAge: 0,
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setInitialData({
            ...initialData,
            lat: position.coords.latitude,
            long: position.coords.longitude,
          });
        },
        (error) => {
          console.log(error);
        },
        options
      );
    }
  };

  // const setInitUpdate = (json) => {
  //   setInitialData({
  //     ...initialData,
  //     temperature: Math.floor(json.main.temp - 273.15),
  //     name: json.weather[0].main,
  //     icon: json.weather[0].icon,
  //   });
  //   console.log("mount");
  // };

  // const getData = async () => {
  //   const response = await axios.get("/data/data.json");
  //   return response.data.professorsList;
  // };

  const getWeather = async () => {
    // const lat = 37.49;
    // const long = 127.03;
    const lat = 37.49;
    const long = 127.03;
    const response = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&APPID=${API_KEY}`
    );
    return response.data;

    // console.log(initialData);
    // const { lat, long } = initialData;
    // fetch(
    //   `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&APPID=${API_KEY}`
    // )
    //   .then((response) => response.json())
    //   .then((json) => {
    //     // console.log(json);
    //     // console.log(Math.floor(json.main.temp - 273.15));
    //     // console.log(json.weather[0].main);
    //     // console.log(json.weather[0].icon);
    //     // setInitUpdate(json);
    //     // console.log(initialData);
    //     return json;
    //   });
  };

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const fetchedData = await getWeather();
  //     console.log(fetchedData);
  //     setInitialData({
  //       ...initialData,
  //       temperature: Math.floor(fetchedData.main.temp - 273.15),
  //       maxTemperature: Math.floor(fetchedData.main.temp_max - 273.15),
  //       minTemperature: Math.floor(fetchedData.main.temp_min - 273.15),
  //       main: fetchedData.weather[0].main,
  //       icon: fetchedData.weather[0].icon,
  //       name: fetchedData.name,
  //       humidity: fetchedData.main.humidity,
  //       clouds: fetchedData.clouds.all,
  //     });
  //     console.log(fetchedData);
  //   };
  //   fetchData();
  // }, []);

  // useEffect(() => {
  //   getPosition();

  //   const fetchData = async () => {
  //     const lat = 37.49;
  //     const long = 127.03;
  //     await fetch(
  //       `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&APPID=${API_KEY}`
  //     ).then((json) => {
  //       // console.log(json);
  //       // console.log(Math.floor(json.main.temp - 273.15));
  //       // console.log(json.weather[0].main);
  //       // console.log(json.weather[0].icon);
  //       // setInitUpdate(json);
  //       // console.log(initialData);
  //       return json;
  //     });
  //   };

  //   console.log(fetchData);
  // }, []);

  // const { temperature, name, icon } = initialData;
  const {
    temperature,
    name,
    icon,
    main,
    maxTemperature,
    minTemperature,
    humidity,
    clouds,
  } = initialData;
  // const img_url = `http://openweathermap.org/img/w/${icon}.png`;

  console.log(initialData);

  const animationConfig = {
    beforeScale: 0.7,
    targetY: "0.6em",
    duration: "0.4s",
    beforeOpacity: 0,
    delay: 500,
  };

  // useEffect(() => {
  //   const marginTop = 0;
  //   setInterval(() => {
  //     const firstChild = document.querySelector(".slide ul").firstChild;
  //     const newChild = document.createElement("li");
  //     newChild.innerHTML = firstChild.innerHTML;
  //     document.querySelector(".slide ul").appendChild(newChild);
  //     console.log(document.querySelector(".slide ul").getAnimations());
  //     // document.querySelector(".slide ul").removeChild(firstChild);
  //   }, 4000);
  // }, []);

  useEffect(() => {
    var items = document.querySelectorAll(".item");
    var container = document.querySelector("#container");
    var first = false;

    function setup() {
      for (var i = 0; i < items.length; i++) {
        var item = items[i];

        console.log(first);
        item.displayData = {
          one: getRandomNumber(),
          two: getRandomNumber2(),
        };

        setContent(item);
      }
    }
    setup();

    container.addEventListener(
      "animationiteration",
      duplicateAndGenerate,
      false
    );

    function duplicateAndGenerate(e) {
      var item = e.target;
      first = !first;
      item.displayData = {
        one: item.displayData.two,
        two: getRandomNumber3(),
      };

      setContent(item);
    }

    function setContent(item) {
      item.children[0].innerText = item.displayData.one;
      item.children[1].innerText = item.displayData.two;
    }

    function getRandomNumber() {
      return 78;
    }

    function getRandomNumber2() {
      return 80;
    }

    function getRandomNumber3() {
      if (first) return 78;
      else return 80;
    }
  });

  return (
    <>
      <h1>오늘의 날씨</h1>
      {/* <img alt="weather_icon" src={img_url} /> */}
      <h3>온도 : {temperature}°C</h3>
      <h3>날씨 : {main}</h3>
      <h3>이름 : {name}</h3>
      <img src={`http://openweathermap.org/img/w/${icon}.png`} />

      <h3>바람: </h3>
      <h3>습도: </h3>
      <h3>구름: </h3>

      <div id="container">
        <div className="itemGroup">
          <div className="item">
            <p>
              <img src={`http://openweathermap.org/img/w/${icon}.png`} />
              {main} {temperature}°C {minTemperature}°C / {maxTemperature}°C
            </p>
            <p>dasd</p>
          </div>
        </div>

        {/* <div className="itemGroup">
          <div className="item">
            <p>{humidity}</p>
            <p>{clouds}</p>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Weather;
