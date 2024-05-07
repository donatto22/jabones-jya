import { Link } from 'react-router-dom'

import { Box, VStack } from '@chakra-ui/react'

import towels from '../../assets/towels.webp'
import { PersonalizedButton } from './atomic/PersonalizedButton'

export const Banner = () => {
    return (
        <Box w='80%' m='0 auto' borderRadius='30px' mt='-6em' overflow='hidden'
            h='300px' transform='translate(0, 50%)' bgImage={towels} bgSize='cover' bgPosition='center'>
            {/* oscurecedor */}
            <VStack bgColor='rgba(0, 0, 0, .4)' h='100%' justifyContent='center' spacing='1.4em'>
                <Box w='50%' m='0 auto' textAlign='center' fontSize='30px' fontWeight='bold' lineHeight='1.4'
                    color='var(--white)'>
                    Por que un cuerpo suave y sexy empodera
                </Box>

                <Link to='/products'>
                    <PersonalizedButton text='Cuida tu piel' />
                </Link>
            </VStack>
        </Box>
    )
}
