import { Th, Thead, Tr } from '@chakra-ui/react';
import React from 'react';
import { twMerge } from 'tailwind-merge';

type Props = {
  className?: string;
};

export default function PaymentMethodTableHeader({ className }: Props) {
  return (
    <Thead className={twMerge('bg-light', className)}>
      <Tr className="h-12">
        <Th scope="col">#</Th>
        <Th scope="col">Metodo de Pago</Th>
        <Th scope="col">Cajas</Th>
        <Th scope="col">Estado</Th>
        <Th scope="col" className="relative">
          <span className="sr-only">Actions</span>
        </Th>
      </Tr>
    </Thead>
  );
}
