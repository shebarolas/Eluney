import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Image, Stack, Heading, Text, Divider, ButtonGroup, Button } from '@chakra-ui/react'
import '../styles/cards.css'
import caba2 from "../imgs/Cabañas.jpg"
import { Modals } from './Gallery/Modals'
import { ModalsL } from './Gallery/ModalsL'
import { Acordings } from './Gallery/Acordings'

export const CardsR = () => {
    return (
        <>
            <Card maxW='sm'>
                <CardBody>
                    <Image
                        src={caba2}
                        alt='Green double couch with wooden legs'
                        borderRadius='lg'
                        className='imgsC'
                    />
                    <Stack mt='6' spacing='3' className='blue'>
                        <Heading size='md'>Cabaña Laurel</Heading>
                        <Text>
                            <div className="disp">
                                Cabaña Laurel ofrece vistas al jardín y alojamiento con balcón, a unos 32 km de la cascada Ojos del Caburgua.
                                Se encuentra a 26 km de Geometric Hot Springs y ofrece terraza y aparcamiento privado gratuito.
                                Cabaña de 57 m2 para 4-5 personas, completamente amoblada
                            </div>
                        </Text>
                        <div className="cabaR">
                            <span className="cabInfo">
                                Cabaña Laurel ofrece vistas al jardín y alojamiento con balcón y hervidor de agua a unos 32 km de la cascada Ojos del Caburgua.
                                Se encuentra a 26 km de Geometric Hot Springs y ofrece terraza y aparcamiento privado gratuito.
                                Cabaña de 57 m2 para 4-5 personas, completamente amoblada
                            </span>
                            <br />
                            <span className='cabInfo blod'>Valor Referencial: 70.000 clp</span>
                            <br />
                            <span className="cabInfo blod">
                                El Checkin para las cabañas debe ser despues de las 15:00 hrs.
                            </span>
                            <br />
                            <Acordings />
                        </div>


                    </Stack>
                </CardBody>
                <CardFooter>
                    <ButtonGroup spacing='2'>
                        <ModalsL />
                        <Modals />
                    </ButtonGroup>
                </CardFooter>
            </Card>
        </>
    )
}
