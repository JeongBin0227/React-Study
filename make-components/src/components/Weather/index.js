import React, { useEffect, useState } from "react";
import axios from "axios";
const API_KEY = "dc45d86814337b06efe773c9d5a6a9a6";

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

  useEffect(() => {
    const fetchData = async () => {
      const fetchedData = await getWeather();
      setInitialData({
        ...initialData,
        temperature: Math.floor(fetchedData.main.temp - 273.15),
        name: fetchedData.weather[0].main,
        icon: fetchedData.weather[0].icon,
      });
      console.log(fetchedData);
    };
    fetchData();
  }, []);

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
  const { temperature, name } = initialData;
  // const img_url = `http://openweathermap.org/img/w/${icon}.png`;

  console.log(initialData);
  return (
    <>
      <h1>오늘의 날씨</h1>
      {/* <img alt="weather_icon" src={img_url} /> */}
      <h3>온도 : {temperature}°C</h3>
      <h3>날씨 : {name}</h3>
    </>
  );
};

export default Weather;
