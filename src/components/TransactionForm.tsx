import { useState } from 'react';
import { useAppDispatch } from '../app/hooks';
import {
  addExpenseToHistory,
  clearTransactionHistory,
  calculateBalance,
  calculateIncome,
  calculateExpense,
  IExpense,
} from '../features/expenseSlice';
import { Form, Button } from 'react-bootstrap';

const TransactionForm = () => {
  const dispatch = useAppDispatch();
  const [expense, setExpense] = useState<IExpense>({
    transactionName: '',
    amount: '',
  });

  const handleChange = <K extends keyof IExpense>(
    key: K,
    value: IExpense[K]
  ) => {
    setExpense({ ...expense, [key]: value });
  };

  const handleAdd = () => {
    if (
      typeof expense.amount === 'string' &&
      !isNaN(parseFloat(expense.amount))
    ) {
      dispatch(addExpenseToHistory(expense));
      dispatch(calculateBalance());
      dispatch(calculateIncome());
      dispatch(calculateExpense());
    }
  };

  const handleClear = () => {
    dispatch(clearTransactionHistory());
  };

  return (
    <div className='mt-3'>
      <h3 className='border-bottom border-2'>Add New Transaction</h3>
      <Form.Group className='mb-3 w-100' controlId='exampleForm.ControlInput1'>
        <Form.Label>Name</Form.Label>
        <Form.Control
          onChange={(e) =>
            handleChange(e.target.name as keyof IExpense, e.target.value)
          }
          name='transactionName'
          type='text'
          placeholder='Enter the transaction name'
        />
      </Form.Group>
      <Form.Group className='mb-3 w-100' controlId='exampleForm.ControlInput1'>
        <Form.Label>Amount</Form.Label>
        <Form.Control
          onChange={(e) =>
            handleChange(e.target.name as keyof IExpense, e.target.value)
          }
          name='amount'
          type='number'
          placeholder='Enter the amount'
          style={{ outline: 'none !important' }}
        />
      </Form.Group>
      <div className='mb-2 d-flex justify-content-between'>
        <Button onClick={handleAdd} className='btn-dark'>
          Add Transaction
        </Button>
        <Button onClick={handleClear} className='btn-dark'>
          Clear All
        </Button>
      </div>
    </div>
  );
};
export default TransactionForm;
