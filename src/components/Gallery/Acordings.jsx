import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
} from '@chakra-ui/react'

export const Acordings = () => {
    return (
        <div>
            <Accordion allowToggle>
                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box as="span" flex='1' textAlign='left'>
                                Servicios
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        <span>Wifi gratis</span>
                        <br />
                        <span>Parking</span>
                        <br />
                        <span>Se aceptan mascotas</span>
                        <br />
                        <span>Balcon y Terraza</span>
                        <br />
                        <span>Cocina</span>
                        <br />
                        <span>Caminatas</span>
                        <br />
                        <span>Rafting</span>
                        <br />
                        <span>Canopy</span>
                        <br />
                        <span>Tinajas</span>
                    </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box as="span" flex='1' textAlign='left'>
                                Lugares
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        <span>32 km de la cascada Ojos del Caburgua</span>
                        <br />
                        <span>42 km de Ski Pucón</span>
                        <br />
                        <span>45 km del parque nacional de Huerquehue</span>
                        <br />
                        <span>26 km de Geometric Hot Springs</span>
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </div >
    )
}
