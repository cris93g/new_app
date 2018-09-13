import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import './Home.css';
import Nav from "../Nav/Nav"
import styled from "styled-components";


const Wrapper = styled.section`
margin-bottom:12px;
`;

const Middle = styled.section`
width:100%;
height:40vh;
background-color:gray;
margin-bottom:10px;
`;
const Bottom = styled.section`
width:100%;
height:40vh;
background-color:#845164;
margin-bottom:10px;
`;
const PictureB = styled.section`
width:100%;
height:65vh;
background-color:#dbdbdb;
margin-bottom:10px;
`;



class App extends Component {
  render() {
    return (
    <div class="Home">
      <Nav/>
      <Wrapper>
 <Carousel class="carou">
  <Carousel.Item><h3 class="topHeader">Nulla vitae elit libero, a pharetra augue mollis interdum.
  </h3> 
  <h1 class="bannerHeader">First slide label</h1>
    <img 
    // width={1000} height={900} 
    id="frontBanner" src={require("./first.jpg")} />
   <Carousel.Caption>
      
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item><h3 class="topHeader">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3><h1 class="bannerHeader">Second slide label</h1>
    <img id="frontBanner"src={require("./second.jpg")} />
    <Carousel.Caption>
      
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item><h3 class="topHeader">Praesent commodo cursus magna, vel scelerisque nisl consectetur.</h3><h1 class="bannerHeader">Third slide label</h1>
    <img id="frontBanner"src={require("./third.jpg")} />
    <Carousel.Caption>
      
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item><h3 class="topHeader"> Praesent commodo cursus magna, vel scelerisque nisl consectetur.</h3><h1 class="bannerHeader">Third slide label</h1>
    <img id="frontBanner"src={require("./forth.jpg")} />
    <Carousel.Caption>
      
      
    </Carousel.Caption>
  </Carousel.Item>
</Carousel></Wrapper>

<Middle>dsad</Middle>
<Bottom></Bottom>
<PictureB></PictureB>
  {/* <a href={process.env.REACT_APP_LOGIN}>
      <button>Login</button>
    </a> */}
      </div>
    );
  }
}

export default App;
