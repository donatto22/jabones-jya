/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

import { NavLinks } from "../components"
import { Footer } from "../views/Footer"

export const JabonesLayout = ({ children }) => {
    const location = useLocation()
    const [positionAbsolute, setPositionAbsolute] = useState(true)

    useEffect(() => {
        if(location.pathname == '/') {
            setPositionAbsolute(true)
        } else {
            setPositionAbsolute(false)
        }
    }, [])

    return (
        <>
        <NavLinks positionAbsolute={ positionAbsolute } />
            { children }
        <Footer />
        </>
    )
}
