import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

/**
 * Este hook es para cambiar el color de la barra de navegacion 
 * @returns El color según si está en la pagina principal o no
 */
export const useTheme = () => {
    const [colorTheme, setColorTheme] = useState('white')

    const location = useLocation()

    useEffect(() => {
        if(location.pathname == '/') {
            setColorTheme('white')
        } else setColorTheme('black')
    }, [location])

    const linkColor = (colorTheme == 'white') ? 'var(--white)' : 'black'

    return {
        linkColor
    }
}
