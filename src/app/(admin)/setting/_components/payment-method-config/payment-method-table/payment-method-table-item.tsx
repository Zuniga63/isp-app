import type { PaymentMethod } from '@/types';
import { IconButton, Td, Tr } from '@chakra-ui/react';
import { IconEdit, IconTrash } from '@tabler/icons-react';

type Props = {
  paymentMethod: PaymentMethod;
  order: number;
};

export function PaymentMethodTableItem({ paymentMethod, order }: Props) {
  return (
    <Tr>
      <Td padding={2} textAlign="center">
        {order}
      </Td>
      <Td padding={2} whiteSpace="normal">
        <p className="font-display text-sm">{paymentMethod.name}</p>
        <p className="text-xs text-neutral-400">{paymentMethod.description}</p>
      </Td>
      <Td padding={2} whiteSpace="normal">
        <ul className="flex max-w-[200px] flex-col gap-y-2">
          {paymentMethod.boxes.map(box => (
            <li
              key={box.id}
              className={`line-clamp-1 list-disc text-xs ${!box.openBox && 'text-opacity-40'}`}
              title={box.name}
            >
              {box.name}
            </li>
          ))}
        </ul>
      </Td>
      <Td padding={2}>{paymentMethod.isEnabled ? 'Habilitado' : 'Deshabilitado'}</Td>
      <Td padding={2}>
        <IconButton
          aria-label="Delete transaction"
          colorScheme="red"
          variant="ghost"
          size="xs"
          icon={<IconTrash size={14} stroke={1.5} />}
        />

        <IconButton
          aria-label="Delete transaction"
          colorScheme="blue"
          variant="ghost"
          size="xs"
          icon={<IconEdit size={14} stroke={1.5} />}
        />
      </Td>
    </Tr>
  );
}
