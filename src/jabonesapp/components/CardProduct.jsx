import { Box, Button, Text, Tooltip, VStack } from "@chakra-ui/react"
import { FaShoppingBag } from "react-icons/fa"

import PropTypes from 'prop-types'

export const CardProduct = ({ image, title, price }) => {
    const sendWhatsapp = () => {
        const phone = '+51908999237'

        const url = `https://wa.me/${phone}?text=Hola! Me gustaría más información acerca del ${title} de precio S/. ${price}`
        window.open(url, '_blank')
    }

    return (
        <Box width='30%'>
            <Text fontSize='20px'>{title}</Text>
            <VStack bgImage={image} bgPosition='center' bgSize='cover'
                bgRepeat='no-repeat'
                bgColor='red' borderRadius='40px' height='500px'
                justifyContent='space-between' alignItems='end'>
                <Box color='var(--soap)' bgColor='var(--brown)' p='1em 1.6em'
                    borderRadius='0 40px' fontSize='20px'> S/. {price}</Box>


                <Button cursor='pointer' p='.8em 0' m='0 auto 1em' leftIcon={<FaShoppingBag />}
                    width='90%' bgColor='rgba(0, 0, 0, .8)' borderRadius='40px'
                    color='var(--white)' border='0' onClick={() => sendWhatsapp()}
                    sx={{
                        '&:hover': {
                            bgColor: 'rgba(0, 0, 0, .9)'
                        }
                    }}>
                    Comprar
                </Button>
            </VStack>
        </Box>
    )
}

CardProduct.propTypes = {
    price: PropTypes.string,
    title: PropTypes.string
}
