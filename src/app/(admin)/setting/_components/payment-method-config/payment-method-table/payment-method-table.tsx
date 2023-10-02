'use client';
import { Table, TableContainer, Tbody } from '@chakra-ui/react';
import PaymentMethodTableHeader from './payment-method-table-header';
import { useGetPaymentMethods } from '@/hooks/react-query/payment-methods.hooks';
import { PaymentMethodTableItem } from './payment-method-table-item';

type Props = {
  className?: string;
};

export function PaymentMethodTable({ className }: Props) {
  const { data } = useGetPaymentMethods();

  return (
    <TableContainer className={className}>
      <Table variant="striped" size="sm" width="full">
        <PaymentMethodTableHeader />
        <Tbody>
          {data?.map((paymentMethod, index) => (
            <PaymentMethodTableItem key={paymentMethod.id} paymentMethod={paymentMethod} order={index + 1} />
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
