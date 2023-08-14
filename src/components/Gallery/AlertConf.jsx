import React from 'react'
import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
} from '@chakra-ui/react'

export const AlertConf = () => {
    return (
        <>
            <Alert
                status='success'
                variant='subtle'
                flexDirection='column'
                alignItems='center'
                justifyContent='center'
                textAlign='center'
                height='200px'
            >
                <AlertIcon boxSize='40px' mr={0} />
                <AlertTitle mt={4} mb={1} fontSize='lg'>
                    Confirmación de la reserva!!
                </AlertTitle>
                <AlertDescription maxWidth='sm'>
                    La reserva se ha realizado de manera exitosa, por favor revise su correo electronico.
                </AlertDescription>
            </Alert>
        </>
    )
}
