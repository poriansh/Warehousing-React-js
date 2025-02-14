import Selector from "../../ui/Selector";
import Textfiald from "../../ui/Textfiald";

function Filters({category}) {
  const sort = [
    {
      title: "latest",
      value: "latest",
    },
    {
      title: "earliest",
      value: "earliest",
    },
  ];
  return (
    <div>
      <h2 className="text-slate-500 font-bold mb-5 border-b-slate-500 border-b">Filters</h2>
      <div>
        <div className="flex items-center justify-between mb-6">
          <label htmlFor="search-input" className="text-slate-500 text-lg">
            search
          </label>
          <Textfiald type="text" id="search-input" />
        </div>
        <div className="flex  gap-20 items-center justify-between mb-6">
          <label htmlFor="sort-products" className="text-slate-500 text-lg">
            category
          </label>
          <Selector option={category} />
        </div>
        <div className="flex  gap-20 items-center justify-between mb-6">
          <label htmlFor="sort-products" className="text-slate-500 text-lg">
            sort
          </label>
          <Selector option={sort} />
        </div>
      </div>
    </div>
  );
}

export default Filters;
