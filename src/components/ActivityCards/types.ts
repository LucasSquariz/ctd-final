export type ActivityItemType = {
  slice(arg0: number, arg1: number): unknown;
  filter(): any;
  account_id: number;
  id: number;
  type: string;
  amount: number;
  dated: string;
  description: string;
};

export type ActivePaginationPath = {
  activePath?: boolean;
};
