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
                <MenuItem as="a" href="#" command='⌘T'>
                    Inicio
                </MenuItem>
                <MenuItem as="a" href="#cafeteria" command='⌘N'>
                    Cafeteria
                </MenuItem>
                <MenuItem as="a" href="#turismo"command='⌘O'>
                    Sitio Turistico
                </MenuItem>
                <MenuItem as="a" href="#galeria"command='⌘O'>
                    Cabañas
                </MenuItem>
                <MenuItem as="a" href="#nosotros"command='⌘O'>
                    Ubicacion
                </MenuItem>
            </MenuList>
        </Menu>
    )
}
