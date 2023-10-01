export type PaymentMethodBoxApi = {
  id: string;
  name: string;
  openBox?: string;
};

export type PaymentMethodApi = {
  id: string;
  name: string;
  description?: string;
  isEnabled: boolean;
  boxes: PaymentMethodBoxApi[];
};

export type PaymentMethodBox = Omit<PaymentMethodBoxApi, 'openBox'> & {
  openBox: boolean;
};

export type PaymentMethod = Omit<PaymentMethodApi, 'boxes'> & {
  boxes: PaymentMethodBox[];
};
