
import "./App.css";
import Category from "./feature/category/Category";
import AddProduct from "./feature/product/AddProduct";
import useLocalStorage from "./hook/useLocalStorage";
import Header from "./ui/Header";


function App() {
  const [category, setCategory] = useLocalStorage("category", []);
  const [product, setproduct] = useLocalStorage("product", []);
  return (
    <div className="bg-slate-800 min-h-screen">
      <Header />
      <div className="container">
        <div className="flex mt-5">
          <div className="grow space-y-3">
            <Category category={category} setCategory={setCategory} />
            <AddProduct product={product} setproduct={setproduct} category={category}    />
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default App;
