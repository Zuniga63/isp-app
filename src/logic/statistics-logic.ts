import { CashFlowReport, CashFlowReportApi } from '@/types';

export function mappedCashFlowReports(report: CashFlowReportApi): CashFlowReport {
  const { year, month, ...rest } = report;
  const date: CashFlowReport['date'] = { year, month };

  return { date, ...rest };
}
