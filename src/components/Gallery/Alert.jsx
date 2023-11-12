import React, { useEffect, useState } from 'react'
import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    AlertDialogCloseButton,
    useDisclosure,
    Button,
  } from '@chakra-ui/react'

export const Alert = ({onSubmit, isValid}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = React.useRef()
    console.log(isValid)
    return (
      <>
        <Button colorScheme='green' onClick={onOpen} isDisabled={isValid}>
          Enviar
        </Button>
        <AlertDialog
          isOpen={isOpen}
          leastDestructiveRef={cancelRef}
          onClose={onClose}
        >
          <AlertDialogOverlay>
            <AlertDialogContent>
              <AlertDialogHeader fontSize='lg' fontWeight='bold'>
               Confirmación de reserva
              </AlertDialogHeader>
  
              <AlertDialogBody>
                ¿Esta seguro de realizar la reservación?
                Una vez se envie el formulario le llegará un email de recepción
              </AlertDialogBody>
  
              <AlertDialogFooter>
                <Button ref={cancelRef} onClick={onClose}>
                  Cancelar
                </Button>
                <Button colorScheme='green' onClick={onSubmit} ml={3}>
                  Enviar
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      </>
    )
}
