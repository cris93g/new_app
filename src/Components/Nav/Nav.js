import React, { Component } from 'react';
import styled from "styled-components"


const Wrapper = styled.section`
height:6vh;
width:100vh;
background-color:white;
display:flex;
`;
const LeftBanner = styled.section`
display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: space-around;
	
`;
const Left = styled.section`
width:100%;
display:flex;
width:33vw;
margin:auto;


`;
const Middle = styled.section`
width:100%;
display:flex;
width:33%;
justify-content: space-around;
width:33vw;
margin:auto;
`;
const Right = styled.section`
width:100%;
width:33%;
width:33vw;
margin:auto;
`;


export default class App extends Component {
  render() {
    return (
     
      <div className="Nav">
        <Wrapper>
             <LeftBanner> 
                 <Left> 
                    <div>Shop</div>
                </Left>
                <Middle>
                    <div><h2>BARON FIG</h2></div>
                    </Middle>
                <Right>
                    <div>Give $10,Get $10<div>Custom</div><div>...</div><div></div></div>
                </Right>
            </LeftBanner>
        </Wrapper>
      </div>
    );
  }
}


