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

        <Box bgColor='var(--dark-brown)' h={ banner && '420px' } display='flex' alignItems='end'>
            {/* el contenedor que centra el footer */}
            <HStack w='70%' m='0 auto' justifyContent='space-between' color='var(--white)'>
                {/* el contenedor con el nombre y corto texto de la empresa */}
                <VStack  align='start' maxWidth='300px'>
                    <Text fontSize='24px' as='div' >Jabones JyA</Text>
                    <Text color='var(--soap)' lineHeight='1.6'>
                        Cuida tu piel de forma natural, sin químicos ni productos alterados.
                    </Text>
                </VStack>

                <HStack>
                    <Box></Box>

                    <HStack spacing='6em' p='4em 0'>
                        <VStack align='start' spacing='2em'>
                            <Box fontSize='18px' fontWeight='bold'>Enlaces</Box>

                            <VStack align='start' spacing='1em' color='var(--soap)'>
                                <Box>Inicio</Box>
                                <Box>Catalogo</Box>
                                <Box>Contacto</Box>
                            </VStack>
                        </VStack>

                        <VStack align='start' spacing='2em'>
                            <Box fontSize='18px' fontWeight='bold'>Contacto</Box>

                            <VStack align='start' spacing='1em' color='var(--soap)'>
                                <Box>Email: jyasoap@gmail.com</Box>
                                <Box>Dirección: direccion 123</Box>

                                <Box>Teléfono: 996 521 865</Box>
                            </VStack>
                        </VStack>
                    </HStack>
                </HStack>
            </HStack>
        </Box>
    </>
    )
}
