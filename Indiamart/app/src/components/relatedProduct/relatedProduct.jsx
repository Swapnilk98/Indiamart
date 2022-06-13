import { useEffect, useState } from "react";
import { EachProductRelated } from "./eachProduct";
import "./relatedProduct.css";

export const RelatedProduct = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      let res = await fetch("http://localhost:8000/relatedCategories");
      let allData = await res.json();
      setData(allData);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div id="relatedProductSection">
      <h2>Related Products from Top Suppliers</h2>
      <div id="relatedProducts">
        {data.length == 0
          ? null
          : data.map((el) => {
              return <EachProductRelated el={el} key={el.id} />;
            })}
      </div>
    </div>
  );
};
