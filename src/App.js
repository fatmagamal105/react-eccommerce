// import "./App.css";
// import Form from "./components/Form";

import { useEffect, useState } from "react";
import Card from "./components/Card";
import Limit from "./components/Limit";
import Navbar from "./components/Navbar";

function App() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [limit, setLimit] = useState(50);
  const [searchQuery, setSeachQuery] = useState("");

  useEffect(() => {
    fetch(`https://dummyjson.com/products?limit=${limit}`)
      .then((res) => res.json())
      .then(({ products, limit, skip, total }) => {
        // console.log(products);
        setProducts(products);
      });
  }, [limit]);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/search?q=${searchQuery}`)
      .then((res) => res.json())
      .then(({ products, limit, skip, total }) => {
        // console.log(products);
        setProducts(products);
      });
  }, [searchQuery]);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/categories`)
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
        
      });
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      fetch(`https://dummyjson.com/products/category/${selectedCategory}`)
        .then((res) => res.json())
        .then((data) => {
          console.log("data =>", data);
          setProducts(data.products)
        });
    }
  }, [selectedCategory]);

  return (
    <div className="App">
      <Navbar searchHandler={setSeachQuery} />
      <Limit limitHandler={setLimit} />
      <div className="container mt-3">
        <div className="row">
          <div className="col-3">
            <ul className="list-group">
            <li
                  style={{ cursor: "pointer" }}
                  className="list-group-item"
                  onClick={() => setLimit(100)}
                >
                  ALL
                </li>
              {categories.map((cateogry) => (
                <li
                  style={{ cursor: "pointer" }}
                  className="list-group-item"
                  key={cateogry}
                  onClick={() => setSelectedCategory(cateogry)}
                >
                  {cateogry}
                </li>
              ))}
            </ul>
          </div>

          <div className="col-9">
            <div className="row">
              {products.map((product) => (
                <div className="col-4" key={product.id}>
                  <Card product={product} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
