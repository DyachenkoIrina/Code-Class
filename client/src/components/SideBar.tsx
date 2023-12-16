import React from 'react';
import { Box, Spacer, IconButton, Image, useDisclosure, Link } from '@chakra-ui/react';
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
  FiLogOut,
} from 'react-icons/fi';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import { openModal, openModallogin, toggleModal } from '../redux/slices/modal/modalReducer';
import { useAppDispatch, useAppSelector } from '../redux/hook';
import { thunkLogout } from '../redux/slices/auth/createAsyncThunks';
import type { UserType } from '../types/auth';

export default function SideBar(): JSX.Element {
  const { isOpen, onOpen, onToggle } = useDisclosure({
    defaultIsOpen: false,
  });
  const dispatch = useAppDispatch();
  const auth = useAppSelector((store) => store.authSlice);
  const user = useAppSelector((store) => store.authSlice.user);
  const navigate = useNavigate();

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
              <NavItem onClick={() => navigate('/')} icon={<FiHome />} isActive>
                Главная
              </NavItem>
              {auth.user.status !== 'authenticated' ? (
                <NavItem onClick={() => dispatch(openModallogin())} icon={<FiUser />}>
                  Войти
                </NavItem>
              ) : (
                <NavItem onClick={() => void dispatch(thunkLogout())} icon={<FiLogOut />}>
                  Выйти
                </NavItem>
              )}

              <NavItem icon={<FiBook />}>О нас</NavItem>
            </NavGroup>
            <NavGroup>
              <NavItem>
                {auth.user.status === 'authenticated' ? auth.user.name : 'Привет, гость!'}
              </NavItem>
              {user.status === 'authenticated' && user.role === 'Teacher' ? (
                <Button
                  style={{ width: '70px', background: 'none', border: 'none' }}
                  onClick={() => navigate('/teacherlk')}
                >
                  <Image src={user.profileImage} mb="1" display={isOpen} borderRadius="full" />
                </Button>
              ) : (
                <> </>
              )}
              {user.status === 'authenticated' && user.role === 'Student' ? (
                <Button
                  style={{ width: '70px', background: 'none', border: 'none' }}
                  onClick={() => navigate('/studentlk')}
                >
                  <Image src={user.profileImage} mb="1" display={isOpen} borderRadius="full" />
                </Button>
              ) : (
                <> </>
              )}
            </NavGroup>
          </SidebarSection>
          <SidebarOverlay zIndex="1" />
        </Sidebar>
      }
    />
  );
}
