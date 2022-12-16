import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ExpenseState {
  balance: number;
  expense: number;
  income: number;
  transactions: {
    transactionName: string;
    amount: number;
  }[];
}

export interface IExpense {
  transactionName: string;
  amount: number | string;
}

const initialState: ExpenseState = {
  balance: 0,
  expense: 0,
  income: 0,
  transactions: [],
};

export const expenseSlice = createSlice({
  name: 'expense',
  initialState,
  reducers: {
    addExpenseToHistory: (state, action: PayloadAction<IExpense>) => {
      if (typeof action.payload.amount !== 'number') {
        state.transactions.push({
          transactionName: action.payload.transactionName,
          amount: parseFloat(action.payload.amount),
        });
      }
    },
    clearTransactionHistory: (state) => {
      state.transactions = initialState.transactions;
      state.balance = initialState.balance;
      state.expense = initialState.expense;
      state.income = initialState.income;
    },
    calculateBalance: (state) => {
      state.balance = state.transactions.reduce(
        (acc, curr) => acc + curr.amount,
        0
      );
    },
    calculateIncome: (state) => {
      state.income = state.transactions.reduce((acc, curr) => {
        if (curr.amount > 0) {
          return Math.abs(acc + curr.amount);
        }
        return acc;
      }, 0);
    },
    calculateExpense: (state) => {
      state.expense = state.transactions.reduce((acc, curr) => {
        if (curr.amount < 0) {
          return acc + Math.abs(curr.amount);
        }
        return acc;
      }, 0);
    },
  },
});

export const {
  addExpenseToHistory,
  clearTransactionHistory,
  calculateBalance,
  calculateIncome,
  calculateExpense,
} = expenseSlice.actions;

export default expenseSlice.reducer;
