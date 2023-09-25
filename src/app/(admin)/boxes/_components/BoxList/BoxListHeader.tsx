'use client';
import NewButtonIcon from '@/components/form/NewButtonIcon';
import RefreshButtonIcon from '@/components/form/RefreshButtonIcon';
import { useGetMinorBoxes } from '@/hooks/react-query/boxes.hooks';
import { useCashboxesStore } from '@/store/cashboxesStore';
import { currencyFormat } from '@/utils';
import { useMemo } from 'react';

export default function BoxListHeader() {
  const { data: allBoxes } = useGetMinorBoxes();
  const boxesToSum = useCashboxesStore(state => state.sumBoxesId);

  const balanceSum = useMemo(() => {
    let balance = 0;

    if (allBoxes && boxesToSum.length > 0) {
      boxesToSum.forEach(id => {
        const box = allBoxes.find(box => box.id === id);
        if (box) balance += box.balance;
      });
    }

    return balance;
  }, [boxesToSum, allBoxes]);

  const showCashboxForm = useCashboxesStore(state => state.showCashboxForm);
  return (
    <header className="rounded-t-md border-x border-t border-zinc-300 bg-zinc-200 px-4 pt-2">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-display text-xl font-bold tracking-wider text-gray-dark">Cajas</h2>
          <p className={`text-xs ${balanceSum === 0 ? 'invisible' : 'visible'}`}>
            Sumatoria: <span className="font-bold tracking-widest">{currencyFormat(balanceSum)}</span>
          </p>
        </div>
        <div className="flex gap-x-2">
          <RefreshButtonIcon />
          <NewButtonIcon onClick={showCashboxForm} />
        </div>
      </div>
    </header>
  );
}
