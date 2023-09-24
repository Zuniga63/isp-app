import { ServerStateKeysEnum } from '@/config/server-state-key.enum';
import { getCashFlowReports } from '@/services/statistics.service';
// import { useLoginStore } from '@/store/authStore';
import { useQuery } from '@tanstack/react-query';

export function useGetCashFlowReports() {
  // const isAdmin = useLoginStore(state => state.isAdmin);

  return useQuery({
    queryKey: [ServerStateKeysEnum.CashFlowReports],
    queryFn: getCashFlowReports,
    // enabled: isAdmin,
  });
}
