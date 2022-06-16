import { useEffect, useState } from "react";
import { SingleProduct } from "./eachProduct";
import "./similarCategory.css";

export const SimilarProduct = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      let res = await fetch("http://localhost:8000/similarCategory");
      let e = await res.json();
      setData(e);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div id="similarCategorySection">
      <h1>Ready to Ship Products in Similar Categories</h1>
      <div id="similarCategory">
        {data.length == 0
          ? null
          : data.map((el) => {
              return <SingleProduct el={el} key={el.id} />;
            })}
      </div>
      <form>
        <div id="form">
          <h3>Tell us what you need, and we'll help you get quotes</h3>

          <form action="">
            <div className="flexForm">
              <h4>I want quotes for</h4>

              <input
                type="text"
                name="product"
                placeholder="Cosmetics, Hair & Beauty Products"
              />
            </div>
            <div id="mob">
              <h4>Mobile Number</h4>
              <input type="text" placeholder="Enter Mobile Number"></input>
            </div>
            <div id="Name">
              <h4>Name</h4>
              <input type="text" placeholder="Enter Your Name"></input>
            </div>
            <div className="flex form">
              <h4>Quantity</h4>
              <div>
                <input type="text" name="" id="" />
                <input type="text" name="" id="" value={"Piece"} readOnly />
              </div>
            </div>
            <div className="flex form">
              <h4>Briefly describe your requirement</h4>
              <input
                type="text"
                name="product"
                placeholder="Additional details about requirement"
              />
            </div>
            <input type="submit" value="Submit Requirement" className="btn" />
          </form>
        </div>
      </form>
    </div>
  );
};
