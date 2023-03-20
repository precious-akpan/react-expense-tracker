import "./ExpensesFilter.css";

const ExpenseFilter = ({onFilterChange, expenseYears}) => {

    expenseYears = Array.from(expenseYears)
    console.log(expenseYears);
    return (
    <div className={"expenses-filter"}>
      <div className="expenses-filter__control">
        <label htmlFor="year">Filter by year: </label>
        <select name="filteredYear" id="year" onChange={onFilterChange}>

          {expenseYears.map(year => <option value={year}>{year}</option>)}
          {/*<option value="2021">2021</option>*/}
          {/*<option value="2022">2022</option>*/}
          {/*<option value="2023">2023</option>*/}
          {/*<option value="2024">2024</option>*/}
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
