import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Image, Stack, Heading, Text, Divider, ButtonGroup, Button } from '@chakra-ui/react'
import '../styles/cards.css'
import caba2 from "../imgs/nieve.jpg"
import { Modals } from './Gallery/Modals'
import { ModalsR } from './Gallery/ModalsR'
import { Acordings } from './Gallery/Acordings'

export const Cards = () => {
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
                    <Stack mt='6' spacing='3'>
                        <Heading size='md'>Cabaña Coigue</Heading>
                        <Text>
                        <div className="cabaR">
                                <span className="cabInfo">
                                    Cabaña Coigue ofrece alojamiento con WiFi gratuita en Pucón, a 32 km de la cascada Ojos del Caburgua, a 42 km de Ski Pucón y
                                    a 45 km del parque nacional de Huerquehue.
                                    Se encuentra a 26 km de Geometric Hot Springs y ofrece terraza y aparcamiento privado gratuito.
                                </span>
                                <br />
                                <span className='cabInfo blod'>Valor Referencial: 60.000 clp</span>
                                <br />
                                <span className="cabInfo blod">
                                    El Checkin para las cabañas debe ser despues de las 15:00 hrs.
                                </span>
                                <br />
                                <span className="cabInfo">
                                    Todas las mañanas se sirve un desayuno a la carta (El desayuno se paga aparte)
                                </span>
                                <Acordings />
                            </div>
                        </Text>
                    </Stack>
                </CardBody>
                <CardFooter>
                    <ButtonGroup spacing='2'>
                        <ModalsR />
                        <Modals />
                    </ButtonGroup>
                </CardFooter>
            </Card>
        </>
    )
}
