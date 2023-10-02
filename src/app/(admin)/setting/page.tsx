import { Metadata } from 'next';
import PaymentMethodConfig from './_components/payment-method-config';

export const metadata: Metadata = {
  title: 'Configuración',
};

export default function SettingPage() {
  return (
    <div>
      <PaymentMethodConfig />
    </div>
  );
}
