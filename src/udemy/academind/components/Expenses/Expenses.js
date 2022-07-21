import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpenseItem from "./ExpenseItem";

// React State: we have separate states, even if we create a component more than once(ExpenseItem component)
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <div>
      <Card className="my-8 mx-auto w-[800px] max-w-[95%] bg-stone-900 p-4">
        {/*Two-way binding: we can pass the value filteredYear back to the ExpenseFilter component, to set up the two-way binding*/}
        {/*Why set up two-way binding instead of directly modify the filteredYear in the ExpenseFilter Component via the event.target.value method ? Because in this way, setting up the two-way binding can reflect the initial value. In this case, it's '2020'*/}

        {/*Controlled Component: Controlled component is a component that get the changed value from the callback function and uncontrolled component is component that have the one from the DOM. Both the value and changes to the value are not handled by the component itself, but in the parent component. In this case, Expenses Component controls the ExpensesFilter Component, because ExpensesFilter Component has two-way binding, so ExpensesFilter Component is a Controlled Component.*/}
        {/*Stateless vs Stateful component: describe whether the component contains state or not */}
        <ExpensesFilter
          selected={filteredYear} // set value back from Expenses state: filteredYear to child component ExpensesFilter
          onChangeFilter={filterChangeHandler}
        />
        {props.items.map((expense, index) => (
          <ExpenseItem
            key={index} // Why need key prop? Warning: Each child in a list should have a unique "key" prop.
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
