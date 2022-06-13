import { useEffect, useState } from "react";
import "./relatedCategories.css";
import { EachProductCategories } from "./eachProduct";

export const RelatedCategories = () => {
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
    <div id="relatedCategoriesSection">
      <h1>Related Categories</h1>
      <div id="relatedCategories">
        {data.length == 0
          ? null
          : data.map((el) => {
              return <EachProductCategories el={el} key={el.id} />;
            })}
      </div>
    </div>
  );
};
