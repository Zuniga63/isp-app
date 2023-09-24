'use client';

import { useGetCashFlowReports } from '@/hooks/react-query/statistics.hooks';
import { MONTHS, currencyFormat } from '@/utils';
import { Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import React from 'react';

export default function CashFlowTable() {
  const { data } = useGetCashFlowReports();
  return (
    <div className="3xl:h-[40rem] relative h-[70vh] overflow-y-auto bg-white">
      <TableContainer position="absolute" inset="0" height="full" width="100%" overflowY="auto">
        <Table variant="striped" className="table-auto" size="sm" width="full">
          <Thead className="sticky top-0 z-50 bg-light">
            <Tr className="h-12">
              <Th scope="col" textAlign="center">
                #
              </Th>
              <Th scope="col">Año</Th>
              <Th scope="col">Mes</Th>
              <Th scope="col" textAlign="center">
                Ingresos
              </Th>
              <Th scope="col" textAlign="center">
                Egresos
              </Th>
              <Th scope="col" textAlign="center">
                Saldo
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {data?.map((report, index) => (
              <Tr key={report.id}>
                <Td padding={2} textAlign="center">
                  {index + 1}
                </Td>
                <Td padding={2}>{report.date.year}</Td>
                <Td padding={2}>{MONTHS[report.date.month]}</Td>
                <Td padding={2} textAlign="right">
                  {currencyFormat(report.incomes)}
                </Td>
                <Td padding={2} textAlign="right">
                  {currencyFormat(report.expenses)}
                </Td>
                <Td padding={2} textAlign="right">
                  {currencyFormat(report.balance)}
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
}
