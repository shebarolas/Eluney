import React from 'react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    IconButton,
} from '@chakra-ui/react'

export const MenuRes = () => {
    return (
        <Menu>
            <MenuButton
                as={IconButton}
                aria-label='Options'
                variant='outline'
            />
            <MenuList>
                <MenuItem as="a" href="#" command='⌘T'>
                    Inicio
                </MenuItem>
                <MenuItem as="a" href="#cafeteria" command='⌘N'>
                    Cafeteria
                </MenuItem>
                <MenuItem as="a" href="#"command='⌘⇧N'>
                    Turismo
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
