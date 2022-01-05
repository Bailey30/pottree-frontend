// import { useNavigate} from "react-router"
import { useEffect } from "react"


export const LoginFetch = async (username, email, password, setUser, setLoggedIn) => {
    try {
        const res = await fetch(`http://localhost:5000/users/login`, {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({
                username: username,
                // email: email,
                password: password
            })
        })
        const data = await res.json()
        setUser({
            user: data.user,
            userId: data.userId
        })
        if (data) {
            setLoggedIn(true)
            console.log("got this far");
            console.log(data);
            localStorage.setItem("myToken", data.token)
        }

    } catch (error) {
        console.log(error);
    }
}

export const RegisterFetch = async (username, email, password, setUser, setRegistered) => {
    try {
        const res = await fetch(`http://localhost:5000/users/register`, {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({
                username: username,
                email: email,
                password: password
            })
        })
        const data = await res.json()
        setUser({
            user: data.user,
            userId: data.userId
        })
        console.log("appears to have registered and logged in");
        setRegistered(true)
        localStorage.setItem("myToken", data.token)

    } catch (error) {
        console.log(error);
    }
}

export const TokenFetch = async (setUser, user) => {
    try {
        // console.log(localStorage.getItem("myTo"))

        const res = await fetch(`http://localhost:5000/users/user`, {
            method: "GET",
            headers: { "Authorization": `Bearer ${localStorage.getItem("myToken")}` }
        })
        const data = await res.json()
        setUser({
            user: data.user,
            userId: data.userId
        })

        
        
    } catch (error) {
        console.log(error);
    }
    
    console.log(localStorage.getItem("myToken"))
}

export const UploadProductFetch = async (productData) => {
    try {
        const res = await fetch("http://localhost:5000/products/add", {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({
                userId: productData.userId,
                title: productData.title,
                desc: productData.desc,
                img: productData.img,
                categories: productData.categories,
                color: productData.color,
                price: productData.price

            })

        })
        const data = await res.json()
     console.log("product uploaded", data);

    }
    catch (error) {
        console.log(error);
    }
}

export const getProductsFetch = async (setFetchedProductInfo) => {
    try {
        const res = await fetch("http://localhost:5000/products/",{
            method: "GET",
            headers: { "Authorization": `Bearer ${localStorage.getItem("myToken")}` },
        })
        const data = await res.json()
        console.log(data)
        setFetchedProductInfo(data)
    } catch (error) {
        console.log(error)
    }
}

export const addToBasketFetch = async (product, user)=> {
    try {
        const res = await fetch("http://localhost:5000/baskets/add",{
            method: "PUT",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({
                username: user.user,
                productId: product._id,
                quantity: product.quantity,
            })
        })
        const data = await res.json()
        console.log(data)
    } catch (error) {
        console.log(error);
    }
}

 export const removeFromBasketFetch = async ( user, id) => {
     console.log(user)
     console.log(id)
     try {
         const res = await fetch("http://localhost:5000/baskets/remove",{
             method: "PUT",
             headers: { "Content-type": "application/json" },
             body: JSON.stringify({
                 userId: user,
                 productId: id
             })
         })
         const data = await res.json()
         console.log(data);
     } catch(error) {
        console.log(error);
     }
 }




export const basketFetch = async (setBasketItems, user)=> {
    try {
        const res = await fetch("http://localhost:5000/baskets/getbasket", {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({
                userId: user.userId,
                
            })
        })
        const data = await res.json()
        console.log(data)
        setBasketItems(data)
    } catch (error) {
        console.log(error)
    }
}