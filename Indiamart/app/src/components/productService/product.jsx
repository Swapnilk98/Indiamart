import { useEffect, useState } from "react";

import { ProductCard } from "./productCard";
import { Link } from "react-router-dom";
import "./product.css";

export const ProductService = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      let res = await fetch("  http://localhost:8000/productService");
      let allData = await res.json();
      setData(allData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div id="homeProudctService">
      <p>Product & Service</p>
      <Link to={"/"} id="productService">
        {data.length == 0
          ? null
          : data.map((el) => {
              return <ProductCard el={el} key={el.id} />;
            })}
      </Link>
      <button>View Complete Range</button>
    </div>
  );
};
