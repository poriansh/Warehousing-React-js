import {useState} from "react";
import Textfiald from "../../ui/Textfiald";
import Selector from "../../ui/Selector";

function AddProduct({category, setproduct}) {
  const [title, settitle] = useState("");
  const [quantity, setquantity] = useState(0);
  const [categoryitem, setcategoryitem] = useState("");
  const handelProduct = (e) => {
    e.preventDefault();
    if (!title || quantity <= 0 || !categoryitem) return;
    const newProduct = {
      id: Date.now(),
      title: title,
      quantity: quantity,
      category: categoryitem,
      date : new Date().toISOString()
    };
    setproduct((prev) => [...prev, newProduct]);
    settitle("");
    setquantity(0)
    setcategoryitem("")
    
  };
  return (
    <div className="mb-8">
      <h2 className="text-xl text-slate-300 font-bold mb-2">Add New Product</h2>
      <form className="bg-slate-700 p-4 rounded-xl flex flex-col gap-y-4" onSubmit={handelProduct}>
        <div>
          <label htmlFor="title" className="block mb-2 text-slate-400">
            title
          </label>
          <Textfiald id="title" value={title} onChange={(e) => settitle(e.target.value)} />
        </div>
        <div>
          <label htmlFor="quantity" className="block mb-2 text-slate-400">
            quantity
          </label>
          <Textfiald
            id="quantity"
            type="number"
            value={quantity}
            onChange={(e) => setquantity(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="category" className="block mb-2 text-slate-400">
            category
          </label>
          <Selector
            value={categoryitem}
            onChange={(e) => setcategoryitem(e.target.value)}
            option={category}
          />
        </div>
        <div className="flex items-center justify-between gap-x-4">
          <button type="submit" id="add-new-category" className="btn btn--primary ">
            Add new Product
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddProduct;
