import { PaymentMethod, PaymentMethodApi, PaymentMethodBox } from '@/types';

export function createPaymentMethodAdapter(data: PaymentMethodApi[]) {
  const result: PaymentMethod[] = [];

  data.forEach(({ boxes, ...rest }) => {
    const boxesMapped: PaymentMethodBox[] = boxes.map(({ openBox, ...boxRest }) => ({
      ...boxRest,
      openBox: Boolean(openBox),
    }));

    result.push({ ...rest, boxes: boxesMapped });
  });

  return result;
}
