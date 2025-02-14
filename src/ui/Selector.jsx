function Selector({value, onChange, option}) {
  return (
    <select
      value={value}
      onChange={onChange}
      className="bg-transparent cursor-pointer p-3 w-full focus:outline-none rounded-xl border-2 border-slate-500 text-slate-400 "
    >
      {option.map((item) => (
        <option className="cursor-pointer" key={item.id} value={item.title}>
          {item.title}
        </option>
      ))}
    </select>
  );
}

export default Selector;
