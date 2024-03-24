import React,{useEffect, useState} from 'react'
import "./Weather.css"
import { Container,Row,Col } from 'react-bootstrap'
import r from "./r.png"
import sm from "./sm.png"
import Swal from 'sweetalert2'
import "./Weather.css"
import axios from 'axios'
import haze from "./haze.png"
import cloud from "./cloud.png"
import dr from "./dr.png"
import sun from "./sun.png"
// import sun from "./sun.png"
import rain from "./rain.png"
// import r from "./r.png"
import { IoSearchOutline } from "react-icons/io5";
import tm from "./tm.png"
import hum from "./hum.png"
import w from "./w.png"
export default function Weather() {
    const [name, setName] = useState('');
    const [weatherData, setWeatherData] = useState({
      celius: 10,
      name: "burewala",
      feel: 20,
      humidity: 20,
      speed: 1,
      rain: "cloudy",
      img: '', // Initialize with empty string
    });
  
    useEffect(() => {
      axios.get("https://api.openweathermap.org/data/2.5/weather?q=burewala&appid=8cc2f95620d21822ec249fb2bf7a5b93&&units=metric")
        .then((dat) => {
          let imgpath = '';
          if (dat.data.weather[0].main === "Clouds") {
            imgpath = cloud;
          } else if (dat.data.weather[0].main === "Clear") {
            imgpath = sun;
          }
          else if(dat.data.weather[0].main === "Rain")
          {
            imgpath = rain;
          }
          else if(dat.data.weather[0].main === "Drizzle")
          {
            imgpath = dr;
          }
          else if(dat.data.weather[0].main === "Haze"){
            imgpath = haze;

          }
          else{
            imgpath = sm;
          }

         
          setWeatherData(prevState => ({ ...prevState, img: imgpath }));
        })
        .catch(error => console.error('Error fetching weather data:', error));
    }, []);
  
    const submitRequest = () => {
      if (name !== "") {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=8cc2f95620d21822ec249fb2bf7a5b93&&units=metric`)
          .then((res) => {
            console.log(res.data)
            let imgpath = '';
            switch (res.data.weather[0].main) {
              case "Clouds":
                imgpath = cloud;
                break;
              case "Clear":
                imgpath = sun;
                break;
              case "Rain":
                imgpath = rain;
                break;
              case "Drizzle":
                imgpath = dr;
                break;
              case "Haze":
                imgpath = haze;
                break;
              case "Smoke":
                imgpath = sm;
                break;
              default:
                imgpath = sun;
            }
            setWeatherData({
              ...weatherData,
              name: res.data.name,
              feel: res.data.main.feels_like,
              speed: res.data.wind.speed,
              humidity: res.data.main.humidity,
              celius: res.data.main.temp,
              img: imgpath,
              rain: [res.data.weather[0].description]
            });
          })
          .catch(err=>{
            if(err.response.status===404)
            {
                Swal.fire({
                    title: "Wrong City Name",
                    text: "Enter the correct city name",
                    icon: "question"
                  });
            }
          })
      }
      else{
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Provide City Name",
          });
      }
    

    }
  return (
    <div id='bg'>

    <Container className='py-4'>
    <Row>
    <Col lg={7} className='mx-auto'>
    <form action="" className=''>
    
    <input type="search" required value={name} onChange={(e)=>setName(e.target.value)} placeholder='Enter city name' />
    <i class="fa fa-search" onClick={submitRequest}><IoSearchOutline style={{marginTop:"-8px",fontSize:"30px"}} />    </i>
  </form>
    </Col>
    </Row>
    </Container>
   <Container className='my-5'>
   <Row >
   <Col lg={8} className='mx-auto'>
   <div className="box">
   <div className="boxdata mx-5">
   <img className='img img-fluid' src={weatherData.img} alt=""  />
  <div className="city">
  <div className="cityss">{weatherData.rain}</div>

  <div className="city">city:{weatherData.name}</div>
  <div className="temp">{Math.round((weatherData.celius))}°C</div>
  </div>
   </div>
   
   </div>
   </Col>
   </Row>
   
   </Container>
   <Container>
   <Row>
   <Col lg={6}>
   <div className="box1 mb-3">
   <div className="dataabout">
      <div className="dataabout1">
      <div className="titleabout1">Feel Like</div>
      <div className="datadec">{Math.round((weatherData.feel))}%</div>
      </div>
      <div className="picabout">
      <img src={tm} alt="" />
      </div>

   </div>
   </div>
   </Col> <Col lg={6}>
   <div className="box2 mb-3">
   
   <div className="dataabout">
   <div className="dataabout2">
   <div className="titleabout2">Wind</div>
   <div className="datadec">{Math.round(( weatherData.speed))}%</div>
   </div>
   <div className="picabout">
   <img src={w} alt="" />

   </div>

</div>
   </div>
   </Col> <Col lg={6}>
   <div className="box3 mb-3">
   
   <div className="dataabout">
   <div className="dataabout3">
   <div className="titleabout3">Humindty</div>
   <div className="datadec">{Math.round((weatherData.humidity))}%</div>
   </div>
   <div className="picabout">
   <img src={hum} alt="" />
   </div>

</div>
   </div>
   </Col> <Col lg={6}>
   <div className="box4 mb-3">
   <div className="dataabout">
   <div className="dataabout4">
   <div className="titleabout4">Rain</div>
   <div className="datadec">{weatherData.rain}</div>
   </div>
   <div className="picabout">
   <img src={r} alt="" />
   </div>

</div>
   </div>
   </Col>
   </Row>
   </Container>
   </div>
     )
  }
