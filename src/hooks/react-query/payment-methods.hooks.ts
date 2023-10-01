import { ServerStateKeysEnum } from '@/config/server-state-key.enum';
import { getPaymentMethods } from '@/services/payment-method.service';
import { useAuthStore } from '@/store/authStore';
import { useQuery } from '@tanstack/react-query';

export function useGetPaymentMethods() {
  const isAuth = useAuthStore(state => state.isAuth);

  return useQuery({
    queryKey: [ServerStateKeysEnum.PaymentMethods],
    queryFn: getPaymentMethods,
    enabled: isAuth,
  });
}
