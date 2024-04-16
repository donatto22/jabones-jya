import { Box, HStack, Image, Text, VStack } from '@chakra-ui/react'

// images
import girl from '../../assets/girl.webp'
import soaps from '../../assets/soaps.webp'
import { IoIosCheckmarkCircle } from 'react-icons/io'

import PropTypes from 'prop-types'

const CheckIcon = () => {
    return <IoIosCheckmarkCircle color='green'/>
}

const ItemList = ({ description }) => {
    return (
        <Box display='flex' alignItems='center' gap='8px'>
            <CheckIcon /> { description }
        </Box>
    )
}

ItemList.propTypes = {
    description: PropTypes.string
}

export const WhyChooseUs = () => {
    return (
        <Box minHeight='100dvh' display='flex' justifyContent='center'>
            <HStack spacing='10em' justifyContent='center'>
                {/* imagenes */}
                <HStack position='relative'>
                    <Image loading='lazy' src={girl} w='300px' borderRadius='20px'/>
                    <Image loading='lazy' src={soaps} w='200px' borderRadius='20px' position='absolute' right='-100' bottom='-50'/>
                </HStack>

                <VStack w='40%' align='start'>
                    <Text fontSize='40px' fontWeight='500' as='div'>Porqué escogernos?</Text>
                    <Text lineHeight='1.8' w='80%'>
                        Con más de 4000+ reseñas y hemos logrado cambiar la vida y piel de nuestros compradores. 
                    </Text>

                    <VStack spacing='1em' align='start'>
                        <ItemList description='Diferentes tipos de jabón y propósito' />
                        <ItemList description='Atención todo los días por redes' />
                        <ItemList description='Jabón natural sin químicos' />
                        <ItemList description='Seguimiento con el comprador para el tratado de su piel' />
                    </VStack>
                </VStack>
            </HStack>
        </Box>
    )
}