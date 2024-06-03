import { Button, FormControl, FormLabel, HStack, Input, VStack } from "@chakra-ui/react"

import PropTypes from 'prop-types'
import { useRef } from "react"
import { IoIosArrowDroprightCircle } from "react-icons/io"

import toast, { Toaster } from 'react-hot-toast'

const PersonalizedFormControl = ({ label, type, placeholder, maxLength, minLength }) => {
    return (
        <FormControl w='100%' cursor='pointer'>
            <FormLabel mb='.6em' fontWeight='500' cursor='pointer'>{ label }</FormLabel>
            <Input type={ type } maxLength={ maxLength } minLength={ minLength }
            width='100%' placeholder={ placeholder } required
            padding='10px 0' textIndent='1em' bgColor='transparent'
            borderRadius='10px' border='2px solid #eee' sx={{
                '&:hover': {
                    borderColor: '#ddd',
                    cursor: 'pointer'
                },

                '&:focus': {
                    borderColor: '#bbb',
                }
            }}/>
        </FormControl>
    )
}

PersonalizedFormControl.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string
}

export const ContactUsForm = () => {
    const gap = '3em'
    const contactFormRef = useRef()

    const fakeSubmit = (e) => {
        e.preventDefault()
        contactFormRef.current.reset()

        toast.success("Tu mensaje fue enviado!", {
            duration: 3000
        })
    }
    
    return (
        <>
        <Toaster/>
        <VStack width='70%' align='start' gap={gap} as='form' ref={ contactFormRef } onSubmit={ fakeSubmit }>
            <HStack w='100%' gap='2em'>
                <PersonalizedFormControl type='text' label='Nombre' placeholder='John' maxLength={ 20 } />
                <PersonalizedFormControl type='text' label='Apellido' placeholder='Doe' maxLength={ 20 } />
            </HStack>

            <HStack w='100%' gap='2em'>
                <PersonalizedFormControl type='email' label='Correo' placeholder='sample@gmail.com' maxLength={ 30 } />
                <PersonalizedFormControl type='number' label='Teléfono' placeholder='987654321' maxLength={9} />
            </HStack>

            <VStack w='100%' alignItems='start' gap={gap}>
                <PersonalizedFormControl type='text' label='Tema' placeholder='El jabón ' maxLength={ 50 } />
                <PersonalizedFormControl type='text' label='Mensaje' />
            </VStack>

            <Button type='submit'
            cursor='pointer' display='flex' gap='6px' transition='all .2s'
                border='0' padding='.8em 1.4em' borderRadius='10px' bgColor='var(--soap)'
                sx={{
                    '&:hover': {
                        bgColor: 'var(--brown)',
                        color: 'var(--white)'
                    }
                }}>
                Enviar <IoIosArrowDroprightCircle size='20px' />
            </Button>
        </VStack>
        </>
    )
}
