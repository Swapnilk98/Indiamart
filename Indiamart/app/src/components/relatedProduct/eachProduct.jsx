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

// "image": "https://5.imimg.com/data5/SELLER/Default/2022/1/IB/TX/TW/52181736/miss-rose-pink-lipstick-250x250.jpeg",
// "name": "Miss Rose Pink Lipstick",
// "price": 55,
// "brand": "Cosmetic World",
// "location": "New Delhi, Delhi, India",
// "mobile": "Call 07942554198"
