import { Box, Image, HStack } from '@chakra-ui/react'
import LockerGLogo from '../../assets/lockerglogo.png'

import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export const NavLinks = ({ positionAbsolute = false }) => {
    const stylesAdditionals = positionAbsolute ? {
        position: 'absolute',
    } : ''

    const linkHoverSx = {
        '&:hover': {
            boxShadow: '0 2px 0px var(--white)'
        }
    }

    return (
        <Box { ...stylesAdditionals } p='.6em 0' zIndex={1} w='100%'>
            <Box w='90%' m='0 auto'  display='flex' alignItems='center' justifyContent='space-between'>
                <Box w='70px'>
                    <Image src={LockerGLogo}/>
                </Box>
                
                <Box color='var(--white)'>
                    <HStack spacing={20}>
                        <Box sx={{ ...linkHoverSx }} py='10px' cursor='pointer'>Inicio</Box>
                        <Box sx={{ ...linkHoverSx }} py='10px' cursor='pointer'>Nosotros</Box>
                        <Box sx={{ ...linkHoverSx }} py='10px' cursor='pointer'>
                            <Link to='/contact'>Contáctanos</Link>    
                        </Box>
                    </HStack>
                </Box>
            </Box>
        </Box>
    )
}

NavLinks.propTypes = {
    positionAbsolute: PropTypes.bool
}
