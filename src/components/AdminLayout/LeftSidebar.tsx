'use client';
import { Collapse } from '@chakra-ui/react';
import MenuLinks from './MenuLinks';
import { useSidebarMenuStore } from '@/store/sidebarStore';

export default function LeftSidebar() {
  const [collapsed, isLargeScreen] = useSidebarMenuStore(state => [state.collapsed, state.isLargeScreen]);
  if (!isLargeScreen) return null;

  return (
    <aside
      className={`sticky top-header hidden h-without-header flex-shrink-0 bg-blue-50 shadow shadow-blue-400 transition-[width] lg:block ${
        collapsed ? 'w-0' : 'w-60'
      }`}
    >
      <Collapse in={!collapsed} animateOpacity>
        <div className="absolute inset-0 overflow-y-auto pl-3 pr-3 shadow-xl">
          <nav className="flex flex-col gap-y-2 pb-24 pt-4">
            <MenuLinks />
          </nav>
        </div>
      </Collapse>
    </aside>
  );
}
