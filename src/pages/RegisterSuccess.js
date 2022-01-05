import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router"
function RegisterSuccess() {
    const navigate = useNavigate()

    setTimeout(() => {
        navigate("/")
    }, 2000);

    return (
        <>
            <h4>Thank you for creating an account.
                You will now be redirected to the home page.
            </h4>
        </>
    )
}

export default RegisterSuccess