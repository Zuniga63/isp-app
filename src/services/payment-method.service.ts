import type { PaymentMethodApi } from '@/types';
import axios from 'axios';
import { createPaymentMethodAdapter } from './adapters/create-payment-method.adapter';

export const paymentMethodApi = axios.create({ baseURL: `${process.env.NEXT_PUBLIC_URL_API}/payment-methods` });

export async function getPaymentMethods() {
  const res = await paymentMethodApi.get<PaymentMethodApi[]>('');
  return createPaymentMethodAdapter(res.data);
}
