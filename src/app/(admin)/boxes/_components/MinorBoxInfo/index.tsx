'use client';

import { Button, Skeleton } from '@chakra-ui/react';
import { IconArrowsExchange, IconCirclePlus } from '@tabler/icons-react';
import TransactionTable from '../TransactionTable';
import BoxInfoHeader from './BoxInfoHeader';
import Pagination from '@/components/Pagination';
import { useTransactions } from '../../_hooks/useTransactions';
import SearchInput from '../SearchInput';
import { useMinorBoxInfo } from '../../_hooks/useMinorBoxInfo';
import { useCashboxesStore } from '@/store/cashboxesStore';

export default function MinorBoxInfo() {
  const { boxSelected, search, cashbox, isLoading, setSearch } = useMinorBoxInfo();
  const showTransactionForm = useCashboxesStore(state => state.showTransactionForm);
  const showCashTransferForm = useCashboxesStore(state => state.showCashTransferForm);

  const { transactions, currentPage, pageCount, nextPage, prevPage, goToPage } = useTransactions({
    search,
    allTransactions: cashbox?.transactions,
  });

  if (!boxSelected) return null;

  return (
    <Skeleton isLoaded={!isLoading} fadeDuration={1} className="mt-4 flex-grow lg:mt-0">
      <div className="flex h-full flex-col">
        <BoxInfoHeader cashbox={cashbox} />

        <div className="flex flex-grow flex-col border border-y-0 border-x-gray-200">
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
              colorScheme="orange"
              leftIcon={<IconArrowsExchange size={14} />}
              size="xs"
              flexShrink={0}
              onClick={() => showCashTransferForm()}
            >
              Realizar Transferencia
            </Button>
          </div>

          <TransactionTable transactions={transactions} />
        </div>

        {pageCount > 1 && (
          <footer className="flex items-center justify-between gap-y-2 bg-gray-300 px-6 py-2">
            <Pagination
              currentPage={currentPage}
              pages={pageCount}
              onNextPage={nextPage}
              onPrevPage={prevPage}
              onPageClick={goToPage}
            />
          </footer>
        )}
      </div>
    </Skeleton>
  );
}
