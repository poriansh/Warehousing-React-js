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
  const handelDeleteProduct = (id) => {
    setproduct(product.filter((p) => p.id !== id));
  };
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
            <Filters category={category} />
            <ProductList handelDeleteProduct={handelDeleteProduct} product={product} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
