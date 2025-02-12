
function Textfiald({id, onChange, value}) {
  return (
    <>
      <input
        className="bg-transparent p-2 focus:border-blue-900   focus:outline-none rounded-xl border-2 border-slate-500 text-slate-400 "
        type="text"
        id={id}
        onChange={onChange}
        value={value}
      />
    </>
  );
}

export default Textfiald
