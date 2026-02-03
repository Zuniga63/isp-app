'use client';

import { useGetGlobalTransactions } from '@/hooks/react-query/boxes.hooks';
import { useCashboxesStore } from '@/store/cashboxesStore';
import { MONTHS } from '@/utils';
import {
  Button,
  Checkbox,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Select,
} from '@chakra-ui/react';
import dayjs from 'dayjs';
import { useEffect, useMemo, useRef, useState } from 'react';
import TransactionTable from './TransactionTable';
import CashFlowTable from './CashFlowTable';
import { useReactToPrint } from 'react-to-print';

export default function PrinterResumeModal() {
  const isOpen = useCashboxesStore(state => state.printResumeIsOpen);
  const closeModal = useCashboxesStore(state => state.hidePrintResume);

  const [year, setYear] = useState('');
  const [month, setMonth] = useState('');
  const { data } = useGetGlobalTransactions({ enabled: isOpen });

  const printRef = useRef<HTMLDivElement | null>(null);
  const promiseResolveRef = useRef<unknown>(null);
  const [isPrinting, setIsPrinting] = useState(false);
  const [showOnlyBoxTransactions, setShowOnlyBoxTransactions] = useState(false);

  const hadnelClose = () => {
    if (isPrinting) return;
    closeModal();
  };

  const handlePrint = useReactToPrint({
    content: () => printRef.current,
    onBeforeGetContent: () => {
      return new Promise(resolve => {
        promiseResolveRef.current = resolve;
        setIsPrinting(true);
      });
    },
    onAfterPrint: () => {
      promiseResolveRef.current = null;
      setIsPrinting(false);
    },
  });

  useEffect(() => {
    if (isPrinting && promiseResolveRef.current) {
      (promiseResolveRef.current as () => void)();
    }
  }, [isPrinting]);

  const transactions = useMemo(() => {
    const yearValue = Number(year);
    const monthValue = Number(month);

    if (!data) return [];
    if (isNaN(yearValue) || isNaN(monthValue)) return [];

    const from = dayjs(`${yearValue}-${monthValue + 1}-1`).startOf('month');
    const to = from.endOf('month');

    const filteredTransactions = data.filter(({ transactionDate }) => {
      const isBefore = dayjs(transactionDate).isBefore(from);
      const isAfter = dayjs(transactionDate).isAfter(to);

      return !isBefore && !isAfter;
    });

    let accumulated = 0;

    filteredTransactions.forEach(transaction => {
      accumulated += transaction.amount;
      transaction.accumulated = accumulated;
    });

    return filteredTransactions;
  }, [year, month, data]);

  return (
    <Modal isOpen={isOpen} onClose={hadnelClose} size="6xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader fontFamily="heading">Resumen Global</ModalHeader>
        <ModalCloseButton />

        <ModalBody>
          <div className="mb-6 flex gap-x-2">
            <div className="flex-grow">
              <div className="grid grid-cols-3 gap-x-4">
                <Select placeholder="Selecciona un año" value={year} onChange={e => setYear(e.currentTarget.value)}>
                  <option>2026</option>
                  <option>2025</option>
                  <option>2024</option>
                  <option>2023</option>
                  <option>2022</option>
                </Select>
                <Select placeholder="Selecciona un mes" value={month} onChange={e => setMonth(e.currentTarget.value)}>
                  {MONTHS.map((month, index) => (
                    <option value={index} key={month}>
                      {month}
                    </option>
                  ))}
                </Select>
              </div>
              <div className="mt-4 flex gap-x-2">
                <Checkbox
                  isChecked={showOnlyBoxTransactions}
                  onChange={e => setShowOnlyBoxTransactions(e.currentTarget.checked)}
                >
                  Mostrar solo transacciones de caja
                </Checkbox>
              </div>
            </div>

            <Button colorScheme="orange" onClick={handlePrint}>
              Imprimir
            </Button>
          </div>

          <div className="h-96 w-full overflow-auto">
            <div className="rounded bg-neutral-100 ">
              <div ref={printRef} className="p-10">
                <h3 className="mb-8 text-center text-xl font-bold ">
                  Reporte de Movimientos {MONTHS[Number(month) || 0]}{' '}
                </h3>
                <div className="mb-8">
                  {transactions.length > 0 ? (
                    <TransactionTable tablePosition="static" isGlobalBox transactions={transactions} />
                  ) : null}
                </div>

                {showOnlyBoxTransactions ? null : (
                  <div className="relative h-[600px]">
                    <CashFlowTable />
                  </div>
                )}
              </div>
            </div>
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
