import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpenseChart from "./ExpenseChart";

const Expenses = ({ expenses, expenseYears }) => {
  const [selectedYear, setSelectedYear] = useState(2020);
  const handleFilterChange = (selectedYear) => {
    setSelectedYear(+selectedYear.target.value);
  };

  const filteredExpenses = expenses.filter(
    (expense) => expense.date.getFullYear() === selectedYear
  );

  return (
    <Card className={"expenses"}>
      <ExpenseFilter
        expenseYears={expenseYears}
        selectedYear={selectedYear}
        onFilterChange={handleFilterChange}
      />
      <ExpenseChart expenses={filteredExpenses} />
      <ExpensesList filteredExpenses={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
