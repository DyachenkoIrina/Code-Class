import React from 'react';
import {
  Box,
  Spacer,
  Button,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react';
import {
  AppShell,
  Sidebar,
  SidebarToggleButton,
  SidebarSection,
  NavItem,
  PersonaAvatar,
  Image,
  FiSettings,
} from '@saas-ui/react';

import { FiHome, FiUsers } from 'react-icons/fi';


export default function werPage({}: JSX.Element {
  return (
    <AppShell
      sidebar={
        <Sidebar toggleBreakpoint="sm">
          <SidebarToggleButton />
          <SidebarSection direction="row">
            <Image src="https://saas-ui.dev/favicons/favicon-96x96.png" boxSize="7" />
            <Spacer />
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<PersonaAvatar presence="online" size="xs" src="/showcase-avatar.jpg" />}
                variant="ghost"
              />
              <MenuList>
                <MenuItem>Sign out</MenuItem>
              </MenuList>
            </Menu>
          </SidebarSection>
          <SidebarSection aria-label="Main">
            <NavItem icon={<FiHome />} isActive>
              Home
            </NavItem>
            <NavItem icon={<FiUsers />}>Users</NavItem>
            <NavItem icon={<FiSettings />}>Settings</NavItem>
          </SidebarSection>
        </Sidebar>
      }
    />
  );
}
