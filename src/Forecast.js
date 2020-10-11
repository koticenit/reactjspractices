//import React from 'react';
import logo from './logo.svg';
import rain from './rain.png';
import './App.css';
// import React  from 'react';
import React, { useState, useEffect } from "react";

// const gitHubUrl ="http://api.openweathermap.org/data/2.5/forecast?q=hyderabad&cnt=4&appid=ce5cbb754c954329a69f2f8083ebedb9";
const gitHubUrl ="http://api.openweathermap.org/data/2.5/forecast?q=hyderabad&appid=ce5cbb754c954329a69f2f8083ebedb9";

function App() {

  const [userData, setUserData] = useState({});
  const [userList, setList] = useState([]);
  const [userWeather, setWeather] = useState([]);

  useEffect(() => {
    getGitHubUserWithFetch();
  }, []);

  
  const getGitHubUserWithFetch = async () => {
    const response = await fetch(gitHubUrl);
    const jsonData = await response.json();
    setUserData(jsonData);
    setList(jsonData.list);
    
    
  };


  return (
    <div>
        <div class="centered">
        <h1> Call 5 day / 3 hour forecast data  </h1>
        </div>
        <div class="demo">
          <div> 
              <br />
              <h1 class="margin-center">Location : Hyderabad</h1>
              {userList.map(forecast => (
                
              <div class="forecastdiv">
              <div>Friday<br/>{forecast.main.dt_txt}Oct 9th, 1:00 pm<br/><img src={rain} alt="Smiley face" class="rainimage"/><br/>
              <h4>Temp:{forecast.main.temp}</h4><br/>
               {forecast.weather[0].description}
             
              </div>  
              </div>
              ))};
          </div>
    
       </div>
    </div>
   
  );
}

export default App;
