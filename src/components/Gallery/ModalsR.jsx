import React, { useState } from 'react'
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

    const [email, setEmail] = useState("");
    const [nombre, setNombre] = useState("");
    const [apellidos, setApellidos] = useState("");
    const [cabañas, setCabañas] = useState("");
    const [personas, setPersonas] = useState("");
    const [fecha, setFecha] = useState("");
    const [hijos, setHijos] = useState("");
    const [mascotas, setMascotas] = useState("");

    const sendEmail = async () => {
        const dataSend = {
            email: email,
            nombre: nombre,
            apellidos: apellidos,
            cabañas: cabañas,
            personas: personas,
            fecha: fecha,
            hijos: hijos,
            mascotas: mascotas
        }

        await fetch(`http://localhost:9000/massage/enviar`, {
            method: "POST",
            body: JSON.stringify(dataSend),
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        }).then((res) => {
            console.log(res);
            if (res.status > 199 && res.status < 300) {
                alert("Send Successfully !");
            }
        }).catch((err) => {
            console.log(err);
        });
    }


    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <>
            <Button colorScheme='blue' onClick={onOpen}>Reservar</Button>

            <Modal isOpen={isOpen} onClose={onClose} className="modalss">
                <ModalOverlay />
                <ModalContent className='modalCont'>
                    <ModalHeader>Formulario Reserva</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <div className="globalMod">
                            <div className="cabaI">
                                <span>Informacion</span>
                            </div>
                            <div className="alls">
                                <input type="text" className='borderI' placeholder='Nombre' onChange={(e) => setNombre(e.target.value)} />
                                <input type="text" className='borderI' placeholder='Apellido' onChange={(e) => setApellidos(e.target.value)} />
                                <input type="email" className='borderI' placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
                                <input type="text" className='borderI' placeholder='Cabañas' onChange={(e) => setCabañas(e.target.value)} />
                                <input type="number" className='borderI' placeholder='Personas' onChange={(e) => setPersonas(e.target.value)} />
                                <input type="week" className='borderI' placeholder='fecha' onChange={(e) => setFecha(e.target.value)} />
                                <div className="children">
                                    <label for="hijos">Hijos menores de dos años</label>
                                    <input type="checkbox" id="hijos" name="hijos" value="hijos" onChange={(e) => setHijos(e.target.value)} />
                                </div>
                                <div className="children">
                                    <label for="hijos">Tiene mascotas</label>
                                    <input type="checkbox" id="mascotas" name="mascotas" value="mascotas" onChange={(e) => setMascotas(e.target.value)} />
                                </div>
                                <button onClick={sendEmail}>Enviar</button>
                            </div>
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
