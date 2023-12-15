import React from 'react';
import { Box, Spacer, IconButton, Image, useDisclosure } from '@chakra-ui/react';
import {
  AppShell,
  Sidebar,
  SidebarSection,
  SidebarOverlay,
  NavItem,
  NavGroup,
} from '@saas-ui/react';
import {
  FiHome,
  FiUsers,
  FiSettings,
  FiStar,
  FiChevronsLeft,
  FiChevronsRight,
  FiUser,
  FiBook,
  FiCircle,
} from 'react-icons/fi';
import { Button } from 'react-bootstrap';
import LoginFormModal from '../forms/LoginFormModal';
import { openModal, toggleModal } from '../redux/slices/modal/modalReducer';
import { useAppDispatch } from '../redux/hook';

export default function SideBar(): JSX.Element {
  const { isOpen, onOpen, onToggle } = useDisclosure({
    defaultIsOpen: false,
  });
  const dispatch = useAppDispatch();

  return (
    
      <AppShell
        sidebar={
          <Sidebar
            toggleBreakpoint={false}
            variant={isOpen ? 'default' : 'compact'}
            transition="width"
            transitionDuration="normal"
            width={isOpen ? '280px' : '14'}
            height="100vh"
            minWidth="auto"
          >
            <SidebarSection direction={isOpen ? 'row' : 'column'}>
              <Image
                src="https://saas-ui.dev/favicons/favicon-96x96.png"
                boxSize="6"
                mb="1"
                display={isOpen}
              />
              <Spacer />
              <IconButton
                onClick={onToggle}
                variant="ghost"
                size="sm"
                icon={isOpen ? <FiChevronsLeft /> : <FiChevronsRight />}
                aria-label="Toggle Sidebar"
              />
            </SidebarSection>

            <SidebarSection
              flex="1"
              overflowY="auto"
              overflowX="hidden"
              justifyContent="space-between"
            >
              <NavGroup>
                
                  <NavItem icon={<FiHome />} isActive>
                    Главная
                  </NavItem>
                
                
                  <NavItem icon={<FiUser />}>Войти</NavItem>
               
                
                  <NavItem icon={<FiBook />}>О нас</NavItem>
                
              </NavGroup>
              <NavGroup>
                <Button style={{ background: 'none', border: 'none' }} href='/teacherlk'>
                  <Image
                    src="https://img.freepik.com/premium-vector/round-icon-of-girl-avatar-face-icon-in-flat-style_768258-2081.jpg"
                    boxSize="8"
                    mb="1"
                    display={isOpen}
                    borderRadius="full"
                  />
                </Button>
              </NavGroup>
            </SidebarSection>
            <SidebarOverlay zIndex="1" />
          </Sidebar>
        }
      />
  );
}

