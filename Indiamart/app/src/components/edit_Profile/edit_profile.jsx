import "./editprofile.css"
import { useState } from "react"
export const Edit_profile = () => {
    const [editform,seteditform]=useState({
        name:"",
        mobileno:0,
        email:"",
        dateofbirth:"",
        pincode:0,
        city:"",
        state:"",
        country:"",
        houseno:"",
        area:""
    })
    const [err,seterr]=useState(false)

    const handeleditform=(e)=>{
        const {name,value}=e.target
        seteditform({
            ...editform,
            [name]:value
        })
    }
    const handleedit=()=>{
        for(const key in editform){
            if(editform[key]===""||editform[key]===0){
                seterr(true)
                return
            }
        }
        seterr(false)
        console.log(editform)
    }

    return (
        <div className="e-mainpage">
            <div className="e-editmain" >
                <div className="e-wrapper"></div>
                <div className="e-top">
                    <h1>Edit Profile</h1>
                </div>
                <div className="e-boxs">
                    <div className="e-personalbox">

                        <div action="" className="e-personalform">
                            <h2 id="e-personalinfo">Personal Information</h2>
                            <div className="e-name">
                                <h3>Name *</h3>
                                <input type="text" placeholder="Enter Your Name" name="name" onChange={handeleditform} />
                            </div>
                            <div className="e-mobile">
                                <h3>Mobile Number *</h3>
                                <input type="number" placeholder="Enter Your Mobile Number" name="mobileno" onChange={handeleditform} />
                            </div>
                            <div className="e-email">
                                <h3>Email Address *</h3>
                                <input type="email" placeholder="Enter Your Email Address" name="email" onChange={handeleditform} />
                            </div>
                            <div className="e-dob">
                                <h3>Date of Birth *</h3>
                                <input type="date" name="dateofbirth" onChange={handeleditform} />
                            </div>
                        </div>
                        <div action="" className="e-address">
                            <h2 id="e-addressinfo">Address Information</h2>
                            <div className="e-city">
                                <h3>PinCode *</h3>
                                <input type="number" placeholder="Enter Your City PinCode" name="pincode" onChange={handeleditform} />
                                <h3>City *</h3>
                                <input type="text" placeholder="Enter Your City" name="city" onChange={handeleditform} />
                            </div>
                            <div className="e-state">
                                <h3>State *</h3>
                                <input type="text" placeholder="Enter Your State" name="state" onChange={handeleditform} />
                                <h3>Country *</h3>
                                <input type="text" placeholder="Enter Your Country" name="country" onChange={handeleditform} />
                            </div>
                            <div className="e-house">
                                <h3>House Number *</h3>
                                <input type="text" placeholder="Enter Your House Number" name="houseno" onChange={handeleditform} />
                                <h3>Area/Street *</h3>
                                <input type="text" placeholder="Enter Your Area" name="area" onChange={handeleditform} />
                            </div>
                        </div>
                        <div className="e-errorbox" style={{display:err?"flex":"none"}}>
                        <span >*Please fill all details</span>
                        </div>
                       
                        <div className="e-submit">
                            <button onClick={handleedit}>Submit</button>
                        </div>

                    </div>
                </div>

            </div></div>
    )

}