import { mappedCashFlowReports } from '@/logic/statistics-logic';
import { CashFlowReportApi } from '@/types';
import axios from 'axios';

export const statisticsApi = axios.create({ baseURL: `${process.env.NEXT_PUBLIC_URL_API}/statistics` });

export async function getCashFlowReports() {
  const res = await statisticsApi.get<CashFlowReportApi[]>('/cash-flow-reports');
  const reports = res.data.map(mappedCashFlowReports);
  return reports;
}
