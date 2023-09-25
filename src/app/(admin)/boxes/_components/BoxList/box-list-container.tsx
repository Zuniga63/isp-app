import { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
};

export default function BoxListContainer({ children }: Props) {
  return (
    <div className="h-full w-full flex-shrink-0 flex-grow-0 pb-8 lg:w-80">
      <div className="flex h-full flex-col">{children}</div>
    </div>
  );
}
