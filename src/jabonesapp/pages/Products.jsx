import { Box, Stack, Text } from "@chakra-ui/react"
import { JabonesLayout } from "../layout/JabonesLayout"

import { CardProduct } from '../components/CardProduct'

// imagenes
import JabonCoco from '../../assets/jabon_coco.jpg'
import LavandaSoapImage from '../../assets/lavanda_soap.jpg'
 
const Products = () => {
    return (
        <JabonesLayout>
            <Box width='70%' m='4em auto'>
                <Text fontSize='40px'>
                    Lo más solicitado
                </Text>
                <Stack direction='row' gap='4em'>
                    <CardProduct price='12' image={JabonCoco} tooltipLabel='Jabón de coco' />
                    <CardProduct price='13' image={LavandaSoapImage} tooltipLabel='Jabón de lavanda'/>
                </Stack>
            </Box>
        </JabonesLayout>
    )
}

export default Products
