import { useDisclosure } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export function useMenuLinkGroup({ sublinks }: { sublinks: string[] }) {
  const { isOpen, onToggle, onOpen } = useDisclosure();
  const [isActive, setIsActive] = useState(false);
  const pathName = usePathname();

  useEffect(() => {
    const onChildUrl = sublinks.some(url => pathName.includes(url));
    if (onChildUrl) onOpen();

    setIsActive(onChildUrl);
  }, [pathName, sublinks, onOpen]);

  return { isOpen, isActive, onToggle };
}
