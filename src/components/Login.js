import React, { useEffect, useState } from "react"
import styled from "styled-components"
import Navbar from "./Navbar"
import { Link } from "react-router-dom"
import { LoginFetch, RegisterFetch } from "../requestMethods"
import { useNavigate, useLocation } from "react-router"


const Wrapper = styled.div`
background: lightgray;
height: 100vh;`
const Container = styled.div`

display: flex;
justify-content: center;
align-items: center;`
const LoginForm = styled.div`
width: 30%;
height: 70vh;
background: white;
margin-top: 40px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

const Input = styled.input`
width: 40%;
margin: 10px 0;
padding: 10px;`
const Button = styled.button`
margin: 10px 0;
width: 40%;
padding: 10px;`

const RegisterLink = styled.div`
`

function Login({ setLoggedIn, loggedIn, user, setUser}) {
    const [username, setUsername] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [checkPassword, setCheckPassword] = useState("")
    const [loginRegister, setLoginRegister] = useState("login")
    // const [user, setUser] = useState({
    //     user: "",
    //     userId: ""
    // })
    const [registered, setRegistered] = useState()
    const navigate = useNavigate()
    const location = useLocation()

    const handler = () => {
        if (loginRegister === "login") {
            LoginFetch(username, email, password, setUser, setLoggedIn)
            // user && setLoggedIn(true)
            console.log(location.state);
            console.log(location)
            console.log(user);
        } else {
            RegisterFetch(username, email, password, setUser, setRegistered)
            console.log(registered);
            console.log(user)
        }
    }
    console.log(loggedIn)
    useEffect(() => {
        setTimeout(() => {
            if (loggedIn) {
                navigate("/")
                setLoggedIn(true)
            } 
                
               
            
        },2000);
    }, [loggedIn])

    return (
        <Wrapper>
            <Navbar></Navbar>
            <Container>
                {loginRegister === "login" ?
                    <LoginForm>

                        <Input placeholder="username" onChange={(e) => setUsername(e.target.value)}></Input>
                        <Input placeholder="password" onChange={(e) => setPassword(e.target.value)}></Input>
                        <Button onClick={handler}>Log in</Button>
                        {/* <Link> */}
                        <RegisterLink onClick={() => setLoginRegister("register")}>
                            Create new account
                        </RegisterLink>
                        {/* </Link> */}
                    </LoginForm> : 
                        <LoginForm>

                            <Input placeholder="username" onChange={(e) => setUsername(e.target.value)}></Input>
                            <Input placeholder="email" onChange={(e) => setEmail(e.target.value)}></Input>
                            <Input placeholder="password" onChange={(e) => setPassword(e.target.value)}></Input>
                            <Input placeholder="type password again" onChange={(e) => setCheckPassword(e.target.value)}></Input>
                            {password !== checkPassword && <h4>Passwords do not match</h4>}
                            <Button onClick={handler}>Register</Button>
                            {/* <Link> */}
                            <RegisterLink onClick={() => setLoginRegister("login")}>
                                Already have an account?
                            </RegisterLink>
                            {/* </Link> */}
                        </LoginForm> 
                }
            </Container>
        </Wrapper>
    )
}

export default Login