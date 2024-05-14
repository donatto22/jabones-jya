import { QRCodeSVG } from "qrcode.react"

import { useLocation } from "react-router-dom"

const QrCode = () => {
    const path = useLocation().pathname

    return (
        <QRCodeSVG fgColor='var(--dark-brown)' width='100%'
        value={`https://jabones-jya.vercel.app/${path}`} bgColor="transparent" />
    )
}

export default QrCode