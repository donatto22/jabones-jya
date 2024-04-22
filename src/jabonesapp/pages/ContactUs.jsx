import { Box, Text,
    FormControl,
    FormLabel,
    Input,
    VStack,
    HStack, } from "@chakra-ui/react"
import { JabonesLayout } from "../layout/JabonesLayout"

const PersonalizedInput = ({ ...props }) => {
    return <Input { ...props } border='0' borderRadius='4px' mt='10px' p='.4em 0' textIndent={10}/>
}

const ContactUs = () => {
    return (
        <JabonesLayout>
            <Box w='100%' h='80dvh' display='flex' justifyContent='center' flexDir='column' alignItems='flex-start'>
                <VStack w='70%' m='0 auto'>
                    <HStack justifyContent='space-between' boxShadow='0 2px 0 #ddd' pb='2em'>
                        <Box>
                            <Text fontSize='30px' m={0} width='fit-content' fontWeight='500'>Contacto</Text>
                        </Box>

                        <Box width='60%' lineHeight='1.4' color='#999'>
                            <Text>¡Nos encanta ser parte de tu rutina de cuidado de la piel! Si tienes alguna pregunta sobre nuestros jabones, necesitas asesoramiento sobre qué producto elegir para tu tipo de piel, o simplemente deseas compartir tu experiencia con nuestros productos, ¡no dudes en contactarnos!</Text>
                            <Text>Estamos aquí para ayudarte a encontrar el jabón perfecto que se adapte a tus necesidades y te ayude a lograr una piel radiante y saludable.</Text>
                        </Box>

                    </HStack>

                    <HStack>
                        {/* formulario */}
                        <Box>. . .</Box>

                        {/* cards de contacto */}
                    </HStack>
                </VStack>
                <Box>

                    {/* <VStack align='start'>
                        <FormControl>
                            <FormLabel>Correo</FormLabel>
                            <PersonalizedInput type='email' />
                        </FormControl>

                        <FormControl>
                            <FormLabel>Telefono</FormLabel>
                            <PersonalizedInput type='number' />
                        </FormControl>
                    </VStack> */}
                </Box>
            </Box>
        </JabonesLayout>
    )
}

export default ContactUs