import { Box, Image, Stack, Text } from "@chakra-ui/react"
import { JabonesLayout } from "../layout/JabonesLayout"

import WaveTop from '../../assets/wave-top.svg'
import WaveBottom from '../../assets/wave-bottom.svg'
import MisionImg from '../../assets/mision.webp'

const AboutUs = () => {
    return (
        <JabonesLayout>
            <Stack w='70%' m='4em auto 0' direction='column' gap='4em'>
                <Stack direction='column' alignItems='center'>
                    <Text fontSize='40px' m='0' mb='.1em' color='var(--brown)'>Acerca de nosotros</Text>
                    <Text w='30%' textAlign='center' lineHeight='2'>Creémos en tu salud y tu piel desde una experiencia visual hasta el tacto. </Text>
                </Stack>
            </Stack>

            <Box>
                <Image loading="lazy" src={WaveTop} />

                <Box bgColor='var(--soap)'>
                    <Stack width='70%' m='0 auto' alignItems='center'
                    direction='row' justifyContent='space-evenly'>
                        <Box w='30%' boxShadow='0 10px 100px -30px var(--brown)' zIndex='1' borderRadius='20px' borderRight='20px' overflow='hidden'>
                            <Image loading="lazy" src={MisionImg}/>
                        </Box>

                        <Stack w='30%' height='100%'>
                            <Text fontSize='30px' m='0'>Nuestra experiencia</Text>
                            <Text lineHeight='2' fontSize='18px'>
                                Nos preocupamos por ti, e incluso nosotros hemos sentido la necesidad de tener nuestra piel perfecta.

                                Sabemos lo importante que es para ti el cuidado de tu piel, es entonces que nuestra amplia investigación y experiencia lograron  crear el producto que hoy puedes tener.
                            </Text>
                        </Stack>
                    </Stack>
                </Box>

                <Image loading="lazy" src={WaveBottom} />
            </Box>
        </JabonesLayout>
    )
}

export default AboutUs