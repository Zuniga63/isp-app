import { IconBox, IconCashBanknote, IconDashboard, TablerIconsProps } from '@tabler/icons-react';

interface ILink {
  name: string;
  url: string;
  Icon?: (props: TablerIconsProps) => JSX.Element;
  isEnabled?: boolean;
  links?: ILink[];
}

export const links: ILink[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    Icon: IconDashboard,
    isEnabled: true,
  },
  {
    name: 'Area Financiera',
    url: '#financial-area',
    Icon: IconCashBanknote,
    isEnabled: true,
    links: [
      {
        name: 'Cajas',
        url: '/boxes',
        Icon: IconBox,
        isEnabled: true,
      },
    ],
  },
];
