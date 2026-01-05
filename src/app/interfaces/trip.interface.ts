import { Expense } from './expense.interface';

export interface Trip {
  id: string;
  countryName: string;
  countryCode: string;
  currencySymbol: string;
  startingCashBudget: number;
  startingCreditBudget: number;
  usedCashBudget: number;
  usedCreditBudget: number;
  expenses: Expense[];
  createdAt: Date;
}
