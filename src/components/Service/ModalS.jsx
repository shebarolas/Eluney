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
import { FcHome } from 'react-icons/fc'

export const ModalS = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Button onClick={onOpen} className="cardss">
                <FcHome size={30} />
                <span className="textSer">
                    Cabañas para maximo 5 personas
                </span>
            </Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Informacion del Servicio</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <span>Acá deberia ir informacion mas detallada del servicio, dependiendo de ellos pueden ser imagenes, videos, etc</span>
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
