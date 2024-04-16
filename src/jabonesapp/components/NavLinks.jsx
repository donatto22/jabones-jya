import { Box, Image, HStack } from '@chakra-ui/react'
import LockerGLogo from '../../assets/lockerglogo.png'

import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const PersonalizedLink = ({ hover, title, url, color }) => {
    const linkColor = (color == 'white') ? 'var(--white)' : 'black'

    return (
        <Box sx={{ ...hover }} py='10px' cursor='pointer'>
            <Link to={url}>
                <Box color={linkColor}>{ title }</Box>
            </Link>
        </Box>
    )
}

PersonalizedLink.propTypes = {
    hover: PropTypes.object,
    title: PropTypes.string,
    url: PropTypes.string,
    color: PropTypes.string
}

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
                    <Image src={LockerGLogo} loading='lazy' filter='drop-shadow(2px 2px 2px #000)'/>
                </Box>
                
                <Box color='var(--white)'>
                    <HStack spacing={20}>
                        <PersonalizedLink hover={linkHoverSx} color='white' title='Inicio' url='/' />
                        <PersonalizedLink hover={linkHoverSx} color='white' title='Contáctanos' url='/contact' />
                        <PersonalizedLink hover={linkHoverSx} color='white' title='Catálogo' url='/products' />
                    </HStack>
                </Box>
            </Box>
        </Box>
    )
}

NavLinks.propTypes = {
    positionAbsolute: PropTypes.bool
}
