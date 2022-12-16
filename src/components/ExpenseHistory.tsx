import { useAppSelector } from '../app/hooks';

const ExpenseHistory = () => {
  const expenses = useAppSelector((state) => state.expense.transactions);

  return (
    <>
      {!expenses.length ? (
        <div className='p-1 my-3 mx-auto'>No Transactions Yet</div>
      ) : (
        <div className='mt-3 w-100'>
          {expenses.map((expense, index) => (
            <div
              key={index}
              className={
                expense.amount < 0
                  ? 'shadow-sm py-1 px-3 mb-3 d-flex justify-content-between bg-danger rounded text-white w-100'
                  : 'shadow-sm py-1 px-3 mb-3 d-flex justify-content-between bg-success rounded text-white w-100'
              }
            >
              <div>{expense.transactionName}</div>
              <div>
                {expense.amount > 0
                  ? `+$${expense.amount}`
                  : `-$${Math.abs(expense.amount)}`}
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default ExpenseHistory;
