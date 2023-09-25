'use client';
import { useCashboxesStore } from '@/store/cashboxesStore';
import { ICashboxFull } from '@/types';
import { currencyFormat } from '@/utils';
import { IconButton } from '@chakra-ui/react';
import { IconX } from '@tabler/icons-react';

type Props = {
  cashbox?: ICashboxFull | null;
};

export default function BoxInfoHeader({ cashbox }: Props) {
  const unmountBox = useCashboxesStore(state => state.unmountBoxToShow);

  return (
    <header className="relative rounded-t-md bg-gray-300 px-6 py-2">
      <div className="flex items-center gap-x-2">
        <div className="flex flex-grow items-center gap-x-2">
          <h2 className="text-lg font-bold tracking-wider">{cashbox?.name}</h2>
          <p className="rounded-full border border-emerald-500 bg-emerald-600 px-3 py-1 text-xs text-light shadow">
            Base: <span className="font-bold tracking-widest">{currencyFormat(cashbox?.base)}</span>{' '}
          </p>

          <p className="rounded-full border border-amber-500 bg-amber-600 px-3 py-1 text-xs text-light shadow">
            Saldo: <span className="font-bold tracking-widest">{currencyFormat(cashbox?.balance)}</span>{' '}
          </p>
        </div>

        <IconButton
          colorScheme="blackAlpha"
          aria-label="Close box"
          size="xs"
          variant="ghost"
          icon={<IconX size={24} stroke={2} />}
          onClick={() => unmountBox()}
        />
      </div>
    </header>
  );
}
