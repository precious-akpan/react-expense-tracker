import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = ({ addExpense }) => {
  const handleSaveExpense = (exportedData) => {
    const expenseDate = {
      ...exportedData,
      id: Math.floor(1000 * Math.random().toFixed(3).toString()),
    };

    addExpense(expenseDate);
  };
  return (
    <div className={"new-expense"}>
      <ExpenseForm onSaveExpense={handleSaveExpense} />
    </div>
  );
};

export default NewExpense;
