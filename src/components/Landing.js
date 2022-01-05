import React, { useEffect, useState } from "react"
import styled from "styled-components"
import {Link} from "react-router-dom"

import One from "../images/1.jpg"
import Two from "../images/2.jpg"
import Three from "../images/3.jpg"

const Container = styled.div`
display: flex;
// background: #EFEFEF;
width: 97vw;
margin: 0 auto;
// background: #DE5C40;
 `

const RightPanel = styled.div`
flex: 1;
display: flex;
flex-direction: column;
align-items: center;
// justify-content: center;
height: 100%;
// padding-left: 50px
`
const SellButton = styled.button`
height: 50px;
// aspect-ratio: 1;
// border: dashed 1px gray;;
// border-radius: 100px;
background: none;
font-size: 20px;
margin: 5px 0;
`

const ImagePanel = styled.div`
// flex: .5;
width: 600px;
// width: 10%;
height: 90vh;
margin-right: 20px;
position: relative;
overflow: hidden;
`

const RightImageCont = styled.div`
position: absolute;
right: 0;
width: 40%;
height: 50%;
`
const ShopButton = styled.button`
width: 100%;
height: 10%;
margin: 10px 0;
background: none;
border: none;
font-size: 30px;
font-weight: 900;
color: #C8C8C8;
cursor: pointer;
`

const LeftImageCont = styled.div`
position: absolute;
left: 0;
width: 60%;
height: 50%;
`
const BottomImageCont = styled.div`
width: 100%;
height: 50%;
overflow: hidden;
position: absolute;
bottom: 0
`

const Image = styled.img`
width: 100%;
// height: 50%;
object-fit: none;
object-position: 10% 75%;
// position: absolute;
bottom: 0;
// margin-bottom: 200px;
`
const ImageText = styled.h1`
// width: 100%;
// height: 100%;
color: gray;
font-size: 70px;
font-weight: 700;
font-family: 'Poppins', sans-serif;
margin: 60px 0 0 0
`
const Instructions = styled.div`
margin: 20px 0;
width: 100%;
height: 10vh;
display: flex;
align-items: center;
justify-content: center;

`
const Text = styled.div`
margin: 40px 20px;
height: 70px;
display: flex;
align-items: center;
font-size: 20px;
padding-right: 30px;
border-right: ${props=> props.side === "one" | props.side === "two" && "solid 2px black"}
`

function Landing() {
  return (
    <Container>
      <ImagePanel>
        <LeftImageCont><Image src={Two} alt="a nice piece of pottery"></Image></LeftImageCont>

        <RightImageCont><Image src={Three} alt="a nice piece of pottery"></Image>
          <ShopButton>Shop Now</ShopButton>
        </RightImageCont>

        <BottomImageCont><Image src={One} alt="a nice piece of pottery">

        </Image></BottomImageCont>

      </ImagePanel>
      <RightPanel>
        <ImageText>Buy and sell handmade pottery</ImageText>
        <Instructions>
          <Text side="one">
            Create an account
          </Text>
          <Text side="two">
            Upload your items
          </Text>
          <Text>
            Advertise and sell them for free
          </Text>
          
        </Instructions>
        <Link to="/uploadproduct"><SellButton>Start Selling Now!</SellButton></Link>
      </RightPanel>

    </Container>
  )
}

export default Landing