import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import {useState} from "react";

const Expenses = ({ expenses }) => {
    const [filteredYear, setFilteredYear] = useState(`2021`)
    const handleFilterChange = (selectedYear) => {
        setFilteredYear(selectedYear.target.value);
    }

  return (
    <Card className={"expenses"}>
      <ExpenseFilter selectedYear={filteredYear} onFilterChange={handleFilterChange}/>
      {expenses.map((expense) => (
        <ExpenseItem key={expense.id}
          date={expense.date}
          title={expense.title}
          amount={expense.amount}
        />
      ))}
    </Card>
  );
};

export default Expenses;
