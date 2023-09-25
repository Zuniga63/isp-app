'use client';

import { TabPanel } from '@chakra-ui/react';
import { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
};

export default function BoxesTabPanel({ children }: Props) {
  return (
    <TabPanel padding={0} height="full">
      <div className="h-full px-2 pt-2">{children}</div>
    </TabPanel>
  );
}
