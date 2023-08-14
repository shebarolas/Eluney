import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Image, Stack, Heading, Text, Divider, ButtonGroup, Button } from '@chakra-ui/react'
import '../styles/cards.css'
import caba2 from "../imgs/Cabañas.jpg"
import { Modals } from './Gallery/Modals'
import { ModalsL } from './Gallery/ModalsL'

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
                    <Stack mt='6' spacing='3'>
                        <Heading size='md'>Cabaña Laurel</Heading>
                        <Text>
                        Bienvenidos a nuestras acogedoras cabañas diseñadas especialmente para brindar comodidad y disfrute a grupos de hasta 5 personas. 
                        Ubicadas en un entorno natural privilegiado, 
                        nuestras cabañas ofrecen un refugio perfecto para escapar del ajetreo de la vida cotidiana y sumergirse en un ambiente tranquilo y sereno
                        </Text>
                    </Stack>
                </CardBody>
                <CardFooter>
                    <ButtonGroup spacing='2'>
                        <ModalsL/>
                        <Modals/>
                    </ButtonGroup>
                </CardFooter>
            </Card>
        </>
  )
}
