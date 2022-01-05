import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

const Container = styled.div`
height: 60px;
display: flex;
justify-content: space-between;
align-items: center;
background: white;
`
const Left = styled.div`
margin: 0 100px`

const Title = styled.h1`
color: #C8C8C8;
font-weight: 900;`

const Right = styled.div`
margin: 100px;`

const Button = styled.button`
margin: 0 15px;
border: none;
background: none;
font-size: 20px;
color: #6E6E6E;
font-weight: 700;`


function Navbar({ loggedIn, setLoggedIn, user , setUser}) {

  const logOut = ()=> {
    localStorage.removeItem("myToken")
    setUser("")
    setLoggedIn(false)
  }


  return (
    <Container>
      <Left>
        <Link style={{"textDecoration" :"none"}} to="/"><Title>POTTREE</Title></Link>
      </Left>
      <Right>
        <Link to="/uploadproduct"><Button>SELL</Button></Link>
        <Link to="/products"><Button>SHOP</Button></Link>
        <Link to="/basket"><Button>BASKET</Button></Link>
        {!user ? <Link to="/login"><Button>LOGIN</Button></Link> : <Button
        onClick={()=>logOut()} 
        >LOG OUT</Button>}
      </Right>
    </Container>
  )
}

export default Navbar