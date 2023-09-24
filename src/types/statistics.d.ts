export type CashFlowReportApi = {
  id: string;
  year: number;
  month: number;
  incomes: number;
  expenses: number;
  balance: number;
};

export type CashFlowReport = {
  id: string;
  date: {
    year: CashFlowReportApi['year'];
    month: CashFlowReportApi['month'];
  };
  incomes: CashFlowReportApi['incomes'];
  expenses: CashFlowReportApi['expenses'];
  balance: CashFlowReportApi['balance'];
};
