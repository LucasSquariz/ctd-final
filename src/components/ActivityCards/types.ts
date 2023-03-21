export type ItemType = {
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
