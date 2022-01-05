import React, { useEffect, useState } from "react"
import styled from "styled-components"
import InfoIcon from '@mui/icons-material/Info';
import { ShoppingBasket, FavoriteBorder } from '@mui/icons-material/';
import Modal from "react-modal"

Modal.setAppElement('#root');

const Image = styled.img`
width: 100%;
`
const ImageCont = styled.div`

height: auto;`

const InfoCont = styled.div`
width:100%;
position: absolute;
bottom: 30px;
z-index: 1;
display: flex;
justify-content: flex-end;
align-items: center;
height: 50px;
opacity: 0;
transition: all 0.2s ease`

const Container = styled.div`
width: 100%;
// margin-bottom: 20px;
position: relative;
&:hover ${InfoCont}{

    opacity:  ${props => props.modalisOpen ? 0 : 1}
};

`

const Price = styled.span`
`

const Icon = styled.div`
font-size: large;
color: gray;
// margin: 10px;
display: flex;
align-items: center;
justify-content: center;
`

const AddToBasket = styled.div`
display: flex;
height: 100%;
align-items: center;
justify-content: space-between;`

const InfoButton = styled.button`
border: none;
background: none;
cursor: pointer;`

const Circle = styled.div`
border-radius: 50%;
width: 40px;
aspect-ratio: 1;
background: white;
margin: 10px;
display: flex;
justify-content: center;
align-items: center;`




function Product({ src, setInfoOpen, infoHandler, product , addToBasket}) {
    const [modalIsOpen, setIsOpen] = useState(false)
    const {title, desc, img, price, color, categories, _id} = product

    function openModal() {
        setIsOpen(true)
    }

    function closeModal() {
        setIsOpen(false)
    }

    

    return (
        
        <Container>


            <ImageCont> <Image src={img} alt="some lovely pottery"></Image></ImageCont>
            <InfoCont>
                <AddToBasket onClick={()=>addToBasket(product)}>
                    <Circle><Icon><ShoppingBasket style={{ fontSize: "26px" }} /></Icon></Circle>
                </AddToBasket>
                <Circle>
                    {/* <InfoIcon style={{fontSize: "36px"}}/> */}
                    <InfoButton onClick={(e)=>{setInfoOpen(true); infoHandler(product)}}>
                        <Icon>i</Icon>
                    </InfoButton>

                </Circle>
                <Circle><Icon><FavoriteBorder style={{ fontSize: "26px" }} /></Icon> </Circle>
            </InfoCont >
            <Price>{price}</Price>
            {/* <Modal isOpen={modalIsOpen}
                
            >

            <ProductPopup modalIsOpen={modalIsOpen} closeModal={closeModal} />

        </Modal> */}

        </Container >
       
    )
}

export default Product