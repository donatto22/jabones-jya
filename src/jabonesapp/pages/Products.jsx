import { Box, Stack, Text } from "@chakra-ui/react"
import { JabonesLayout } from "../layout/JabonesLayout"

import { CardProduct } from '../components/CardProduct'

// imagenes
import JabonCoco from '../../assets/jabon_coco.jpg'
import JabonAvenaCoco from '../../assets/jabon_avena_coco.jpeg'
import JabonMielManzanilla from '../../assets/jabon_avena_manzanilla.jpeg'
 
const Products = () => {
    return (
        <JabonesLayout>
            <Box width='70%' m='4em auto'>
                <Text fontSize='40px'>
                    Lo más solicitado
                </Text>
                <Stack direction='row' gap='4em'>
                    <CardProduct image={JabonCoco} tooltipLabel='Jabón de coco' />
                    <CardProduct image={JabonAvenaCoco} tooltipLabel='Jabón de Avena y Coco'/>
                    <CardProduct image={JabonMielManzanilla} tooltipLabel='Jabón de Avena y Manzanilla'/>
                </Stack>
            </Box>
        </JabonesLayout>
    )
}

export default Products
