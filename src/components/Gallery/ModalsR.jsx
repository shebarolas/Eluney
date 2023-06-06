import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
} from '@chakra-ui/react'
import '../../styles/modalsR.css'

export const ModalsR = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Button colorScheme='blue' onClick={onOpen}>Reservar</Button>

            <Modal isOpen={isOpen} onClose={onClose} className="modalss">
                <ModalOverlay />
                <ModalContent className='modalCont'>
                    <ModalHeader>Formulario Reserva</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <div className="alls">
                            <input type="text" className='borderI' placeholder='Nombre'/>
                            <input type="text" className='borderI' placeholder='Apellido'/>
                            <input type="email" className='borderI'placeholder='Emial'/>
                            <textarea name="Mensaje" className='borderI' cols="30" rows="10" placeholder="Mensaje"></textarea>
                            <button>Enviar</button>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Cerrar
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}
