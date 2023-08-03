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
// import caba1 from "../../imgs/cabañas invierno.jpg"
// import caba2 from "../../imgs/Cabañas.jpg"
// import caba3 from "../../imgs/cafeteria 2.jpg"
import '../../styles/modals.css'
import { Sliders } from './Sliders'


export const Modals = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Button onClick={onOpen}>Ver Galeria</Button>

            <Modal isOpen={isOpen} onClose={onClose} className="modalss">
                <ModalOverlay />
                <ModalContent className='modalCont'>
                    <ModalHeader>Galeria Cabaña</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <div className="all">
                            <Sliders/>
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
