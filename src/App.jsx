import {useState} from "react";
import "./App.css";
import Category from "./feature/category/Category";
import AddProduct from "./feature/product/AddProduct";
import ProductList from "./feature/product/ProductList";
import Filters from "./feature/search/Filters";
import useLocalStorage from "./hook/useLocalStorage";
import Header from "./ui/Header";

function App() {
  const [category, setCategory] = useLocalStorage("category", []);
  const [product, setproduct] = useLocalStorage("product", []);
  const [search, setsearch] = useState("");
  const [categoryfilter, setcategoryfilter] = useState("");
  const [sortfilter, setsort] = useState("latest");
  const handelSearch = (e) => {
    setsearch(e.target.value);
  };
  const handlechengecategory = (e) => {
    setcategoryfilter(e.target.value);
  };
  const onchangeSort = (e) => {
    setsort(e.target.value);
  };
  const handelSort = (a, b) => {
    switch (sortfilter) {
      case "latest":
        return new Date(a.createAt).getTime() - new Date(b.createAt).getTime();
      case "earliest":
        return new Date(b.createAt).getTime() - new Date(a.createAt).getTime();
    }
  };
  const filterProduct = product
    .filter((p) =>
      search === "" ? true : p.title.toLowerCase().trim().includes(search.toLowerCase().trim())
    )
    .filter((p) => (categoryfilter === "" ? true : p.category === categoryfilter))
    .sort(handelSort);
  return (
    <div className="bg-slate-800 min-h-screen">
      <Header product={product} />
      <div className="container">
        <div className="flex flex-col md:flex-row gap-2 md:gap-10 mt-10">
          <div className="grow-2 space-y-3">
            <Category category={category} setCategory={setCategory} />
            <AddProduct product={product} setproduct={setproduct} category={category} />
          </div>
          <div className="grow flex gap-5 flex-col-reverse md:flex-col">
            <Filters
              handelSearch={handelSearch}
              handlechengecategory={handlechengecategory}
              onchangeSort={onchangeSort}
              category={category}
            />
            <ProductList setproduct={setproduct} product={filterProduct} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
