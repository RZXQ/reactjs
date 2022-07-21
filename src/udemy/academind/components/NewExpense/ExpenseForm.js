import { useState } from "react";

const ExpenseForm = (props) => {
  // Multi-State approach:
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  // Single Object state approach:
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });
  //
  // const titleChangeHandler = (event) => {
  // event.target.value: the value property holds the current value of this input.
  // whenever update state depends on previous state: use function form
  // setUserInput((prevState) => ({
  //   ...prevState,
  //   enteredTitle: event.target.value,
  // }));
  // };
  //
  // const amountChangeHandler = (event) => {
  //   setUserInput((prevState) => ({
  //     ...prevState,
  //     enteredAmount: event.target.value,
  //   }));
  // };
  //
  // const dateChangeHandler = (event) => {
  //   setUserInput((prevState) => ({
  //     ...prevState,
  //     enteredDate: event.target.value,
  //   }));
  // };

  const submitHandler = (event) => {
    // Why use event.preventDefault() ? Because if not, the default browser behavior would automatically refresh the webpage if we submit a request. Thus, if the browser not loaded, we can continue use JavaScript to process data.(See code below)
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);
    // Two-way binding: add value attribute to input, and we can clear the input data if we want.
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        {/*Why put every input in div ? For style purpose*/}
        <div className="mb-4 flex flex-wrap gap-4 text-left">
          <div className="new-expense__control">
            <label htmlFor="" className="mb-2 block font-bold">
              Title
            </label>
            {/*onChange event advantages: we can use that same event for all inputs types*/}
            <input
              type="text"
              className="w-[320px] max-w-full rounded-md border border-solid border-gray-200 p-2"
              value={enteredTitle}
              onChange={titleChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label htmlFor="" className="mb-2 block font-bold">
              Amount
            </label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              className="w-[320px] max-w-full rounded-md border border-solid border-gray-200 p-2"
              value={enteredAmount}
              onChange={amountChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label htmlFor="" className="mb-2 block font-bold">
              Date
            </label>
            <input
              type="date"
              min="2019-01-01"
              max="2022-12-31"
              className="w-[320px] max-w-full rounded-md border border-solid border-gray-200 p-2"
              value={enteredDate}
              onChange={dateChangeHandler}
            />
          </div>
        </div>
        <div className="text-right">
          <button
            type="submit"
            className="mr-4 cursor-pointer rounded-xl border border-solid border-purple-900 bg-purple-900 py-4 px-8 text-white hover:bg-purple-800 hover:bg-purple-800"
          >
            Add Expense
          </button>
        </div>
      </form>
    </div>
  );
};
export default ExpenseForm;
