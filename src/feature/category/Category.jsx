import {useEffect, useState} from "react";
import Textfiald from "../../ui/Textfiald";

function Category({category, setCategory}) {
  const [open, setOpen] = useState(false);
  const [title, settitle] = useState("");
  const [discription, setdiscription] = useState("");
  const handelForm = (e) => {
    e.preventDefault();
    if (!title || !discription) return null;
    const newCategory = {
      id: Date.now(),
      title: title,
      discription: discription,
    };
    setCategory((prevCategories) => [...prevCategories, newCategory]);

    console.log(category);
    settitle("");
    setdiscription("");
  };
  useEffect(() => {
    console.log("بعد از آپدیت:", category); // مقدار جدید را بعد از آپدیت نمایش می‌دهد
  }, [category]);
  return (
    <div>
      {open ? (
        <div className="mb-8">
          <h2 className="text-xl text-slate-300 font-bold mb-2">Add New category</h2>
          <form onSubmit={handelForm} className="bg-slate-700 p-4 rounded-xl flex flex-col gap-y-4">
            <div>
              <label htmlFor="title" className="block mb-2 text-slate-400">
                title
              </label>
              <Textfiald id="title" value={title} onChange={(e) => settitle(e.target.value)} />
            </div>
            <div>
              <label htmlFor="category-description" className="block mb-2 text-slate-400">
                description
              </label>
              <textarea
                className="bg-transparent p-2 max-h-40 min-h-20 focus:ring-2 focus:border-none ring-blue-900 focus:outline-none rounded-xl border-2 border-slate-500 text-slate-400 w-full"
                type=" text"
                name="description"
                id="category-description"
                value={discription}
                onChange={(e) => setdiscription(e.target.value)}
              ></textarea>
            </div>
            <div className="flex items-center justify-between gap-x-4">
              <button className="btn btn--secondery" onClick={() => setOpen(false)}>
                Cancel
              </button>
              <button type="submit" id="add-new-category" className="btn btn--primary ">
                Add Category
              </button>
            </div>
          </form>
        </div>
      ) : (
        <button
          onClick={() => setOpen(true)}
          className="text-slate-600 text-lg font-medium cursor-pointer"
        >
          Add new Category?
        </button>
      )}
    </div>
  );
}

export default Category;
