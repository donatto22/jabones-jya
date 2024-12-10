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

const SocialCard = ({ icons, iconsUrl, content }) => {
    return (
        <VStack border='2px solid #eee' borderRadius='10px' cursor={iconsUrl ? 'pointer' : 'default'}
            p='1em 0' spacing='1em' alignItems='center' justifyContent='center'>
            <HStack>
                {
                    icons ? (
                        icons.map((icon, key) =>
                            <Box key='' w='40px' height='40px' borderRadius='10px' onClick={iconsUrl ? (() => window.open(`${iconsUrl[key]}`, '_blank')) : null}
                                bgColor='#eee' display='flex' alignItems='center' justifyContent='center'>
                                {icon}
                            </Box>)
                    ) : icons
                }
            </HStack>

            <Text margin='0'>{content}</Text>
        </VStack>
    )
}

SocialCard.propTypes = {
    icons: PropTypes.array,
    content: PropTypes.string
}


export const ContactUsSocialNetwork = () => {
    return (
        <Stack direction='column' width='30%' spacing='3em'>
            <SocialCard icons={[<MailIcon />]} content='jyasoap@gmail.com' />
            <SocialCard icons={[<PhoneIcon />]} iconsUrl={['https://api.whatsapp.com/send?phone=51996521865']} content='908 999 237' />
            <SocialCard icons={[<LocationIcon />]} content='Delivery acordado' />

            <SocialCard icons={[<FacebookIcon />, <TiktokIcon />, <InstagramIcon />]}
                iconsUrl={[
                    'https://www.facebook.com/profile.php?id=61560916891198',
                    'https://www.tiktok.com/@jyajabonesartesan?_t=8oPl8LRNxkT&_r=1',
                    'https://www.instagram.com/jya.328?igsh=MTFiNXFrNDd3amdiNA==']}
                content='Redes Sociales' />
        </Stack>
    )
}
