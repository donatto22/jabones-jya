import { Box, Text, HStack, VStack } from '@chakra-ui/react'

import StarRatings from 'react-star-ratings'
import { PersonalizedButton } from '../components/atomic/PersonalizedButton'

// imagenes
import JabonCoco from '../../assets/jabon_coco.jpg'
import AvenaCoco from '../../assets/jabon_avena_coco.jpeg'
import MielManzanilla from '../../assets/jabon_avena_manzanilla.jpeg'

const ProductCard = ({ imageUrl, productTitle, productDescription, aosDuration }) => {
    return (
        <VStack data-aos="fade-left" data-aos-duration={aosDuration}
        align='start' w='240px' boxShadow='0 0 20px -16px var(--brown)'
        padding='1.4em' borderRadius='calc(10px + 1em/2)'>
            <Box borderRadius='10px' overflow='hidden' w='240px' h='160px'
            bgImage={imageUrl} bgSize='cover' bgPos='center'
            >
                {/* <Image src={imageUrl} width='240px' alt={productTitle} loading='lazy' /> */}
            </Box>

            <VStack align='start' m='1em 0'>
                <Text fontSize='20px' m={0} fontWeight='500'>{productTitle}</Text>
                <Text m='10px 0' lineHeight='1.4'>{productDescription}</Text>
                <StarRatings starRatedColor='gold' rating={4} starDimension='20px' starSpacing='4px' />
            </VStack>

            <Box fontSize='20px' fontWeight='bold'>
                S/. 8
            </Box>
        </VStack>
    )
}

export const TrendingProducts = () => {
    return (
        <Box minH='70dvh' display='flex' m='4em 0 0'>
            <HStack w='90%' m='0 auto'>
                <VStack width='30%' h='100%' justifyContent='center' align='start'>
                    <Text fontSize='14px' m={0} color='var(--one)' fontWeight='bold'>Alta calidad</Text>
                    <Text fontSize='30px' m={0} fontWeight='500' lineHeight='1.6'>Nuestros productos en tendencia</Text>
                    <Text lineHeight='1.6'>Descubre nuestros productos más solicitados para el cuidado de la piel. Desde clásicos, exfoliantes hasta de frutas nativas. Estos jabones te ayudarán a mejorar lo que necesites.</Text>

                    <PersonalizedButton text='Ver todos'/>
                </VStack>

                <HStack width='70%' justify='end' spacing='3em'>
                    <ProductCard
                    aosDuration='1200'
                    imageUrl={JabonCoco}
                    productTitle='Jabón de coco'
                    productDescription='Perfecto para tratar hipersensibilidad e irritación' />
                    
                    <ProductCard
                    aosDuration='1400'
                    imageUrl={AvenaCoco}
                    productTitle='Avena y Coco'
                    productDescription='Excelente humectante de piel además de evitar piel graso.' />
                    
                    <ProductCard
                    aosDuration='1400'
                    imageUrl={MielManzanilla}
                    productTitle='Avena y manzanilla'
                    productDescription='Indicado para piel delicada, sensible o rosácea.' />
                    
                </HStack>
            </HStack>
        </Box>
    )
}
