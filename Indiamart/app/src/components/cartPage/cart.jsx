
import { useNavigate } from "react-router-dom";
import "./cart.css";
import { useSelector } from "react-redux";

export const Card = () => {
  const navigate = useNavigate();
  const cart = useSelector((store) => store.cartReducer.cart);
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/review");
  };

  return (
    <div id="cartPage">
      <div className="card">
        <div id="left">
          <img src={cart.image} alt="" />
          <h1 className="formData">{cart.name}</h1>
          <p className="formData">{cart.benefits}</p>
        </div>
        <div id="right">
          <form action="" onSubmit={handleSubmit}>
            <h2 className="formData">
              Adding a few details of your requirement can get you quick
              response from the supplier
            </h2>
            <p className="formData">Quantity</p>
            <div className="quant">
              <input type="text" />
              <input type="text" placeholder="Piece" readOnly />
            </div>
            <p className="formData">Preferred Brand</p>
            <input type="text" />
            <p className="formData">Total Order Value(Rs)</p>
            <select name="" id="">
              <option value="">Select a Value</option>
              <option value="">Upto 1000</option>
              <option value="">1000 to 2000</option>
              <option value="">100 to 500</option>
              <option value="">2000 to 3000</option>
              <option value="">3000 to 5000</option>
            </select>

            <h3 className="formData">Almost done !</h3>
            <p className="formData">Why do you need this</p>
            <div id="radio">
              <div>
                <input type="radio" name="uses" id="" />
                <span>For Reselling</span>
              </div>
              <div>
                <input type="radio" name="uses" id="" />
                <span>For Business Use</span>
              </div>
              <div>
                <input type="radio" name="uses" id="" />
                <span>For Home Use</span>
              </div>
            </div>
            <p>Requirement Details</p>
            <input
              type="text"
              placeholder="Additional details about your requirement"
            />
            <p>GST Number</p>
            <input type="text" placeholder="enter the gst number" />
            <input type="submit" id="submit" value="Submit" />
          </form>
          <p>Your contact Information {}</p>
        </div>
      </div>
    </div>

 
  );
};
