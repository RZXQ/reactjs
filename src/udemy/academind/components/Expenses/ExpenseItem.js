import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import { useState } from "react";

// props: props parameter will be an object which holds all the received attributes as properties
// why using setState ? why not directly change the props ? Because if we directly modify the props in the clickHandler function,  the props changes for sure, but the return of the function won't be executed again. Thus, we won't be able to see the DOM change, we need to force react to render the component(a javascript function) again.
const ExpenseItem = (props) => {
  // useState return value: useState actually returns an array, the first value is the variable itself, the first argument is always the current value. the second argument is the updating function.
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    // why call setTitle instead of using title = "updated" ? because calling this function does not just assign a new value to some variable, but the component function(ExpenseItem function) in which you called will be executed again.(including the returned JSX code)
    setTitle("Updated!");
    // Why title state always print last time state in the console ? Calling the set function does not change the current state in the already executing code(https://beta.reactjs.org/apis/usestate#ive-updated-the-state-but-logging-gives-me-the-old-value)
    console.log(title);
  };

  return (
    <Card className="mx-0 my-4 flex items-center justify-between bg-neutral-600 p-2">
      <ExpenseDate date={props.date} />
      <div className="flex flex-grow flex-col flex-col-reverse items-end justify-start gap-4 sm:flex-1 sm:flex-row sm:items-center sm:justify-start">
        <h2 className="my-0 mx-4 flex-grow text-base text-white sm:text-xl">
          {title}
        </h2>
        <div className="rounded-xl border border-solid border-white bg-purple-900 p-2 text-base font-bold text-white sm:py-2 sm:px-6 sm:text-xl ">
          ${props.amount}
        </div>
      </div>
      {/* why not using clickHandler(), because it's not executed when this is evaluated but when the click occurs*/}
      <button className="bg-white" onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
