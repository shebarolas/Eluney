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
} from '@chakra-ui/react';
import { useToast } from '@chakra-ui/react';
import '../../styles/modalsR.css'
import { Checkbox, DatePicker, TimePicker } from 'antd';
import { Acordings } from './Acordings';
import moment from 'moment';
import { Alert } from './Alert';
import { AlertConf } from './AlertConf';
const { RangePicker } = DatePicker;
import validator from 'validator'
import { AlerRej } from './AlerRej';
import { validateRUT } from 'validar-rut';
import { useForm } from "react-hook-form";
const format = "HH"


export const ModalsL = () => {
    const [cabañas, setCabañas] = useState("Cabaña Laurel");
    const [fecha, setFecha] = useState("");
    const [dias, setDias] = useState("");
    const [mascotas, setMascotas] = useState(false);
    const [valor, setValor] = useState("");
    const [checkIn, setCheckIn] = useState("");
    const [emailError, setEmailError] = useState('');
    const [valid, setValid] = useState(false);
    const [validRut, setValidRut] = useState("");
    const [validFecha, setValidFecha] = useState("");
    const [errosRut, setErrosRut] = useState(true);
    const [errorTel, setErrorTel] = useState(true);
    const [errTel, setErrTel] = useState();
    const [errorEmail, setErrorEmail] = useState(true);
    const [errosFecha, setErrosFecha] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const toast = useToast()

    const {
        register,
        handleSubmit,
        watch,
        formState,
        setValue
      } = useForm({
        mode: "onChange"
      })
    
        // const onSubmit = (data) => {
        //         console.log(data)
        // }
    const verErros = () => {
        console.log(errors);
    }

    // const validateEmail = (e) => {
    //     var email = e.target.value

    //     if (validator.isEmail(email)) {
    //         setEmailError('Email Valido')
    //         setEmail(email);
    //     } else {
    //         setEmailError('Email Invalido, revise que este correcto')
    //     }
    // }

    const onSubmit = async (data) => {
        const dataSend = {
            email: data.email,
            nombre: data.name,
            apellidos: data.lastname,
            rut: data.rut,
            telefono: data.telefono,
            cabañas: cabañas,
            personas: data.personas,
            fecha: fecha,
            checkIn: checkIn,
            mascotas: mascotas,
            valor: valor,
            dias: dias,
            valid: valid
        }
        setIsLoading(true);

         await fetch(`https://cababack1.onrender.com/massage/enviar`, {
             method: "POST",
             body: JSON.stringify(dataSend),
             headers: {
                 Accept: "application/json",
                 "Content-Type": "application/json",
             },
         }).then((res) => {
            
             if (res.status > 199 && res.status < 300) {
                 toast({
                     position: 'top',
                     render: () => (
                         <AlertConf />
                     ),
                 })
             }else{
                 
                 toast({
                     position: 'top',
                     render: () => (
                         <AlerRej/>
                     )
                   })
             }
         }).catch((err) => {
             console.log(err);
         }).finally(() => {
            setIsLoading(false);
         });

    }

    
    // const validateRut = (e) => {
    //     const value = e.target.value;
    //     if(value.length > 2) {
    //         const validate = validateRUT(value);
    //         console.log(validate);
    //         if(validate){
    //         setValid(validate);
    //         setValidRut("El rut ingresado es valido")
    //         setErros(false);
    //         setRut(value);
    //         }else{
    //             setValidRut("El rut ingresado no es valido")
    //             setErros(true);
    //         }
    // }
        
    // }

    const validarCheck = (e) => {

        if(e.$H < 15){
            setCheckIn('');
            setValidFecha('Check In debe ser superior a las 15hrs');
            setErros(true);
        }else{
            setCheckIn(e.$H + ":" + "00");
            setValidFecha('');
            setErros(false);
          
        }
    }

    const rut = watch("rut");
    const email = watch("email");

    const [selectedDates, setSelectedDates] = useState([]);

    const handleDateChange = (dates, dateString) => {
        setSelectedDates(dates);

        if (dates && dates.length === 2) {
            const startDate = dates[0].toDate();
            const endDate = dates[1].toDate();
            const days = moment(endDate).diff(moment(startDate), 'days');
            setDias(days);
            const precio = 70000;
            setValor(precio * days);
            setFecha(dateString);
            console.log(checkIn);
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
        disabledSeconds: () => range(1, 60),
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
                                    Cabaña Laurel ofrece vistas al jardín y alojamiento con balcón, a unos 32 km de la cascada Ojos del Caburgua.
                                    Se encuentra a 26 km de Geometric Hot Springs y ofrece terraza y aparcamiento privado gratuito.
                                </span>
                                <span className='cabInfo blod'>2 dormitorios</span>
                                <span className='cabInfo blod'>Valor Referencial: 70.000 clp por noche</span>
                                <span className="cabInfo blod">
                                    El Checkin para las cabañas debe ser despues de las 15:00 hrs.
                                </span>
                                <span className="cabInfo">
                                 Todas las mañanas se sirve un desayuno a la carta (El desayuno lleva un coste adicional)
                                </span>
                                <Acordings />
                            </div>
                            <div className="tods">
                            <form className="alls">
                                    <input type="text" className='borderI' placeholder='Nombre' {...register("name", {required: true})} />
                                    <input type="text" className='borderI' placeholder='Apellido' {...register("lastname", {required: true})} />
                                    <input type="text" className='borderI' placeholder='Rut XXXXXXXXX-X' value={rut}  {...register("rut", { 
                                        required: true,
                                        validate: (value) => {
                                            if(value.length > 2) {
                                                const validate = validateRUT(value);
                                                if(validate){
                                                setValid(validate);
                                                setValidRut("El rut ingresado es valido")
                                                setErrosRut(false);
                                                // setRut(value);
                                                //setValue("rut", value);
  
                                                }else{
                                                    //setValue("rut", "");
                                                    setValidRut("El rut ingresado no es valido")
                                                    setErrosRut(true);
                                                }
                                            
                                            }else {
                                                // setValue("rut", "");
                                                setErrosRut(true);
                                            } 
                                        }
                                    })} />
                                    <span style={{
                                        fontWeight: 'bold',
                                        color: 'white',
                                    }}>{validRut}</span>
                                    <input type="email" className='borderI' placeholder='Email' value={email} {...register("email", {
                                        required: true,
                                        validate: (value) => {
                                            if (validator.isEmail(value)) {
                                                setEmailError('Email Valido');
                                                setErrorEmail(false);
                                            } else {
                                                setEmailError('Email Invalido, revise que este correcto');
                                                setErrorEmail(true);
                                            }
                                        }
                                    })} />
                                    <span style={{
                                        fontWeight: 'bold',
                                        color: 'white',
                                    }}>{emailError}</span>
                                    <input type="number" className='borderI' placeholder='Telefono' {...register("telefono", {required: true, 
                                        validate: (value) => {
                                            if(value.length === 8){
                                                setErrorTel(false);
                                                setErrTel("Numero Valido");
                                            }else{
                                                setErrorTel(true);
                                                setErrTel("Error, numero de telefono debe tener 8 digitos, sin el 9")
                                            }
                                        }
                                    })}/>
                                    <span style={{
                                        fontWeight: 'bold',
                                        color: 'white',
                                    }}>{errTel}</span>
                                    <input type="text" className='borderI' placeholder='Cabañas' value={cabañas} style={{ display: 'none' }} />
                                    <input type="number" className='borderI' placeholder='Cantidad de Personas' {...register("personas", {required: true})} />
                                    <spam className="spam_text" style={{
                                        fontWeight: 'bold',
                                        color: 'white'
                                    }}>El horario de Check In debe ser superior a las 15 hrs</spam>
                                    <TimePicker
                                        disabledTime={disabledDateTime}
                                        format={format}
                                        onChange={(e) => validarCheck(e)}
                                        placeholder='Horario CheckIn'
                                        className='width'
                                    />
                                    <span style={{
                                        fontWeight: 'bold',
                                        color: 'white',
                                    }}>{validFecha}</span>
                                    <div className="fechaA">
                                        <span style={{ fontSize: '.9rem' }}>Seleccionar Fecha de Hospedaje</span>
                                        <DatePicker.RangePicker size={"small"}
                                            onChange={handleDateChange}
                                            placeholder={["Fecha Incio", "Fecha Final"]}
                                            className='height'
                                        />
                                    </div>
                                    <div>
                                        <span className='cantD'>Cantidad de noches:  {dias}</span>
                                        <br />
                                        <span className='cantD'>Valor Referencial: {valor}</span>

                                    </div>
                                    <div className="children">
                                        <label for="mascotas" className="cantD">Viene con mascotas?</label>
                                        <Checkbox onChange={(e) => setMascotas(e.target.checked)} />
                                    </div> 

                                    
                                    <Alert onSubmit={handleSubmit(onSubmit)} isValid={!formState.isValid || errosRut || errorEmail} isLoading={isLoading}/>
                                    
                                </form>
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
