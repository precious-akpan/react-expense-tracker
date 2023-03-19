import "./ExpenseForm.css";
import {useState} from "react";

const ExpenseForm = () => {
  // const [expenseTitle, setExpenseTitle] = useState("");
  // const [expenseAmount, setExpenseAmount] = useState("");
  // const [expenseDate, setExpenseDate] = useState(new Date().toDateString());

  const [userInput, setUserInput]=useState({
    expenseTitle: '',
    expenseAmount: '',
    expenseDate: '',
  })

  const handleTitleChange = (event) => {
    let inputValue = event.target.value;
    // setExpenseTitle(inputCapitalised);
    event.target.value = inputValue.slice(0, 1).toUpperCase() + inputValue.slice(1);
    // setUserInput({
    //   ...userInput,
    //   expenseTitle: event.target.value
    // })

    setUserInput((prevState) => ({...prevState, expenseTitle: event.target.value}));
  }
  const handleAmountChange = (event) => {
    console.log(event.target.value);
    // setExpenseAmount(event.target.value);
  };
  const handleDateChange = (event) => {
    console.log(event.target.value);
    // setExpenseDate(event.target.value);
  };
  return (
    <form action="">
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={handleTitleChange} />
        </div>{" "}
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min={0.01}
            step={0.01}
            onChange={handleAmountChange}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="datetime-local" onChange={handleDateChange} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type={"submit"}>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
