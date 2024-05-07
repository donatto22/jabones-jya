import { JabonesRouter } from "./router/JabonesRouter"

import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const JabonesApp = () => {
    useEffect(() => {
        Aos.init({
            once: true
        })
    }, [])
    
    return (
        <JabonesRouter />
    )
}

