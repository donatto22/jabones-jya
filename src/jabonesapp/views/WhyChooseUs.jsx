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
        <Box display='flex' justifyContent='center'  padding='2em 0 6em'>
            <HStack spacing='10em' justifyContent='center'>
                {/* imagenes */}
                <HStack position='relative'>
                    <Image loading='lazy' src={girl} w='300px' borderRadius='20px' boxShadow='0 20px 100px -40px var(--dark-brown)' />
                    <Image loading='lazy' src={soaps} w='200px' borderRadius='20px' boxShadow='0 20px 100px -40px var(--dark-brown)' position='absolute' right='-100' bottom='-50'/>
                </HStack>

                <VStack w='40%' align='start'>
                    <Text fontSize='40px' fontWeight='500' as='div'>Porqué escogernos?</Text>
                    <Text lineHeight='1.8' w='80%'>
                    Nuestros jabones ofrecen diferentes beneficios desde tratado de la picazón, manchas, acné, piel seca y demás. 
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