import "./ExpenseItems.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import { useState } from "react";
const ExpenseItem = ({ title, date, amount }) => {
  const [expenseTitle, setExpenseTitle] = useState(title);
  const handleClick = () => {
    setExpenseTitle("Changed!");
  };
  return (
    <Card className={"expense-item"}>
      <ExpenseDate date={date} />
      <div className={"expense-item__description"}>
        <h2>{expenseTitle}</h2>
        <div className={"expense-item__price"}>₦{amount}</div>
      </div>
      <button onClick={handleClick}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
