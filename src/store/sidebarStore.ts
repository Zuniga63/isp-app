import { shallow } from 'zustand/shallow';
import { createWithEqualityFn } from 'zustand/traditional';

export interface SidebarMenuState {
  opened: boolean;
  collapsed: boolean;
  isLargeScreen: boolean;
  hide: () => void;
  toggle: () => void;
  updateIsLargeScreen: (value: boolean) => void;
}

export const useSidebarMenuStore = createWithEqualityFn<SidebarMenuState>()(
  (set, get) => ({
    opened: false,
    collapsed: false,
    isLargeScreen: true,
    hide: () => set(state => ({ opened: false })),
    toggle: () => {
      const { isLargeScreen, collapsed, opened } = get();

      set(state => {
        if (isLargeScreen) return { collapsed: !collapsed };
        else return { opened: !opened };
      });
    },
    updateIsLargeScreen: value => set(state => ({ isLargeScreen: value })),
  }),
  shallow,
);
