/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

import { Box, Text, HStack, VStack } from '@chakra-ui/react'

import { Banner } from "../components"

export const Footer = () => {
    const location = useLocation()
    const [banner, setBanner] = useState(true)

    useEffect(() => {
        if(location.pathname == '/') {
            setBanner(true)
        } else setBanner(false)
    }, [])

    return (
    <>
        {/* se mostrará el banner si está en la página de inicio */}
        { banner && <Banner/> }

        <Box bgColor='var(--dark-brown)' h='360px' display='flex' alignItems='end'>
            {/* el contenedor que centra el footer */}
            <HStack w='80%' m='0 auto' bgColor='violet'>
                {/* el contenedor con el nombre y corto texto de la empresa */}
                <VStack>
                    <Text>Jabones JyA</Text>
                </VStack>
                <HStack>
                    <Box></Box>

                    <HStack spacing={10}>
                        <VStack align='start'>
                            <Box fontSize='18px' fontWeight='bold'>Enlaces</Box>

                            <VStack align='start'>
                                <Box>Inicio</Box>
                                <Box>Catalogo</Box>
                                <Box>Contacto</Box>
                            </VStack>
                        </VStack>

                        <VStack align='start'>
                            <Box fontSize='18px' fontWeight='bold'>Enlaces</Box>

                            <VStack align='start'>
                                <Box>Inicio</Box>
                                <Box>Catalogo</Box>
                                <Box>Contacto</Box>
                            </VStack>
                        </VStack>
                    </HStack>
                </HStack>
            </HStack>
        </Box>
    </>
    )
}
