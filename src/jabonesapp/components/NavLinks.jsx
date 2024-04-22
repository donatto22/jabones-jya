import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import { Box, Image, HStack, position } from '@chakra-ui/react'

import LockerGLogo from '../../assets/lockerglogo.png'
import { useTheme } from '../hooks/useTheme'

const PersonalizedLink = ({ hover, title, url }) => {
    const { linkColor } = useTheme()

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
    const { linkColor } = useTheme()

    const stylesAdditionals = positionAbsolute ? {
        position: 'absolute',
    } : { position: 'relative' }

    const linkHoverSx = {
        '&:hover': {
            boxShadow: `0 2px 0px ${linkColor}`
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
