///fetchbasket method on load - searches db for items in basket and renders
import React, { useEffect, useState } from "react"
import styled from "styled-components"
import BasketItem from "../components/BasketItem"
import Navbar from "../components/Navbar"
import { basketFetch, removeFromBasketFetch } from "../requestMethods"
const _ = require("lodash")


const Container = styled.div``
const Wrapper = styled.div`
display: flex;
// background: #D9E5F0;
height: auto;
// width: 80vw;
// align-items: center;
justify-content: center;
`
const BasketCont = styled.div`
background: white;
border-radius: 25px;
display: flex;
width: 60vw;
padding: 40px;
justify-content: space-between;
margin-top: 40px;`
const ItemWrapper = styled.div`
`
const PriceCont = styled.div`
// background: #D9E5F0;
padding: 20px;
// border-radius: 15px;
width: 15vw;
height: 20vh;
border: 1px solid gray;
`
const SubtotalCont = styled.div`
padding: 10px 0;
border-bottom: 1px solid gray;
display: flex;
justify-content: space-between;`
const SubtotalText = styled.span``
const Subtotal = styled.span``
const ShippingCont = styled.div` 
padding: 10px 0;
border-bottom: 1px solid gray;`
const ShippingText = styled.span``
const Shipping = styled.span``
const TotalCont = styled.div`
padding: 15px 0;`
const TotalText = styled.span`
font-size: 30px;`
const Total = styled.span``

const Empty = styled.span`
margin-top: 25vh;`

function Basket({user, setUser, prices, setPrices}) {
    const [basketItems, setBasketItems] = useState([])
    // const [totalPrice, setTotalPrice] = useState([])
    // const fetchbasket = async()=> {
    //     await 
    // }
    console.log(basketItems)


    useEffect(() => {
    //    fetchbasket()
       basketFetch(setBasketItems, user)
       
       
    }, [user])

    useEffect(() => {
      console.log(basketItems)
    //  const prices = []
    // for(const item of basketItems){
    //     prices.push(item.price)
    // }
    console.log(prices); 
    }, [basketItems])
    
    const remove =(user, id, index, price)=> {
        removeFromBasketFetch(user, id)

        const storedBasket = [...basketItems]
        storedBasket.splice(index, 1)
        setBasketItems(storedBasket)

        const storedPrices = [...prices]
        storedPrices.splice(index, 1)
        setPrices(storedPrices)

        // setBasketItems(...basketItems, basketItems)
    }
     
    const subtotal = _.sum(prices)
    console.log(subtotal);
    console.log(prices)
    let total = 0
    // for(const price of prices) {
    //     const shipping = price + 2.50
    //    return total += shipping
    // }

    return ( 
        <Container>
            <Navbar user={user} setUser={setUser}/> 
            <Wrapper>
            {!basketItems.length > 0 ? <Empty>your basket is empty </Empty> :
                <BasketCont>
                <ItemWrapper>
            {basketItems ? basketItems.map((item, index)=> {
                return <BasketItem item={item} remove={remove} user={user} index={index}/>
            })  : <h4>fdgfhgfdhgfdhgfdjgdj</h4> }
            </ItemWrapper>
            <PriceCont>
          <SubtotalCont>
              <SubtotalText>Subtotal</SubtotalText>
              <Subtotal>£{subtotal}</Subtotal>
              </SubtotalCont>
          <ShippingCont>
              <ShippingText>Shipping</ShippingText>
              <Shipping></Shipping>
              </ShippingCont>
          <TotalCont>
              <TotalText>Total</TotalText>
              <Total></Total>
              </TotalCont>
      </PriceCont>
      </BasketCont>
    }
      </Wrapper>
        </Container>
    )
}

export default Basket