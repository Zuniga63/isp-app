import BoxListHeader from './BoxListHeader';
import BoxListBody from './BoxListBody';
import BoxListContainer from './box-list-container';

export default function BoxList() {
  return (
    <BoxListContainer>
      <BoxListHeader />
      <BoxListBody />
    </BoxListContainer>
  );
}
