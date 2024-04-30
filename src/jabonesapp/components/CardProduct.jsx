import { Box, Button, Tooltip, VStack } from "@chakra-ui/react"
import { FaShoppingBag } from "react-icons/fa"

import PropTypes  from 'prop-types'

export const CardProduct = ({ image, price, tooltipLabel }) => {
    const sendWhatsapp = ({ price, tooltipLabel }) => {
        const phone = '+51996521865'

        const url = `https://wa.me/${phone}?text=Hola! Me gustaría más información acerca del ${tooltipLabel} de precio S/. ${price}`
        window.open(url, '_blank')
    }

    return (
        <VStack bgImage={ image } bgPosition='center' bgSize='cover'
        bgRepeat='no-repeat' width='50%'
        bgColor='red' borderRadius='40px' height='500px'
        justifyContent='space-between' alignItems='end'>
            <Box color='var(--soap)' bgColor='var(--brown)' p='1em 1.6em'
            borderRadius='0 40px' fontSize='20px'> S/. { price || '10' }</Box>

            <Tooltip label={tooltipLabel} bgColor='rgba(0, 0, 0, .4)' p='10px 20px' color='var(--white)' borderRadius='20px' placement="top">
                <Button cursor='pointer' p='.8em 0' m='0 auto 1em' leftIcon={<FaShoppingBag/>} 
                width='90%' bgColor='rgba(0, 0, 0, .8)' borderRadius='40px'
                color='var(--white)' border='0' onClick={() => sendWhatsapp({ price, tooltipLabel })}
                sx={{
                    '&:hover': {
                        bgColor: 'rgba(0, 0, 0, .9)'
                    }
                }}>
                    Comprar
                </Button>
            </Tooltip>
        </VStack>
    )
}

CardProduct.propTypes = {
    price: PropTypes.string,
    tooltipLabel: PropTypes.string
}
