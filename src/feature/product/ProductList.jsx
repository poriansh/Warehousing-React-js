import toLocalDate from "../../utils/toLocalDate";

function ProductList({product, setproduct}) {
  const handelDeleteProduct = (id) => {
    setproduct(product.filter((p) => p.id !== id));
  };
  return (
    <div>
      <h2 className="text-xl text-slate-400 font-bold mb-4 border-b-slate-500 border-b">
        ProductList
      </h2>
      {product.length > 0 &&
        product.map((item) => (
          <div key={item.id} className="overflow-x-auto">
            <div className="flex items-center justify-between mb-2 w-full">
              <span className="text-slate-400">{item.title}</span>
              <div className="flex items-center gap-x-3">
                <span className="text-slate-400">{toLocalDate(item.date)}</span>
                <span className="block px-3 pb-1 text-slate-400 border border-slate-400 text-sm/normal rounded-2xl">
                  {item.category}
                </span>
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-slate-500 border-2 border-slate-300 text-slate-300">
                  {item.quantity}
                </span>
                <button
                  onClick={() => handelDeleteProduct(item.id)}
                  className="border px-2 py-0.5 rounded-2xl border-red-400 text-red-400 cursor-pointer"
                >
                  delete
                </button>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default ProductList
