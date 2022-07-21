import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  return (
    <div className="my-8 mx-auto w-[800px] max-w-[95%] rounded-xl bg-violet-400 p-4 text-center shadow-xl shadow-gray-200">
      {/*Pass data from child to parent(communicate up): use the function as the value of the prop*/}
      {/*Why name the prop as On... ? Because it indicates that the value is a function*/}
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
