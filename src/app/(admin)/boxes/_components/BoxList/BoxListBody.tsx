'use client';
import { useGetMinorBoxes } from '@/hooks/react-query/boxes.hooks';
import BoxCard from '../BoxCard';
import { Skeleton } from '@chakra-ui/react';

export default function BoxListBody() {
  const { data, isLoading } = useGetMinorBoxes();

  return (
    <div className="relative h-full flex-grow rounded-b-lg border-x border-b border-zinc-300 bg-zinc-200 px-2">
      <Skeleton
        isLoaded={!isLoading}
        className="absolute inset-x-2 inset-y-3 overflow-y-auto bg-white p-2 pb-14 pr-2 shadow-inner shadow-zinc-600 "
      >
        <div className="flex flex-col gap-y-3">{data?.map(cashbox => <BoxCard box={cashbox} key={cashbox.id} />)}</div>
      </Skeleton>
    </div>
  );
}
