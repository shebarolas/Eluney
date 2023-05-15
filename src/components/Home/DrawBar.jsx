import React from 'react'
import '../../styles/drawer.css';
import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    useDisclosure,
    Button,
  } from '@chakra-ui/react'
import {TfiMenu} from 'react-icons/tfi'
  

export const DrawBar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [placement, setPlacement] = React.useState('right')
  return (
    <>
      <Button onClick={onOpen} className="btn">
        <TfiMenu/>
      </Button>
      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay/>
        <DrawerContent>
          <DrawerHeader className='drawerColor'>Menu</DrawerHeader>
          <DrawerBody className='drawerColor grid'>
            <p className='lbar'>Inicio</p>
            <p className='lbar'>Servicios</p>
            <p className='lbar'>Nosotros</p>
            <p className='lbar'>Contactos</p>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}
