const ExpensesFilter = (props) => {
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <div className="py-0 px-4 text-white">
      <div className="mx-0 my-4 flex w-full items-center justify-between">
        <label htmlFor="" className="mb-2 font-bold">
          Filter by year
        </label>
        <select
          className="rounded-md py-2 px-12 font-bold text-black"
          onChange={dropdownChangeHandler}
          value = {props.selected}
        >
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
