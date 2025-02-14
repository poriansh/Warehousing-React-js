function Selector({value, onChange, option}) {
  return (
    <select
      value={value}
      onChange={onChange}
      className="bg-transparent cursor-pointer p-3  focus:outline-none rounded-xl border-2 border-slate-500 text-slate-400 w-50 "
    >
      {option.map((item) => (
        <option className="bg-slate-500 text-slate-300" key={item?.id || item?.value} value={item.title}>
          {item.title}
        </option>
      ))}
    </select>
  );
}

export default Selector;
