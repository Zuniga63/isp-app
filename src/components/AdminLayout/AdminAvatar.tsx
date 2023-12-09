'use client';
import { clearCredentials, useAuthStore } from '@/store/authStore';
import { Avatar, Menu, MenuButton, MenuDivider, MenuGroup, MenuItem, MenuList } from '@chakra-ui/react';
import { IconSettings } from '@tabler/icons-react';
import { useRouter } from 'next-nprogress-bar';
import Link from 'next/link';

export default function AdminAvatar() {
  const router = useRouter();
  const user = useAuthStore(state => state.user);

  const logout = () => {
    clearCredentials();
    router.push('/');
  };

  return (
    <Menu>
      <MenuButton>
        <Avatar name={user?.name || 'No user'} size="sm" />
      </MenuButton>
      <MenuList>
        <MenuGroup title="Profile">
          <MenuItem as={Link} href="/profile">
            My Perfil
          </MenuItem>
          <MenuItem as={Link} href="/setting" icon={<IconSettings size="1rem" />}>
            Configuración
          </MenuItem>
        </MenuGroup>
        <MenuDivider />
        <MenuItem onClick={logout} color="red">
          Cerrar Sesion
        </MenuItem>
      </MenuList>
    </Menu>
  );
}
