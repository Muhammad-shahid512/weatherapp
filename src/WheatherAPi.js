import React from 'react'
import humid from "./humid.png"
import wind from "./wind.png"
import "./Weather.css"
import sun from "./sun.png"
import rain from "./rain.png"
import r from "./r.png"
import tm from "./tm.png"
import hum from "./hum.png"
import w from "./w.png"
import { Container,Row,Col } from 'react-bootstrap'
export default function WheatherAPi() {
  return (
    <div id='bg'>

    <Container className='pt-4'>
    <Row>
    <Col lg={7} className='mx-auto'>
    <form action="" className=''>
    <input type="search" required />
    <i class="fa fa-search">X</i>
  </form>
    </Col>
    </Row>
    </Container>
   <Container className='py-5'>
   <Row >
   <Col lg={8} className='mx-auto'>
   <div className="box">
   <div className="boxdata mx-5">
   <img className='img img-fluid' src={sun} alt=""  />
  <div className="city">
  <div className="city">London</div>

  <div className="temp">Temperature:40$</div>
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
      <div className="datadec">23%</div>
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
   <div className="datadec">23%</div>
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
   <div className="datadec">23%</div>
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
   <div className="datadec">23%</div>
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
