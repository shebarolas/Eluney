import React from 'react'
import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
    Button
} from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

export const AlerRej = () => {
    const {
        isOpen: isVisible,
        onClose,
        onOpen,
      } = useDisclosure({ defaultIsOpen: true })
    
  return isVisible && (
    <>
            <Alert
                status='error'
                variant='subtle'
                flexDirection='column'
                alignItems='center'
                justifyContent='center'
                textAlign='center'
                height='200px'
            >
                <AlertIcon boxSize='40px' mr={0} />
                <AlertTitle mt={4} mb={1} fontSize='lg'>
                    Error en el Formulario!!
                </AlertTitle>
                <AlertDescription maxWidth='sm'>
                    No se ha podido enviar el formulario, existen datos incompletos o invalidos, verificar rut y horario de Check In!!!!!!
                </AlertDescription>
                <Button colorScheme='red' onClick={onClose}>
                    Ok
                </Button>
            </Alert>
        </>
  )
}
