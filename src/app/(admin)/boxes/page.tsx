import { Metadata } from 'next';
import BoxesContainer from './_components/BoxesContainer';
import CashboxForm from './_components/CashboxForm';
import DeleteDialog from './_components/DeleteDialog';
import OpenBoxForm from './_components/OpenBoxForm';
import CloseBoxForm from './_components/CloseBoxForm';
import DeleteTransactionDialog from './_components/DeleteTransactionDialog';
import TransactionForm from './_components/TransactionForm';
import CashTransferForm from './_components/CashTransferForm';
import GlobalBoxInfo from './_components/GlobalBoxInfo';
import AuxiliarBoxes from './_components/auxiliar-boxes';
import BoxesTabPanel from './_components/boxes-tab-panel';
import CashFlowTable from './_components/CashFlowTable';

export const metadata: Metadata = {
  title: 'Cajas',
};

export default function BoxesPage() {
  return (
    <>
      <BoxesContainer>
        <BoxesTabPanel>
          <AuxiliarBoxes />
        </BoxesTabPanel>

        <BoxesTabPanel>
          <GlobalBoxInfo />
        </BoxesTabPanel>

        <BoxesTabPanel>
          <CashFlowTable />
        </BoxesTabPanel>
      </BoxesContainer>

      <CashboxForm />
      <DeleteDialog />
      <OpenBoxForm />
      <CloseBoxForm />
      <DeleteTransactionDialog />
      <TransactionForm />
      <CashTransferForm />
    </>
  );
}
