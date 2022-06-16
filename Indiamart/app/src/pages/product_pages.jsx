import { Producthead } from "../components/pageshead/pagesHead";
import { Products } from "../components/products/products";
import { useEffect, useState } from "react";
import { Sidebar } from "../components/pages_sidebar/pages_sidebar";
import "./product_pages.css";
import { useParams } from "react-router-dom";
export const Product_pages = () => {
  const { category } = useParams();
  console.log(category);
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, [category]);

  const getData = async () => {
    let res = await fetch(`http://localhost:8000/Products/`);
    let FetchedData = await res.json();
    console.log(FetchedData);
    setData(FetchedData);
  };

  return (
    <div className="flexDiv">
      <div className="flexSidebarDiv">
        <Sidebar />
      </div>
      <div className="flexmainDiv">
        {data.length == 0 ? null : (
          <>
            <Producthead productData={data}></Producthead>
            <Products products={data}></Products>
          </>
        )}
      </div>
    </div>
  );
};
