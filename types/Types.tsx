import { Dispatch, SetStateAction } from "react";

export interface IExpenses {
  id: string;
  amount: number;
  name: string;
  description: string;
  category: string;
  date: string;
}
