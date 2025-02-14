function Selector({ onChange, option}) {
  return (
    <select
      onChange={onChange}
      className="bg-transparent cursor-pointer focus:ring-0 focus:border-blue-800   focus:outline-none rounded-xl border-2 border-slate-500 text-slate-400 w-50 "
    >
      <option className="bg-slate-500  text-slate-300" value="">
        select
      </option>
      {option.map((item) => (
        <option
          className="bg-slate-500  text-slate-300"
          key={item?.id || item?.value}
          value={item.title}
        >
          {item.title}
        </option>
      ))}
    </select>
  );
}

export default Selector;
