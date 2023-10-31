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
    useToast,
} from '@chakra-ui/react'
import '../../styles/modalsR.css'
import { DatePicker, TimePicker, Checkbox } from 'antd';
import { Acordings } from './Acordings';
import moment from 'moment';
import { AlertConf } from './AlertConf';
import { Alert } from './Alert';
const { RangePicker } = DatePicker;
import validator from 'validator'
import { AlerRej } from './AlerRej';
import { validateRUT } from 'validar-rut';
const format = "HH";

export const ModalsR = () => {
    const toast = useToast()
    const [email, setEmail] = useState("");
    const [nombre, setNombre] = useState("");
    const [apellidos, setApellidos] = useState("");
    const [cabañas, setCabañas] = useState("Cabaña Coigue");
    const [personas, setPersonas] = useState("");
    const [fecha, setFecha] = useState("");
    const [dias, setDias] = useState("");
    const [mascotas, setMascotas] = useState(false);
    const [valor, setValor] = useState("");
    const [rut, setRut] = useState("");
    const [telefono, setTelefono] = useState("");
    const [checkIn, setCheckIn] = useState("");
    const [emailError, setEmailError] = useState('');
    const [valid, setValid] = useState(false);


    const validateEmail = (e) => {
        var email = e.target.value

        if (validator.isEmail(email)) {
            setEmailError('Email Valido')
            setEmail(email);
        } else {
            setEmailError('Email Invalido, revise que este correcto')
        }
    }

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
            dias: dias,
            valid: valid
        }




        await fetch(`https://guiltless-good-linseed.glitch.me/massage/enviar`, {
            method: "POST",
            body: JSON.stringify(dataSend),
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        }).then((res) => {
            console.log(res);
            if (res.status > 199 && res.status < 300) {
                toast({
                    position: 'top',
                    render: () => (
                        <AlertConf />
                    ),
                })
                setTimeout(() => {
                    window.location.href = "/";
                }, 2000);
            }else{
                console.log(res.headers);
                toast({
                    position: 'top',
                    render: () => (
                        <AlerRej/>
                    )
                  })
            }
        }).catch((err) => {
            console.log(err);
        });
    }

    const [selectedDates, setSelectedDates] = useState([]);

    const validateRut = (e) => {
        const value = e.target.value;
        if(value.length > 2) {
            const validate = validateRUT(value);
            console.log(validate);
            if(validate){
            setValid(validate);
            setRut(value);
        }

        }
        
        
    }
    const validarCheck = (e) => {
        console.log(e.$H);
        if(e.$H < 15){
            setCheckIn('');
        }else{
            setCheckIn(e.$H + ":" + "00");
            console.log(checkIn);
        }
    }

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
        disabledMinutes: () => range(1, 60),
        disabledSeconds: () => range(1, 60)
    });

    return (
        <>
            <Button colorScheme='blue' onClick={onOpen}>Reservar</Button>

            <Modal isOpen={isOpen} onClose={onClose} className="modalss">
                <ModalOverlay />
                <ModalContent className='modalCont'>
                    <ModalHeader className='blue'>Formulario Reserva</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <div className="globalMod">
                            <div className="cabaI blue">
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
                                    <input type="text" className='borderI' placeholder='Rut XXXXXXXXX-X' onChange={(e) => validateRut(e)} />
                                    <div className="fechaA">
                                        <span style={{ fontSize: '.9rem' }}>Seleccionar Fecha de Hospedaje</span>
                                        <DatePicker.RangePicker size={"small"}
                                            onChange={handleDateChange}
                                            placeholder={["Fecha Incio", "Fecha Final"]}
                                            className='height'
                                        />
                                    </div>
                                    <input type="email" className='borderI' placeholder='Email' onChange={(e) => validateEmail(e)} />
                                    <span style={{
                                        fontWeight: 'bold',
                                        color: 'white',
                                    }}>{emailError}</span>
                                    <input type="number" className='borderI' placeholder='Telefono' onChange={(e) => setTelefono(e.target.value)} />
                                    <input type="text" className='borderI' placeholder='Cabañas' value={cabañas} style={{ display: 'none' }} />
                                    <input type="number" className='borderI' placeholder='Cantidad de Personas' onChange={(e) => setPersonas(e.target.value)} />
                                    <spam style={{
                                        fontWeight: 'bold',
                                        color: 'white'
                                    }}>El horario de Check In es a partir de las 15 hrs</spam>
                                    <TimePicker
                                        disabledTime={disabledDateTime}
                                        format={format}
                                        onChange={(e) => validarCheck(e)}
                                        placeholder='Horario CheckIn'
                                        className='width'
                                    />
                                    <div>
                                        <span className='cantD'>Cantidad de noches:  {dias}</span>
                                        <br />
                                        <span className='cantD'>Valor Referencial: {valor}</span>

                                    </div>
                                    <div className="children">
                                        <label for="mascotas" className="cantD">Viene con mascotas?</label>
                                        <Checkbox onChange={(e) => setMascotas(e.target.checked)} />
                                    </div>

                                    <Alert sendEmail={sendEmail} />
                                    
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
