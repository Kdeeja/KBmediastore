import { useState } from "react";
import musiclist from "./models/data.json";
import ProductList from "./components/ProductList";
import Product from "./components/Product";
// import Header from "./components/Header";

function App() {
  const [products, setProducts] = useState(musiclist);
  return (
    <>
      <ProductList products={products} />
    </>
  );
}

export default App;
