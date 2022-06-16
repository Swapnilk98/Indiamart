import { Link } from "react-router-dom";
import "./similarCategory.css";

export const SingleProduct = ({ el }) => {
  return (
    <div id="SimilarEachProduct">
      <img src={el.image} alt="" />
      <Link to={""}>{el.name}</Link>
      <p>$ {el.price}</p>
      <button>Buy Now</button>
      <p>{el.desc}</p>
    </div>
  );
};
