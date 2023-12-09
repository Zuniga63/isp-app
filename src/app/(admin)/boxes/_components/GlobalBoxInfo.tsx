'use client';

import { useCashboxesStore } from '@/store/cashboxesStore';
import { Button, Skeleton } from '@chakra-ui/react';
import { IconCirclePlus, IconPrinter } from '@tabler/icons-react';
import { useMemo, useState } from 'react';
import { useTransactions } from '../_hooks/useTransactions';
import Pagination from '@/components/Pagination';
import { currencyFormat } from '@/utils';
import SearchInput from './SearchInput';
import TransactionTable from './TransactionTable';
import { useGetGlobalTransactions } from '@/hooks/react-query/boxes.hooks';

export default function GlobalBoxInfo() {
  const isOpen = useCashboxesStore(state => state.isGlobal);
  const showTransactionForm = useCashboxesStore(state => state.showTransactionForm);
  const showPrintResume = useCashboxesStore(state => state.showPrintResume);

  const [search, setSearch] = useState<string | undefined>('');
  const { data, isLoading } = useGetGlobalTransactions({ enabled: isOpen });

  const { transactions, currentPage, pageCount, nextPage, prevPage, goToPage } = useTransactions({
    search,
    allTransactions: data,
  });

  const balance = useMemo(() => {
    if (!data) return 0;
    return data.reduce((prev, { amount }) => prev + amount, 0);
  }, [data]);

  if (!isOpen) return null;
  return (
    <Skeleton isLoaded={!isLoading} fadeDuration={1} className="mt-4 flex h-full flex-col lg:mt-0">
      <div className="flex-grow rounded-t-lg border border-t border-x-gray-200">
        <div className="flex h-full flex-col">
          <div className="flex gap-x-2 p-2">
            <SearchInput value={search} onChange={setSearch} />

            <Button
              colorScheme="blue"
              size="xs"
              flexShrink={0}
              leftIcon={<IconCirclePlus size={14} />}
              onClick={() => showTransactionForm()}
            >
              Registrar Transacción
            </Button>

            <Button
              colorScheme="green"
              size="xs"
              flexShrink={0}
              leftIcon={<IconPrinter size={14} />}
              onClick={showPrintResume}
            >
              Imprimir Resumen
            </Button>
          </div>

          <TransactionTable transactions={transactions} isGlobalBox />
        </div>
      </div>

      <footer className="flex flex-col items-center justify-between gap-y-2 rounded-b-md bg-gray-300 px-6 py-2 dark:bg-header lg:flex-row">
        <div className="flex flex-col items-center gap-y-1 lg:flex-row lg:gap-x-2">
          <span className="text-xs lg:text-base">Saldo:</span>
          <span className="text-center text-xs font-bold lg:text-base">{currencyFormat(balance)}</span>
        </div>
        {pageCount > 1 && (
          <Pagination
            currentPage={currentPage}
            pages={pageCount}
            onNextPage={nextPage}
            onPrevPage={prevPage}
            onPageClick={goToPage}
          />
        )}
      </footer>
    </Skeleton>
  );
}
