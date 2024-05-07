import { Box, Image, Stack, Text } from "@chakra-ui/react"
import { JabonesLayout } from "../layout/JabonesLayout"

import WaveTop from '../../assets/wave-top.svg'
import WaveBottom from '../../assets/wave-bottom.svg'
import MisionImg from '../../assets/mision.webp'
import { PersonalizedButton } from "../components/atomic/PersonalizedButton"
import { Values } from "../components/Values"

const AboutUs = () => {
    return (
        <JabonesLayout>
            <Stack w='70%' m='4em auto 0' direction='column' gap='6em'>
                <Stack direction='column' alignItems='center' textAlign='center'>
                    <Text fontSize='40px' m='0' mb='.1em' color='var(--brown)' data-aos='fade-up' data-aos-duration="1000">Transformamos vidas</Text>
                    <Text w='30%' lineHeight='2' data-aos='fade-up' data-aos-duration="1200">Creémos en tu salud y tu piel desde una experiencia visual hasta el tacto. </Text>
                </Stack>

                <Values/>
            </Stack>

            <Stack gap='0'>
                <Image loading="lazy" src={WaveTop} />

                <Box bgColor='var(--soap)'>
                    <Stack width='70%' m='-4em auto' alignItems='center'
                    direction='row' justifyContent='space-evenly'>
                        <Box w='30%' boxShadow='0 10px 100px -30px var(--brown)' zIndex='1' borderRadius='20px' borderRight='20px' overflow='hidden'>
                            <Image loading="lazy" src={MisionImg}/>
                        </Box>

                        <Stack w='30%' height='100%' alignItems='start'>
                            <Text fontSize='40px' m='0'>Nuestra experiencia</Text>
                            <Text lineHeight='2' fontSize='18px'>
                                Nos preocupamos por ti, e incluso nosotros hemos sentido la necesidad de tener nuestra piel perfecta.

                                Sabemos lo importante que es para ti el cuidado de tu piel, es entonces que nuestra amplia investigación y experiencia lograron  crear el producto que hoy puedes tener.
                            </Text>

                            <PersonalizedButton text='Contáctanos' shadow/>
                        </Stack>
                    </Stack>
                </Box>

                <Image loading="lazy" src={WaveBottom} />
            </Stack>
        </JabonesLayout>
    )
}

export default AboutUs