import FormSection from '@/components/form/FormSection';
import FormSectionBody from '@/components/form/FormSectionBody';
import React from 'react';
import PaymentMethodActions from './actions';
import PaymentMethodTable from './payment-method-table';

export default function PaymentMethodConfig() {
  return (
    <FormSection title="Metodos de Pago" description="Administra aquí los metodos de pagos de la aplicación">
      <FormSectionBody hasActions>
        <PaymentMethodTable className="col-span-6" />
      </FormSectionBody>
      <PaymentMethodActions />
    </FormSection>
  );
}
