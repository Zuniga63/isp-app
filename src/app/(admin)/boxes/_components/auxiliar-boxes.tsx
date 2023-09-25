import BoxList from './BoxList';
import MinorBoxInfo from './MinorBoxInfo';

export default function AuxiliarBoxes() {
  return (
    <div className="flex h-full gap-x-2">
      <BoxList />
      <MinorBoxInfo />
    </div>
  );
}
