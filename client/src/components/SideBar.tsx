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
          width={isOpen ? '260px' : '14'}
          height="100vh"
          minWidth="auto"
          zIndex="1"
        >
          <SidebarSection direction={isOpen ? 'row' : 'column'}>
            <Image
              src="../../public/Codeclass.svg"
              paddingLeft="20"
              width={isOpen ? '150px' : '14'}
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
            alignItems="center"
          >
            <NavGroup>
              <NavItem
                width={isOpen ? '150px' : '8'}
                onClick={() => navigate('/')}
                icon={<FiHome />}
              >
                Главная
              </NavItem>
              {auth.user.status !== 'authenticated' ? (
                <NavItem
                  width={isOpen ? '150px' : '8'}
                  onClick={() => dispatch(openModallogin())}
                  icon={<FiUser />}
                >
                  Войти
                </NavItem>
              ) : (
                <NavItem
                  width={isOpen ? '150px' : '8'}
                  onClick={() => void dispatch(thunkLogout())}
                  icon={<FiLogOut />}
                >
                  Выйти
                </NavItem>
              )}

              <NavItem width={isOpen ? '150px' : '8'} icon={<FiBook />}>
                О нас
              </NavItem>
            </NavGroup>
            <NavGroup>
              <NavItem fontWeight={600}
              fontSize={15}>
                {auth.user.status === 'authenticated' ? auth.user.name : 'Привет, гость!'}
              </NavItem>
              {user.status === 'authenticated' && user.role === 'Teacher' ? (
                <Button
                  style={{
                    width: '80px',
                    height: '80px',
                    background: 'none',
                    border: 'none',
                  }}
                  onClick={() => navigate('/teacherlk')}
                >
                  <Image
                    width="50px"
                    height="52px"
                    src={user.profileImage}
                    mb="1"
                    display={isOpen}
                    borderRadius="full"
                  />
                </Button>
              ) : (
                <> </>
              )}
              {user.status === 'authenticated' && user.role === 'Student' ? (
                <Button
                  style={{
                    width: '50px',
                    height: '70px',
                    background: 'none',
                    border: 'none',
                  }}
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
