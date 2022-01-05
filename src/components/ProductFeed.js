import React, { useEffect, useState } from "react"
import Masonry from "react-masonry-css"
import styled from "styled-components"
import Product from "./Product"
import ProductPopup from "./ProductPopup"
import { getProductsFetch, addToBasketFetch } from "../requestMethods"


const Container = styled.div`
width: 100%;`

function ProductFeed({ user, prices, setPrices }) {

    const [photos, setPhotos] = useState([])
    const [infoOpen, setInfoOpen] = useState(false)
    const [fetchedProductInfo, setFetchedProductInfo] = useState()
    const [productInfo, setProductInfo] = useState({
        img: "",
        price: ""
    })



    const infoHandler = (product) => {
        const { img, categories, price, desc, color, title, _id } = product
        setProductInfo({
            productId: _id,
            img: img,
            price: price,
            categories: categories,
            desc: desc,
            color: color,
            title: title
        })
        console.log(productInfo)

        ///all product info fetched from db on page load
        ///when info button on item is clicked (in product component), item info from db is set into productInfo state, which is then rendered
        //"product" is individual items from db when mapped (line 63) - so containes all info about product at this point
    }


    useEffect(() => {
        getProductsFetch(setFetchedProductInfo)
    }, [])

    const breakpointColumnsObj = {
        default: 4,
        1200: 3,
        992: 3,
        768: 2,
        576: 1,
    };


    const addToBasket = (product) => {
        addToBasketFetch(product, user)
        const storedPrices = [...prices]
        storedPrices.push(product.price)
        setPrices(storedPrices)
        console.log(product.price);
    // }
    }


    return (

        <Container>
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="masonry-grid"
                columnClassName="masonry-grid_column">
                {fetchedProductInfo ? fetchedProductInfo.map((product, index) => {
                    return <Product product={product} setInfoOpen={setInfoOpen} infoHandler={infoHandler} addToBasket={addToBasket} />
                }) :
                    <h1>hang on</h1>}
            </Masonry>

            {infoOpen && <ProductPopup setInfoOpen={setInfoOpen} productInfo={productInfo} addToBasket={addToBasket} />}

        </Container>
    )
}

export default ProductFeed