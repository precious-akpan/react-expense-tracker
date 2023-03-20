import "./ExpenseForm.css";
import { useState } from "react";

const ExpenseForm = ({onSaveExpense}) => {
  const [expenseTitle, setExpenseTitle] = useState("");
  const [expenseAmount, setExpenseAmount] = useState("");
  const [expenseDate, setExpenseDate] = useState('');

  // const [userInput, setUserInput] = useState({
  //   expenseTitle: "",
  //   expenseAmount: "",
  //   expenseDate: "",
  // });

  const handleTitleChange = (event) => {
    setExpenseTitle(event.target.value.slice(0, 1).toUpperCase() + event.target.value.slice(1).toLowerCase());
    // setUserInput({
    //   ...userInput,
    //   expenseTitle: event.target.value
    // })
    //
    // setUserInput(prevState => ({
    //   ...prevState,
    //   expenseTitle: event.target.value,
    // }), );
  };
  const handleAmountChange = (event) => {
    console.log(event.target.value);
    setExpenseAmount(event.target.value);
  };
  const handleDateChange = (event) => {
    console.log(event.target.value);
    setExpenseDate(event.target.value);
  };
  const handleFormSubmit = (event) => {
    event.preventDefault()
    const expenseData = {
      title: expenseTitle,
      amount: expenseAmount,
      date: new Date(expenseDate)
    }

    onSaveExpense(expenseData);
    setExpenseDate('')
    setExpenseAmount('')
    setExpenseTitle('')
  };
  return (
    <form action="" onSubmit={handleFormSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={expenseTitle} onChange={handleTitleChange} autoFocus/>
        </div>{" "}
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min={0.01}
            step={0.01}
            value={expenseAmount}
            onChange={handleAmountChange}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="datetime-local" value={expenseDate} onChange={handleDateChange} min={"2000-01-02"}/>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type={"submit"}>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
