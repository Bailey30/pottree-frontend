import React, { useEffect, useState } from "react"
import styled from "styled-components"
import Navbar from "../components/Navbar"
import Landing from "../components/Landing"

const Container = styled.div``

function Home({setLoggedIn, loggedIn , user, setUser}) {
  return (
    <Container>
        <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn} user={user} setUser={setUser}/>
        <Landing/>
    </Container>
  )
}

export default Home