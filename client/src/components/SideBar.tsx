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
  FiLogIn,
} from 'react-icons/fi';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import { openModal, openModallogin, toggleModal } from '../redux/slices/modal/modalReducer';
import { useAppDispatch, useAppSelector } from '../redux/hook';
import { thunkLogout } from '../redux/slices/auth/createAsyncThunks';

export default function SideBar(): JSX.Element {
  const { isOpen, onOpen, onToggle } = useDisclosure({
    defaultIsOpen: false,
  });
  const dispatch = useAppDispatch();
  const auth = useAppSelector((store) => store.authSlice);
  const user = useAppSelector((store) => store.authSlice.user);
  const idTeacher = useAppSelector((state) => {

    return state.authSlice.teacher?.id
  });



  const navigate = useNavigate();
  return (
    <AppShell
      sidebar={
        <Sidebar
          borderTopLeftRadius="20px"
          borderBottomLeftRadius="20px"
          backgroundColor="#D9D0FF"
          // position="fixed"
          toggleBreakpoint={false}
          variant={isOpen ? 'default' : 'compact'}
          transition="width"
          transitionDuration="normal"
          width={isOpen ? '260px' : '14'}
          height="285vh"
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
                  icon={<FiLogIn />}
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

              {auth.user.status === 'authenticated' && user.role === 'Teacher' ? (
                <NavItem
                  width={isOpen ? '150px' : '8'}
                  icon={<FiUser />}
                  onClick={() => navigate(`/teacherlk/${idTeacher}`)}
                >
                  Личный кабинет
                </NavItem>
              ) : (
                <> </>
              )}

              {auth.user.status === 'authenticated' && user.role === 'Student' ? (
                <NavItem
                  width={isOpen ? '150px' : '8'}
                  icon={<FiUser />}
                  onClick={() => navigate('/studentlk')}
                >
                  Личный кабинет
                </NavItem>
              ) : (
                <> </>
              )}

              {auth.user.status === 'authenticated' && user.role === 'Admin' ? (
                <NavItem
                  width={isOpen ? '150px' : '8'}
                  icon={<FiUser />}
                  onClick={() => navigate('/adminlk')}
                >
                  Личный кабинет
                </NavItem>
              ) : (
                <> </>
              )}

              <NavItem width={isOpen ? '150px' : '8'} icon={<FiBook />}>
                О нас
              </NavItem>
            </NavGroup>
            <NavGroup>
              <NavItem fontWeight={600} fontSize={isOpen ? '12px' : '7px'}>
                {auth.user.status === 'authenticated' ? auth.user.name : 'Привет, гость!'}
              </NavItem>
            </NavGroup>
          </SidebarSection>
          <SidebarOverlay zIndex="1" />
        </Sidebar>
      }
    />
  );
}
