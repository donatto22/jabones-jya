import { Link } from 'react-router-dom'

import { Box, Button, VStack } from '@chakra-ui/react'
import { IoIosArrowDroprightCircle } from 'react-icons/io'

import towels from '../../assets/towels.webp'

export const Banner = () => {
    return (
        <Box w='80%' m='0 auto' borderRadius='30px' mt='-2em' overflow='hidden'
            h='300px' transform='translate(0, 50%)' bgImage={towels} bgSize='cover' bgPosition='center'>
            {/* oscurecedor */}
            <VStack bgColor='rgba(0, 0, 0, .4)' h='100%' justifyContent='center' spacing='1.4em'>
                <Box w='50%' m='0 auto' textAlign='center' fontSize='30px' fontWeight='bold' lineHeight='1.4'
                    color='var(--white)'>
                    Por que un cuerpo suave y sexy empodera
                </Box>

                <Link to='/products'>
                    <Button cursor='pointer' display='flex' gap='6px' transition='all .2s'
                        border='0' padding='.8em 1.4em' borderRadius='30px' bgColor='var(--soap)'
                        sx={{
                            '&:hover': {
                                bgColor: 'var(--brown)',
                                color: 'var(--white)'
                            }
                        }}>
                        Cuida tu piel
                        <IoIosArrowDroprightCircle size='20px' />
                    </Button>
                </Link>
            </VStack>
        </Box>
    )
}
