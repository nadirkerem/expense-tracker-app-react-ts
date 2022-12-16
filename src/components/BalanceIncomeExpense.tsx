import { Stack } from 'react-bootstrap';
import { useAppSelector } from '../app/hooks';

const BalanceIncomeExpense = () => {
  const balance = useAppSelector((state) => state.expense.balance);
  const expense = useAppSelector((state) => state.expense.expense);
  const income = useAppSelector((state) => state.expense.income);

  return (
    <div className='card shadow-sm px-1 py-3 mt-3' style={{ width: '100%' }}>
      <Stack direction='horizontal'>
        <div className='mx-auto d-flex flex-column align-items-center'>
          <div className='fw-bold'>Income</div>
          <span className='text-success'>$ {income}</span>
        </div>
        <div className='mx-auto d-flex flex-column align-items-center '>
          <div className='fw-bold'>Balance</div>
          <span className='text-dark'>$ {balance}</span>
        </div>
        <div className='mx-auto d-flex flex-column align-items-center'>
          <div className='fw-bold'>Expense</div>
          <span className='text-danger'>$ {expense}</span>
        </div>
      </Stack>
    </div>
  );
};
export default BalanceIncomeExpense;
