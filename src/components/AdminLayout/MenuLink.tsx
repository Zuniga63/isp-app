import { useSidebarMenuStore } from '@/store/sidebarStore';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

type Props = {
  name: string;
  url?: string;
  icon?: React.ReactNode;
  className?: string;
  isEnabled?: boolean;
};

export default function MenuLink({ name, icon, url = '', className, isEnabled }: Props) {
  const pathName = usePathname();
  const [isActive, setIsActive] = useState(pathName.includes(url));
  const hide = useSidebarMenuStore(state => state.hide);

  useEffect(() => {
    if (url && pathName?.includes(url)) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [url, pathName]);

  return (
    <Link
      href={isEnabled ? url : '#'}
      className={`block rounded-lg px-4 py-2 text-dark transition-colors hover:bg-blue-300 hover:bg-opacity-30  
    ${isActive && 'bg-blue-300 bg-opacity-30 font-bold text-blue-700'} 
    ${!isEnabled && 'cursor-not-allowed opacity-40'}
    ${className}`}
      onClick={hide}
    >
      <div className="flex items-center justify-between gap-4">
        {icon}
        <span className="flex-grow text-sm">{name}</span>
      </div>
    </Link>
  );
}
