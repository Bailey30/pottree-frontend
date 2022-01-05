import React, { useEffect, useState } from "react"
import styled from "styled-components"

const Container = styled.div`
position: fixed;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
z-index: 100;
width: 100vw;
height: 100vh;
background-color: rgba(0,0,0,0.5); 
display: flex;
align-items: center;
justify-content: center;
`

const Wrapper = styled.div`
width: 50%;
height: auto;
background: white;
display: flex;
position: relative;
padding: 40px;
`
const CloseButton = styled.button`
position: absolute;
top: 10px;
right: 10px;`

const Background = styled.div`
width: 50%;
background: gray;
height: 100%;`

const LeftPanel= styled.div`
width: 50%;
`
const RightPanel = styled.div`
width: 50%;
display: flex;
justify-content: center;
`

const Image = styled.img`
width: 100%;
// height: auto;
object-fit: contain;
`
const Price = styled.span`

`
const Title= styled.span``
const Desc = styled.p``

function ProductPopup({setInfoOpen, productInfo}) {
      const { img, price, color, categories, title, desc} = productInfo
  return (
    <Container>
      
        <Wrapper>
            <CloseButton onClick={()=>setInfoOpen(false)}>X</CloseButton>
            <LeftPanel>
                <Title>{title}</Title>
                <Desc>{desc}</Desc>

                <Price>{price}</Price>
            </LeftPanel>
            <RightPanel>
            <Image src={img}></Image>
            </RightPanel>
</Wrapper>
    </Container>
  )
}

export default ProductPopup