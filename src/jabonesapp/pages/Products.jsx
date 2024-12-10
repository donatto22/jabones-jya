import { Box, Stack, Text } from "@chakra-ui/react"
import { JabonesLayout } from "../layout/JabonesLayout"

import { CardProduct } from '../components/CardProduct'

// imagenes
import JabonCoco from '../../assets/jabon_coco.jpg'
import JabonAvenaCoco from '../../assets/jabon_avena_coco.jpeg'
import JabonMielManzanilla from '../../assets/jabon_avena_manzanilla.jpeg'

import Shampoo1 from '../../assets/shampoo1.webp'
import Rizos from '../../assets/rizos.jpg'
import Graso from '../../assets/graso.jpg'
import Seco from '../../assets/seco.jpg'

const Products = () => {
    return (
        <JabonesLayout>
            <Box width='70%' m='4em auto'>
                <Text fontSize='40px'>
                    Lo más solicitado
                </Text>
                <Stack direction='row' gap='4em'>
                    <CardProduct price={8} image={JabonCoco} title='Jabón de coco' />
                    <CardProduct price={8} image={JabonAvenaCoco} title='Jabón de Avena y Coco' />
                    <CardProduct price={8} image={JabonMielManzanilla} title='Jabón de Avena y Manzanilla' />
                </Stack>
            </Box>

            <Box width='70%' m='4em auto'>
                <Text fontSize='40px'>
                    Nuevos Productos
                </Text>
                <Stack direction='row' gap='4em' flexWrap='wrap'>
                    <CardProduct price={25} image={Shampoo1} title='Shampoo Líquido para cabello graso' />
                    <CardProduct price={22.80} image={Seco} title='Shampoo sólido para cabello seco' />
                    <CardProduct price={22} image={Graso} title='Shampoo sólido para cabello graso' />
                    <CardProduct price={22} image={Rizos} title='Shampoo sólido para rizos definidos' />
                </Stack>
            </Box>
        </JabonesLayout>
    )
}

export default Products
