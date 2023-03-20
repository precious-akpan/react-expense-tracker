import "./ExpenseItems.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import { useState } from "react";
const ExpenseItem = ({ title, date, amount }) => {
  const [expenseTitle] = useState(title);
  return (
    <li>
      <Card className={"expense-item"}>
        <ExpenseDate date={date} />
        <div className={"expense-item__description"}>
          <h2>{expenseTitle}</h2>
          <div className={"expense-item__price"}>₦{amount}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
