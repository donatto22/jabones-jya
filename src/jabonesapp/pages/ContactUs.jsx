import { Box, Text,
    FormControl,
    FormLabel,
    Input,
    VStack, } from "@chakra-ui/react"
import { JabonesLayout } from "../layout/JabonesLayout"

const PersonalizedInput = ({ ...props }) => {
    return <Input { ...props } border='0' borderRadius='4px' mt='10px' p='.4em 0' textIndent={10}/>
}

const ContactUs = () => {
    return (
        <JabonesLayout>
            <Box w='100%' h='80dvh' display='flex' justifyContent='center' flexDir='column' alignItems='flex-start'>
                <Box w='80%' m='0 auto'>
                    <Text fontSize='30px' mt={0} boxShadow='0 2px 0 black' width='fit-content'>Contacto</Text>
                    <Text fontSize='30px' mt={0} width='fit-content'>. . .</Text>

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