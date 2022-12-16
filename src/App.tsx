import { Container } from 'react-bootstrap';
import ExpenseHistory from './components/ExpenseHistory';
import BalanceIncomeExpense from './components/BalanceIncomeExpense';
import TransactionForm from './components/TransactionForm';
import './App.css';

function App() {
  return (
    <>
      <Container
        className='d-flex flex-column align-items-center mt-5 card shadow p-3'
        style={{ maxWidth: '500px' }}
      >
        <h1>Expense Tracker</h1>
        <BalanceIncomeExpense />
        <ExpenseHistory />
        <TransactionForm />
      </Container>
    </>
  );
}

export default App;
