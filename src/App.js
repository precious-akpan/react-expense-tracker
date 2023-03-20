import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";

  const dummy_expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 940.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799000.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 2940.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 45000,
      date: new Date(2021, 5, 12),
    },
  ];
const App = () => {
  const [expenses, setExpenses] = useState(dummy_expenses);
  const handleAddExpense = (addedExpense) => {
    setExpenses((prevState) => {
      return [addedExpense, ...prevState ];
    });

  };
    const set =new Set(); expenses.map(expense => set.add(expense.date.getFullYear()))
  const expenseYears = Array.from(set)
  console.log(set);
  return (
    <div className="App">
      <NewExpense addExpense={handleAddExpense} />
      <Expenses expenses={expenses} expenseYears={expenseYears}/>
    </div>
  );
};

export default App;
