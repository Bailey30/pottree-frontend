import React, { useEffect, useState } from "react"
import styled from "styled-components"
import Navbar from "../components/Navbar"
import { UploadProductFetch } from "../requestMethods"

const Container = styled.div`
height: 100vh;`
const Wrapper = styled.div`
// object-fit: contain;
display: flex;
align-items: center;
justify-content: center;
`
const Form = styled.form`
height: 90vh;`
const Input = styled.input``
const Button = styled.button`
margin-left: 20px`
const Label = styled.label`
margin-bottom: 10px;`
const Test = styled.input.attrs({ type: "checkbox" })`
margin: 0 5px;`
const Cont = styled.div`
width: 50vw;
height: auto;
display: flex;
flex-direction: column;
border: 1px solid gray;
padding: 20px;
margin: 20px;

`
const CatCont = styled.div`
display: flex;
align-items: center;
`

const BoxChoices = styled.div`
display: flex;
align-items: center;`
const BoxLabel = styled.label`
margin-right: 15px;`

function UploadProduct({ user, loggedIn }) {
    const [productData, setProductData] = useState({
        userId: "",
        title: "",
        img: "",
        categories: [],
        desc: "",
        price: "",
        phone: ""
    })
    const categories = ["bowl", "plate", "vase", "sculpture", "ceramic", "other"]
    const [checkedState, setCheckedState] = useState(
        new Array(categories.length).fill(false)
    )
    const handleChange = (position) => {
        const updatedCheckedState = checkedState.map((item, index) =>
            index === position ? !item : item
            //if the index of the state array matches the index from the cateogory array the state in the state array will change to the opposite of what it is currently
            //matching two indexes is a useful way to apply change to something when it is selected
        )
        setCheckedState(updatedCheckedState)
        // console.log(checkedState);


    }

    useEffect(() => {
        console.log(checkedState);
        console.log(productData);
        

    }, [productData])

    useEffect(() => {
        setProductData({
            ...productData,
            userId: user.userId
        })
    }, [user])

    const handleTitle = (e) => {
        e.preventDefault()
        setProductData({
            ...productData,
            title: e.target.value
        })
    }




    const uploadData = (e) => {
        e.preventDefault()
        const testArray = []
        checkedState.filter((item, index) => {
            return item === true && testArray.push(categories[index])
        })

        setProductData({
            ...productData,
            userId: user.userId,
            categories: testArray
        })
        UploadProductFetch(productData)

        console.log(productData);
        console.log(user)
    }


    return (
        <Container>
            <Navbar user={user}/>
            <Wrapper>
                <Form>
                    <Cont>
                        <Label for="name">Name</Label>
                        <Input type="text" id="name" onChange={(e) => setProductData({ ...productData, title: e.target.value })}></Input>
                    </Cont>
                    <Cont>
                        <Label for="image">Image</Label>
                        <Input type="text" id="image"
                            onChange={(e) => setProductData({ ...productData, img: e.target.value })}></Input>
                    </Cont>
                    <Cont group="cat">
                        <Label>Categories</Label>
                        <BoxChoices>
                            {categories.map((cat, index) => {
                                return <CatCont key={index}>
                                    <Test id={cat} name={cat} value={cat} type="checkbox"
                                        checked={checkedState[index]}
                                        onChange={() => handleChange(index)}
                                    />
                                    <BoxLabel>{cat}</BoxLabel>
                                </CatCont>
                            })}
                        </BoxChoices>




                        {/* <BoxChoices>
               <CatCont> <Test id="bowl" name="bowl" value="bowl"/> <BoxLabel>bowl</BoxLabel></CatCont>
               <CatCont> <Test id="plate" name="plate" value="plate"/> <BoxLabel>plate</BoxLabel></CatCont>
               <CatCont> <Test id="vase" name="vase" value="vase"/> <BoxLabel>vase</BoxLabel></CatCont>
               <CatCont> <Test id="sculpture" name="sculpture" value="sculpture"/> <BoxLabel>sculpture</BoxLabel></CatCont>
               <CatCont> <Test id="ceramic" name="ceramic" value="ceramic"/> <BoxLabel>ceramic</BoxLabel></CatCont>
               <CatCont> <Test id="other" name="other" value="other"/> <BoxLabel>other</BoxLabel></CatCont>
            </BoxChoices>    */}
                    </Cont>

                    <Cont>
                        <Label for="desc">Description</Label>
                        <Input type="text" id="desc" onChange={(e) => setProductData({ ...productData, desc: e.target.value })}></Input>
                    </Cont>
                    <Cont>
                        <Label for="desc">Price</Label>
                        <Input type="text" id="price" onChange={(e) => setProductData({ ...productData, price: e.target.value })}></Input>
                    </Cont>
                    <Cont>
                        <Label for="desc">Phone Number (for contact)</Label>
                        <Input type="text" id="contact" onChange={(e) => setProductData({ ...productData, phone: e.target.value })}></Input>
                    </Cont>
                    <Button onClick={uploadData}>Post Ad</Button>

                </Form>
            </Wrapper>
        </Container>
    )



}

export default UploadProduct