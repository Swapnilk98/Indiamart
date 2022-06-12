import { useState } from "react";
import "./loginpage.css";
import indiamart_photo from "../../images/indiamart_photo.jpg";
import Cookies from 'js-cookie'
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToken } from "../../Redux/cart/action";
import { useSelector } from "react-redux";

export const LoginPage = () => {
  const token = useSelector((store) => store.cartReducer.token);

    const dispatch =useDispatch();
    const navigate=useNavigate();
  const [show, setshow] = useState(false);
  const [loginform, setloginform] = useState({
    mobileno: 0,
  });
  const [l_err, setlerr] = useState(false);
  const [createform, setcreateform] = useState({
    name: "",
    mobileno: 0,
    email: "",
    dateofbirth: "",
    pincode: 0,
    city: "",
    state: "",
    country: "",
    houseno: "",
    area: "",
  });

  const opencreate = () => {
    setshow(!show);
    console.log(show);
  };

  const handellogin = async () => {
    var phoneno = /^\d{10}$/;
    if (loginform.mobileno.match(phoneno)) {
      console.log(loginform);
      let res = await fetch("https://sagarmart.herokuapp.com/login", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(loginform),
      });
      let data = await res.json();
      console.log(data);
      // document.cookie = `token=${data.token}`;
      if (data.message) {
        setlerr(true);
        return;
      } 
      else {
        // document.cookie = `token=${data.token}`;
        Cookies.set('token', data.token)
        let c=Cookies.get('token')
        dispatch(addToken(c));
        
       
        setlerr(false);

        navigate("/")
        return;
      }
    } else {
      setlerr(true);
      return;
    }
  };
  const handlelogininput = (e) => {
    const { name, value } = e.target;

    setloginform({
      ...loginform,
      [name]: value,
    });
  };
  const handelcreateform = (e) => {
    const { name, value } = e.target;
    setcreateform({
      ...createform,
      [name]: value,
    });
  };
  const handlecreate = async () => {
    var phoneno = /^\d{10}$/;
    var pin = /^\d{6}$/;
    for (const key in createform) {
      if (createform[key] === "" || createform[key] === 0) {
        setlerr(true);
        console.log("empty");
        return;
      }
    }
    if (
      !(createform.mobileno.match(phoneno) && createform.pincode.match(pin))
    ) {
      console.log("not");
      setlerr(true);
      return;
    } else {
      let res = await fetch("https://sagarmart.herokuapp.com/register", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(createform),
      });
      let data = await res.json();
     
      if (data.message) {
        setlerr(true);
        return;
      } else {
        // document.cookie = `token=${data.token}`;
        Cookies.set('token', data.token)
        let c=Cookies.get('token')
        dispatch(addToken(c));
        
        
        setlerr(false);
        navigate("/")
        return;
      }
    }
  };

  return (
    <div
      className="loginandcreate"
      style={{
        position: !show ? "fixed" : "static",
        backgroundImage: !show ? `url(${indiamart_photo})` : "none",
      }}
    >
      <div className="loginmain" style={{ display: !show ? "block" : "none" }}>
        <div className="loginpopup">
          <div className="loginform">
            <img
              src="//utils.imimg.com/header/gifs/3.png"
              className="close"
              onClick={()=>{
                navigate("/")
              }}
            ></img>
            <div className="step1">
              <h2>Sign In</h2>
            </div>
            <div className="step2">
              <div className="l-form">
                <h3>Mobile Number</h3>
                <div className="l-formmain">
                  <div className="countrydrop"></div>
                  <div className="countryno">+91</div>
                  <input
                    type="number"
                    className="mobile"
                    name="mobileno"
                    placeholder="Enter Your Mobile Number"
                    onChange={handlelogininput}
                  />
                </div>
                <div
                  className="l-errorbox"
                  style={{ display: l_err ? "flex" : "none" }}
                >
                  <span>
                    *Please enter correct mobile number or mobile number not
                    exist
                  </span>
                </div>
                <div className="l-submit">
                  <button id="submit" onClick={handellogin}>
                    Submit
                  </button>
                </div>
                <p className="newuser">
                  New User? <button onClick={opencreate}>Create Account</button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* style={{ color: darkMode ? "white" : "" }} */}
      <div className="createmain" style={{ display: show ? "block" : "none" }}>
        <div className="c-wrapper"></div>
        <div className="c-top">
          <h1>Create Account</h1>
        </div>

        <div className="c-boxs">
          <div className="personalbox">
            <div action="" className="personalform">
              <h2 id="personalinfo">Personal Information</h2>
              <div className="name">
                <h3>Name *</h3>
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  name="name"
                  onChange={handelcreateform}
                />
              </div>
              <div className="mobile">
                <h3>Mobile Number *</h3>
                <input
                  type="number"
                  placeholder="Enter Your Mobile Number"
                  name="mobileno"
                  onChange={handelcreateform}
                />
              </div>
              <div className="email">
                <h3>Email Address *</h3>
                <input
                  type="email"
                  placeholder="Enter Your Email Address"
                  name="email"
                  onChange={handelcreateform}
                />
              </div>
              <div className="dob">
                <h3>Date of Birth *</h3>
                <input
                  type="date"
                  name="dateofbirth"
                  onChange={handelcreateform}
                />
              </div>
            </div>
            <div action="" className="c-address">
              <h2 id="addressinfo">Address Information</h2>
              <div className="city">
                <h3>PinCode *</h3>
                <input
                  type="number"
                  placeholder="Enter Your City PinCode"
                  name="pincode"
                  onChange={handelcreateform}
                />
                <h3>City *</h3>
                <input
                  type="text"
                  placeholder="Enter Your City"
                  name="city"
                  onChange={handelcreateform}
                />
              </div>
              <div className="state">
                <h3>State *</h3>
                <input
                  type="text"
                  placeholder="Enter Your State"
                  name="state"
                  onChange={handelcreateform}
                />
                <h3>Country *</h3>
                <input
                  type="text"
                  placeholder="Enter Your Country"
                  name="country"
                  onChange={handelcreateform}
                />
              </div>
              <div className="house">
                <h3>House Number *</h3>
                <input
                  type="text"
                  placeholder="Enter Your House Number"
                  name="houseno"
                  onChange={handelcreateform}
                />
                <h3>Area/Street *</h3>
                <input
                  type="text"
                  placeholder="Enter Your Area"
                  name="area"
                  onChange={handelcreateform}
                />
              </div>
            </div>
            <div
              className="l-errorbox"
              style={{ display: l_err ? "flex" : "none" }}
            >
              <span>*Please fill all the details</span>
            </div>
            <div className="c-submit">
              <button onClick={handlecreate}>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
