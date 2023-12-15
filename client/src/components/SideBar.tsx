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

              <NavItem onClick={() => dispatch(openModal())} icon={<FiUser />}>
                Войти
              </NavItem>

              <NavItem icon={<FiBook />}>О нас</NavItem>
            </NavGroup>
            <NavGroup>
              <Button
                style={{ width: '70px', background: 'none', border: 'none' }}
                href="/teacherlk"
              >
                <Image
                  src="data:image/jpeg;base64,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"
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
