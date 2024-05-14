import { Box, Button, Popover, PopoverArrow, PopoverBody, PopoverContent, PopoverHeader, PopoverTrigger } from "@chakra-ui/react"

import QrCode from './atomic/QrCode'

export const QrBubble = () => {
    const squareSize = '80px'

    return (
        <Box width='fit-content' position='fixed' zIndex='10' top='86%' right='4em' data-aos='fade-down'
        data-aos-duration='1200'>
            <Popover closeOnEsc >
                <PopoverTrigger>
                    <Button bgColor='var(--soap)' boxShadow='0 10px 30px -10px var(--soap)'
                        border='1px solid var(--brown)' borderRadius='10px' padding='14px'
                        width={squareSize} height={squareSize} cursor='pointer' >
                        <QrCode />
                    </Button>
                </PopoverTrigger>

                <PopoverContent textAlign='center' padding='.6em 1em'
                bgColor='var(--soap)' borderRadius='10px' position='relative'>
                    <PopoverArrow bgColor='var(--soap)' />
                    <PopoverHeader mb='10px'>Escanea el Qr!</PopoverHeader>
                    {/* <PopoverCloseButton position='absolute' right='100%'/> */}

                    <PopoverBody>
                        <QrCode />
                    </PopoverBody>
                </PopoverContent>
            </Popover>
        </Box>
    )
}
