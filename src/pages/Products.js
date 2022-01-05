import React, { useEffect, useState } from "react"
import Navbar from "../components/Navbar"
import ProductFeed from "../components/ProductFeed"
import styled from "styled-components"

const Container = styled.div``


function Products({user, setUser , prices, setPrices}) {


  return (
    <Container>
        <Navbar user={user} setUser={setUser}/>
        <ProductFeed user={user} prices={prices} setPrices={setPrices}/>
    </Container>
  )
}

export default Products