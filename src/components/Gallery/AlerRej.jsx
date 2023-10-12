import React from 'react'
import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
} from '@chakra-ui/react'

export const AlerRej = () => {
  return (
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
                    No se ha podido enviar el formulario, campos incompletos!!!!!!
                </AlertDescription>
            </Alert>
        </>
  )
}
