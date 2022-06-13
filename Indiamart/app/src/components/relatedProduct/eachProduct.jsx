import "./relatedProduct.css";
import { Link } from "react-router-dom";
import WifiCalling3Icon from "@mui/icons-material/WifiCalling3";

export const EachProductRelated = ({ el }) => {
  return (
    <div className="realtedProduct" key={el.id}>
      <img src={el.image} alt="" />
      <Link to={"#"}>{el.name}</Link>
      <div>
        <p>Rs{el.price}/Box</p>
        <p>{el.brand}</p>
        <span className="location">{el.location}</span>
      </div>
      <div>
        <p>
          <WifiCalling3Icon />
          <span className="call">{el.mobile}</span>
        </p>
        <button>Contact Supplier</button>
      </div>
    </div>
  );
};
