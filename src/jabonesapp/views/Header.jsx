import { Box, Text, Button } from '@chakra-ui/react'

import { motion } from 'framer-motion'

import { IoIosArrowDroprightCircle } from "react-icons/io"

import soapImage from '../../assets/soap.jpg'

const variants = {
    hidden: { opacity: 0, x: 0, y: 200 },
    enter: { opacity: 1, x: 0, y: 0 },
}

export const Header = () => {
    return (
        <Box w='100dvw' h='100dvh'>
            <Box overflow='hidden' w='100%' h='100%' bgImage={`url(${soapImage})`}
            bgRepeat='no-repeat' bgPosition='center' bgSize='cover'></Box>

                <Box position='absolute' top='0' w='100%' h='100%' bgColor='rgba(0, 0, 0, .3)'
                display='flex' flexDir='column'  justifyContent='center' alignItems='center'>
                    <motion.div variants={variants} initial='hidden' animate='enter' transition={{ type: "linear", duration: 1.2 }}>
                        <Text fontWeight='bold' fontSize='60px' color='var(--soap)' m='0 auto' width='60%' textAlign='center' letterSpacing={3} mb='.6em'>
                            Cuida tu piel de forma natural y sé suave
                        </Text>
                    </motion.div>

                    {/* <Text fontWeight='bold' bgColor='red' fontSize='60px' color='var(--soap)' width='50%' textAlign='center' letterSpacing={3} mb='.6em'>
                        Cuida tu piel de forma natural y suave
                    </Text> */}
                    
                    <motion.div variants={variants} initial='hidden' animate='enter' transition={{ type: "linear", duration: 1.4 }}>
                    <Button display='flex' gap='10px' transition='gap .2s'
                    border='2px solid' color='var(--soap)' borderRadius='100px' padding='.8em 2em'
                    bgColor='var(--dark-brown)' borderColor='var(--soap)' cursor='pointer' sx={{ 
                        '&:hover': {
                            gap: '20px'
                        }
                    }}>
                        Cuidar piel

                        <IoIosArrowDroprightCircle size='36px'/>
                    </Button>
                    </motion.div>


                </Box>

        </Box>
    )
}
