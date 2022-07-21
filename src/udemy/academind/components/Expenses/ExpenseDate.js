const ExpenseDate = (props) => {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();
  return (
    <div className="flex h-20 w-20 flex-col items-center justify-center rounded-xl border border-solid border-white bg-neutral-800 text-white">
      <div className="text-xs font-bold">{month}</div>
      <div className="text-xs">{day}</div>
      <div className="text-2xl font-bold">{year}</div>
    </div>
  );
};

export default ExpenseDate;
