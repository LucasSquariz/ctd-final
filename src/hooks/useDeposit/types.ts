export type Deposit = {
  account_id: number;
  amount: number;
  dated: string;
  description: string;
  destination: string;
  id: number;
  origin: string;
  type: string;
};

export type Data = {
  amount?: number;
  dated?: 'string';
  destination?: 'string';
  origin?: 'string';
};
