import "./ExpensesFilter.css";

const ExpenseFilter = ({onFilterChange}) => {
  return (
    <div className={"expenses-filter"}>
      <div className="expenses-filter__control">
        <label htmlFor="year">Filter by year: </label>
        <select name="filteredYear" id="year" onChange={onFilterChange}>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
