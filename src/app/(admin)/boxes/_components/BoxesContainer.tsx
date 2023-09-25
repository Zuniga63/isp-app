'use client';

import { ServerStateKeysEnum } from '@/config/server-state-key.enum';
import { useCashboxesStore } from '@/store/cashboxesStore';
import { Tab, TabList, TabPanels, Tabs } from '@chakra-ui/react';
import { useQueryClient } from '@tanstack/react-query';
import { ReactNode, useEffect } from 'react';

type Props = {
  children?: ReactNode;
};

export default function BoxesContainer({ children }: Props) {
  const reset = useCashboxesStore(state => state.reset);
  const showGlobalBox = useCashboxesStore(state => state.showGlobalBox);
  const queryClient = useQueryClient();

  const handleGlobalBoxClick = () => {
    showGlobalBox();
  };

  const handleResumenClick = () => {
    queryClient.invalidateQueries([ServerStateKeysEnum.CashFlowReports]);
  };

  useEffect(() => {
    return () => reset();
  }, []);

  return (
    <div className="h-without-header pt-6 text-dark lg:flex lg:gap-x-4 lg:px-4 lg:pt-4">
      <div className="h-full w-full rounded-t-lg border bg-light px-2 pt-2">
        <Tabs display="flex" flexDir="column" height="full" variant="enclosed">
          <TabList>
            <Tab>Cajas Auxiliares</Tab>
            <Tab onClick={handleGlobalBoxClick}>Caja Global</Tab>
            <Tab onClick={handleResumenClick}>Resumen</Tab>
          </TabList>

          <TabPanels flexGrow={1} className="border-x border-gray-200 bg-white">
            {children}
          </TabPanels>
        </Tabs>
      </div>
    </div>
  );
}
