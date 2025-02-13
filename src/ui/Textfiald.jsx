
function Textfiald({id, onChange, value,type ="text"}) {
  return (
    <>
      <input
        className="bg-transparent p-2 focus:border-blue-900   focus:outline-none rounded-xl border-2 border-slate-500 text-slate-400 "
        type={type}
        id={id}
        onChange={onChange}
        value={value}
        min={0}
      />
    </>
  );
}

export default Textfiald
