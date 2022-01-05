import {useState, useEffect} from "react"
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom"
import { useLocation } from "react-router-dom"
import "./index.css"
import Home from "./pages/Home"
import Products from "./pages/Products";
import Login from "./components/Login"
import RegisterSuccess from "./pages/RegisterSuccess"
import UploadProduct from "./pages/UploadProduct"
import Basket from "./pages/Basket"
import { TokenFetch } from "./requestMethods"

const SignInWrapper = ({children, loggedIn})=> {
  const location = useLocation()
  console.log(location)
  return loggedIn ? <Navigate to="/" replace state={{from: location}}/> : children 
}

function App() {
  const [loggedIn, setLoggedIn] = useState()
  const [user, setUser] = useState({
    user: "",
    userId: ""
})
  const [prices, setPrices] = useState([])

  useEffect(() => {
    TokenFetch(setUser, user)
    setLoggedIn(true)
  }, [])

  useEffect(() => {
    console.log(user)
  }, [user])


  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home loggedIn={loggedIn} setLoggedIn={setLoggedIn} user={user} setUser={setUser}/>}></Route>

        <Route exact path="/products" element={<Products user={user} setUser={setUser} prices={prices} setPrices={setPrices}/>}></Route>
        {/* <Route exact path="/favourites" element={<Favourites/>}></Route>  */}

        <Route path="/basket" element={<Basket user={user} setUser={setUser} prices={prices} setPrices={setPrices}/>}></Route>
        <Route path="/login" element={
        <SignInWrapper>
          <Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} user={user} setUser={setUser}/>
        </SignInWrapper>
        }></Route>
        <Route path="/registerSuccess" element={<RegisterSuccess/>}></Route>
        <Route path="/uploadproduct" element={<UploadProduct user={user} loggedIn={loggedIn}/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
