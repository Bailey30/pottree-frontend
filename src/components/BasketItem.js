import React, { useEffect, useState } from "react"
import DeleteIcon from '@mui/icons-material/Delete';
import styled from "styled-components"
const Container = styled.div`

background: white;`
const BasketWrapper = styled.div``
const ItemCont = styled.div`
display: flex;
`
const InfoCont = styled.div`
display: flex;
// flex-direction: column;
`
const Image = styled.img`
width: 200px;
margin-bottom: 30px;`
const Title = styled.span`
padding: 10px 0;
font-size: 20px;
font-weight: 400;`
const Price = styled.span`
margin-left: auto;
height: 40px;
display: flex;
align-items: center;
color: gray;`
const TopLine = styled.div`
display: flex;
align-items: flex-start;
justify-content: space-between;
width: 30vw;
// margin-left: 15px;
margin-bottom: 20px;
`
const Icon = styled.div`
height: 39px;
display: flex;
align-items: center;
margin-left: 30px;`
const Hr = styled.div`
color: blue;
`
const RightSection = styled.div`
margin-left: 20px;


`
function BasketItem({item, remove, user, index}) {
    const {color, desc, img, price, title, _id} = item
  return (
    <Container>
        <BasketWrapper>
      <ItemCont>
          <Image src={img}></Image>
          <RightSection>

          
          <InfoCont>
              <TopLine>
              <Title>{title}</Title>
              <Price>£{price}</Price>
         <Icon><DeleteIcon onClick={()=>remove(user.userId, _id, index, price)}/></Icon> 

              </TopLine>
          </InfoCont>
              <Hr><hr></hr></Hr>
          </RightSection>
      </ItemCont>
      
          </BasketWrapper>

    </Container>
  )
}

export default BasketItem