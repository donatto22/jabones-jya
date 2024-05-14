import { Stack, Text } from "@chakra-ui/react"

import PropTypes from 'prop-types'

const CardValue = ({ title, description, aosDuration }) => {
    return (
        <Stack 
        gap='1em' textAlign='center'py='2em' borderRadius='20px'
        alignItems='center' boxShadow='0 20px 100px -10px var(--soap)' 
        data-aos='fade-up' data-aos-duration={ aosDuration }>
            <Text m='0' p='0' fontSize='20px' color='var(--dark-brown)'>{title}</Text>
            <Text m='0' p='0' w='60%' lineHeight='2' color='var(--brown)'>{description}</Text>
        </Stack>
    )
}

CardValue.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  aosDuration: PropTypes.string,
}

export const Values = () => {
  return (
    <Stack direction='row' justifyContent='space-evenly' flexWrap='wrap' gap='4em'>
        <CardValue aosDuration='1300' title='Transpariencia' description='Ser abiertos con ustedes desde cualquier parte'/>
        <CardValue aosDuration='1400' title='Calidad' description='Darle a ustedes lo que su piel necesita es primero'/>
        <CardValue aosDuration='1500' title='Confianza' description='Tu piel sexy sabe que jabón debe escoger' />
    </Stack>
  )
}
