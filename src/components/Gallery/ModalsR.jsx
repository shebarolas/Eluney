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
import { DatePicker, TimePicker } from 'antd';
import { Acordings } from './Acordings';
import moment from 'moment';
const { RangePicker } = DatePicker;

export const ModalsR = () => {

    const [email, setEmail] = useState("");
    const [nombre, setNombre] = useState("");
    const [apellidos, setApellidos] = useState("");
    const [cabañas, setCabañas] = useState("Cabaña Coigue");
    const [personas, setPersonas] = useState("");
    const [fecha, setFecha] = useState("");
    const [dias, setDias] = useState("");
    const [mascotas, setMascotas] = useState("");
    const [valor, setValor] = useState("");
    const [rut, setRut] = useState("");
    const [telefono, setTelefono] = useState("");
    const [checkIn, setCheckIn] = useState("");

    const sendEmail = async () => {
        const dataSend = {
            email: email,
            nombre: nombre,
            apellidos: apellidos,
            rut: rut,
            telefono: telefono,
            cabañas: cabañas,
            personas: personas,
            fecha: fecha,
            checkIn: checkIn,
            mascotas: mascotas,
            valor: valor,
            dias: dias
        }

        await fetch(`https://eager-romantic-tarragon.glitch.me/massage/enviar`, {
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

    const [selectedDates, setSelectedDates] = useState([]);

    const handleDateChange = (dates, dateString) => {
        setSelectedDates(dates);

        if (dates && dates.length === 2) {
            const startDate = dates[0].toDate();
            const endDate = dates[1].toDate();
            const days = moment(endDate).diff(moment(startDate), 'days');
            setDias(days);
            const precio = 60000;
            setValor(precio * days);
            setFecha(dateString);
        }
    };

    const { isOpen, onOpen, onClose } = useDisclosure();

    const range = (start, end) => {
        const result = [];
        for (let i = start; i < end; i++) {
          result.push(i);
        }
        return result;
      };

    const disabledDateTime = () => ({
        disabledHours: () => range(0, 15),
        disabledMinutes: () => range(30, 60),
        disabledSeconds: () => [55, 56],
    });

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
                                <span className="cabInfo">
                                    Cabaña Coigue ofrece alojamiento con WiFi gratuita en Pucón, a 32 km de la cascada Ojos del Caburgua, a 42 km de Ski Pucón y
                                    a 45 km del parque nacional de Huerquehue.
                                    Se encuentra a 26 km de Geometric Hot Springs y ofrece terraza y aparcamiento privado gratuito.
                                </span>
                                <span className='cabInfo blod'>Valor Referencial: 60.000 clp</span>
                                <span className="cabInfo blod">
                                    El Checkin para las cabañas debe ser despues de las 15:00 hrs.
                                </span>
                                <span className="cabInfo">
                                    Todas las mañanas se sirve un desayuno a la carta (El desayuno se paga aparte)
                                </span>
                                <Acordings />
                            </div>
                            <div className="tods">
                                <div className="alls">
                                    <input type="text" className='borderI' placeholder='Nombre' onChange={(e) => setNombre(e.target.value)} />
                                    <input type="text" className='borderI' placeholder='Apellido' onChange={(e) => setApellidos(e.target.value)} />
                                    <input type="text" className='borderI' placeholder='Rut' onChange={(e) => setRut(e.target.value)} />
                                    <input type="email" className='borderI' placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
                                    <input type="number" className='borderI' placeholder='Telefono' onChange={(e) => setTelefono(e.target.value)} />
                                    <input type="text" className='borderI' placeholder='Cabañas' value={cabañas} style={{ display: 'none' }} />
                                    <input type="number" className='borderI' placeholder='Cantidad de Personas' onChange={(e) => setPersonas(e.target.value)} />

                                    <DatePicker.RangePicker size={"small"}
                                        onChange={handleDateChange}
                                    />
                                    <TimePicker
                                        disabledTime={disabledDateTime}
                                        onChange={(e)=> setCheckIn(e.$H + ":" + e.$m)}
                                    />
                                    <div>
                                        <span className='cantD'>Cantidad de noches:  {dias}</span>
                                        <br />
                                        <span className='cantD'>Valor: {valor}</span>

                                    </div>
                                    <div className="children">
                                        <label for="mascotas" className="cantD">Tiene mascotas</label>
                                        <input type="checkbox" id="mascotas" name="mascotas" value="mascotas" onChange={(e) => setMascotas(e.target.value)} />
                                    </div>
                                    <Button onClick={sendEmail}>Enviar</Button>
                                </div>
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
