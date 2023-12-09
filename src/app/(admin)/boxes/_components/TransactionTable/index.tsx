'use client';

import { Table, TableContainer, Tbody, Thead, Tr, Th, PositionProps } from '@chakra-ui/react';
import TransactionRow from './TransactionRow';
import { ITransaction } from '@/types';

type Props = {
  transactions?: ITransaction[];
  isGlobalBox?: boolean;
  tablePosition?: PositionProps['position'];
};

export default function TransactionTable({ transactions, isGlobalBox, tablePosition = 'absolute' }: Props) {
  return (
    <div className={`relative flex-grow overflow-y-auto ${tablePosition === 'absolute' ? 'h-full' : 'h-auto'}`}>
      <TableContainer position={tablePosition} inset="0" height="full" width="100%" overflowY="auto">
        <Table variant="striped" className="table-auto" size="sm" width="full">
          <Thead className="sticky top-0 z-50 bg-light">
            <Tr className="h-12">
              <Th scope="col">Fecha</Th>
              <Th scope="col">Descripción</Th>
              <Th scope="col" textAlign="center">
                Importe
              </Th>
              <Th scope="col" textAlign="center">
                Saldo
              </Th>
              <Th scope="col" className="relative">
                <span className="sr-only">Actions</span>
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {transactions?.map(transaction => (
              <TransactionRow key={transaction.id} transaction={transaction} isGlobalBox={isGlobalBox} />
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
}
