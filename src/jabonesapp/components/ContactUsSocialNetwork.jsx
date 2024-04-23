/* eslint-disable react/jsx-key */
import { Box, HStack, Stack, Text, VStack } from "@chakra-ui/react"

import { IoMdMail as MailIcon } from "react-icons/io"
import { FaPhoneAlt as PhoneIcon } from "react-icons/fa"
import { HiLocationMarker as LocationIcon } from "react-icons/hi"

import { 
    FaFacebook as FacebookIcon, 
    FaInstagram as InstagramIcon,
    FaTiktok as TiktokIcon
} from "react-icons/fa"

import PropTypes from 'prop-types'

const SocialCard = ({ icons, content }) => {
    return (
        <VStack border='2px solid #eee' borderRadius='10px'
        p='1em 0' spacing='1em' alignItems='center' justifyContent='center'>
            <HStack>
            {
                typeof icons == 'object' ? (
                    icons.map((icon) => 
                        <Box key='' w='40px' height='40px' borderRadius='10px' 
                        bgColor='#eee' display='flex' alignItems='center' justifyContent='center'>
                            { icon }
                        </Box>)
                ) : icons
            }
            </HStack>

            <Text margin='0'>{content}</Text>
        </VStack>
    )
}

SocialCard.propTypes = {
    icons: PropTypes.object || PropTypes.string,
    content: PropTypes.string
}


export const ContactUsSocialNetwork = () => {
    return (
        <Stack direction='column' width='30%' spacing='3em'>
            <SocialCard icons={ [<MailIcon />] } content='jyasoap@gmail.com'/>
            <SocialCard icons={ [<PhoneIcon />] } content='996 521 865'/>
            <SocialCard icons={ [<LocationIcon />] } content='Avenida Ejemplo 123'/>
            <SocialCard icons={ [<FacebookIcon />, <TiktokIcon/>, <InstagramIcon/>] } content='Redes Sociales'/>
        </Stack>
    )
}
