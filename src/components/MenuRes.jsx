import React from 'react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    IconButton
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons'



export const MenuRes = () => {
    return (
        <Menu>
            <MenuButton
                as={IconButton}
                aria-label='Options'
                variant='outline'
                icon={<HamburgerIcon/>}
            />
            <MenuList>
                <MenuItem as="a" href="#">
                    Inicio
                </MenuItem>
                <MenuItem as="a" href="#cafeteria">
                    Cafeteria
                </MenuItem>
                <MenuItem as="a" href="#turismo">
                    Sitio Turistico
                </MenuItem>
                <MenuItem as="a" href="#galeria">
                    Cabañas
                </MenuItem>
                <MenuItem as="a" href="#nosotros">
                    Ubicacion
                </MenuItem>
            </MenuList>
        </Menu>
    )
}
