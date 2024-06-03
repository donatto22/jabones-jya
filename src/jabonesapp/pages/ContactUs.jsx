import { Box, Text, VStack, HStack } from "@chakra-ui/react"
import { JabonesLayout } from "../layout/JabonesLayout"
import { ContactUsForm } from "../components/ContactUsForm"
import { ContactUsSocialNetwork } from "../components/ContactUsSocialNetwork"

const ContactUs = () => {
    return (
        <JabonesLayout>
            <Box w='100%' minH='50dvh' display='flex' justifyContent='center' flexDir='column' alignItems='flex-start'>
                <VStack w='70%' m='4em auto' gap='4em'>
                    <HStack justifyContent='space-between' boxShadow='0 2px 0 #ddd' pb='2em'>
                        <Box>
                            <Text fontSize='30px' m={0} width='fit-content' fontWeight='500'>Contacto</Text>
                        </Box>

                        <Box width='60%' lineHeight='1.4' color='#999'>
                            <Text>¡Nos encanta ser parte de tu rutina de cuidado de la piel! Si tienes alguna pregunta sobre nuestros jabones, necesitas asesoramiento sobre qué producto elegir para tu tipo de piel, o simplemente deseas compartir tu experiencia con nuestros productos, ¡no dudes en contactarnos!</Text>
                            <Text>Estamos aquí para ayudarte a encontrar el jabón perfecto que se adapte a tus necesidades y te ayude a lograr una piel radiante y saludable.</Text>
                        </Box>

                    </HStack>

                    <Box bgColor='#f7f7f7' w='100%' borderRadius='20px' height='100%'>
                        <HStack padding='4em' spacing='5em' align='start'>
                            {/* formulario */}
                            <ContactUsForm />

                            {/* cards de contacto */}
                            <ContactUsSocialNetwork />
                        </HStack>
                    </Box>
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