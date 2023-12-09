'use client';

import FormSectionActions from '@/components/form/FormSectionActions';
import { Button } from '@chakra-ui/react';

export default function PaymentMethodActions() {
  return (
    <FormSectionActions>
      <Button>Agregar Metodo de Pago</Button>
    </FormSectionActions>
  );
}
