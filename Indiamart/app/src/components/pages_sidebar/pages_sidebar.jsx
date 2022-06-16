import "./pages_sidebar.css"
import { useState } from "react"
import  up from "./up.png"
import down from "./down.png"
import { useNavigate } from "react-router-dom";
export const Sidebar=()=>{
    const [sidebar,setSidebar]=useState({ Makeup:false,Lipstick:false,LipsProducts:false,BleachCream:false,Scrubs:false,EyesProducts:false,LipCare:false,TraditionalItems:false})
    const navigate = useNavigate();
    
    const updateSidebar=(data)=>{
      setSidebar({
            ...sidebar,
            [data.id]:!sidebar[data.id]
        })
    }
return <div className="sidebarDiv">
         <div className="sidebarHead">Products & Services</div>
  
            <div  id="Makeup" className="categorysMainDiv"  onClick={(e)=>updateSidebar(e.target)}>
                <div className="sidebarDivs">
                    <div>
                         <p onClick={()=>navigate("/product/makeup")} className="sidebarPageHead">Makeup</p> 
                         {sidebar.Makeup===false ? <p onClick={()=>navigate("/product/Makeup")} className="sidebarAvailable">4 products available</p>:null}
                   </div> 
                     {sidebar.Makeup===true ? <img id="Makeup"  className="selectImg" src={up}/>:<img id="Makeup" className="selectImg" src={down}/>}
               </div>
                     {sidebar.Makeup===true ? <div className="categoryDiv">
                                               <p onClick={()=>navigate("/product/makeup")}>Foundation</p>
                                               <p onClick={()=>navigate("/product/makeup")}>Compact</p>
                                               <p onClick={()=>navigate("/product/makeup")}>Pan Cake Foundation</p>
                                               <p onClick={()=>navigate("/product/makeup")}>Pan Stick Foundation</p>
                                    </div>:null}
          </div>
          <div  id="Lipstick" className="categorysMainDiv"  onClick={(e)=>updateSidebar(e.target)}>
               <div className="sidebarDivs">
                  <div>
                          <p onClick={()=>navigate("/product/lipstick")} className="sidebarPageHead">Lipstick</p> 
                          {sidebar.Lipstick===false ? <p onClick={()=>navigate("/product/lipstick")} className="sidebarAvailable">9 products available</p>:null}
                  </div> 
                      {sidebar.Lipstick===true ? <img id="Lipstick"  className="selectImg" src={up}/>:<img id="Lipstick" className="selectImg" src={down}/>}
               </div>
                     {sidebar.Lipstick===true ? <div className="categoryDiv">
                                            <p onClick={()=>navigate("/product/lipstick")}>Cerise Pink Lipstick</p>
                                            <p onClick={()=>navigate("/product/lipstick")}>Coral Red Lipstick</p>
                                            <p onClick={()=>navigate("/product/lipstick")}>Desert Rose Lipstick</p>
                                            <p onClick={()=>navigate("/product/lipstick")}>Eternal Red Lipstick</p>
                                            <p onClick={()=>navigate("/product/lipstick")}> Muddy Pink Lipstick</p>
                                            <p onClick={()=>navigate("/product/lipstick")}>Pretty Purple Lipstick</p>
                                            <p onClick={()=>navigate("/product/lipstick")}>Radient Red Lipstick</p>
                                            <p onClick={()=>navigate("/product/lipstick")}>Baked Brick Lipstick</p> 
                                            </div>:null}
            </div>
        <div  id="LipsProducts" className="categorysMainDiv"  onClick={(e)=>updateSidebar(e.target)}>
            <div className="sidebarDivs">
            <div>
                <p onClick={()=>navigate("/product/lips-products")} className="sidebarPageHead">Lips Products</p> 
                {sidebar.LipsProducts===false ?<p onClick={()=>navigate("/product/lips-products")} className="sidebarAvailable">3 products available</p>:null}
            </div> 
            {sidebar.LipsProducts===true ? <img id="LipsProducts"  className="selectImg" src={up}/>:<img id="LipsProducts" className="selectImg" src={down}/>}
            </div>
            {sidebar.LipsProducts===true ? <div className="categoryDiv">
            <p onClick={()=>navigate("/product/lips-products")}>Lip Gloss</p>
            <p onClick={()=>navigate("/product/lips-products")}>Lip Stick</p>
            <p onClick={()=>navigate("/product/lips-products")}>Lip Liner</p>
        </div>:null}
            </div>
       
            <div  id="BleachCream" className="categorysMainDiv"  onClick={(e)=>updateSidebar(e.target)}>
            <div className="sidebarDivs">
            <div>
                <p onClick={()=>navigate("/product/bleach-cream")} className="sidebarPageHead">Bleach Cream</p> 
                {sidebar.BleachCream===false ?<p onClick={()=>navigate("/product/bleach-cream")} className="sidebarAvailable">3 products available</p>:null}
            </div> 
            {sidebar.BleachCream===true ? <img id="BleachCream"  className="selectImg" src={up}/>:<img id="BleachCream" className="selectImg" src={down}/>}
            </div>
            {sidebar.BleachCream===true ? <div className="categoryDiv">
            <p onClick={()=>navigate("/product/bleach-cream")}>Fruit Bleach</p>
            <p onClick={()=>navigate("/product/bleach-cream")}>Gold Bleach</p>
            <p onClick={()=>navigate("/product/bleach-cream")}>Personal Bleach</p>
        </div>:null}
            </div>
       
            <div  id="Scrubs" className="categorysMainDiv"  onClick={(e)=>updateSidebar(e.target)}>
            <div className="sidebarDivs">
            <div>
                <p onClick={()=>navigate("/product/scrubs")} className="sidebarPageHead">Scrubs</p> 
               {sidebar.Scrubs===false ? <p className="sidebarAvailable">3 products available</p>:null}
            </div> 
            {sidebar.Scrubs===true ? <img id="Scrubs"  className="selectImg" src={up}/>:<img id="Scrubs" className="selectImg" src={down}/>}
            </div>
            {sidebar.Scrubs===true ? <div className="categoryDiv">
            <p onClick={()=>navigate("/product/scrubs")} >Fairness Scrub</p>
            <p onClick={()=>navigate("/product/scrubs")} >Mix Fruit Scrub</p>
            <p onClick={()=>navigate("/product/scrubs")} >Facial Scrub-Walnut & Apricot</p>
        </div>:null}
            </div>
       
            <div  id="EyesProducts" className="categorysMainDiv"  onClick={(e)=>updateSidebar(e.target)}>
            <div className="sidebarDivs">
            <div>
                <p onClick={()=>navigate("/product/eyes-products")}  className="sidebarPageHead">Eyes Products</p> 
                {sidebar.EyesProducts===false ? <p className="sidebarAvailable">3 products available</p>:null}
            </div> 
            {sidebar.EyesProducts===true ? <img id="EyesProducts"  className="selectImg" src={up}/>:<img id="EyesProducts" className="selectImg" src={down}/>}
            </div>
            {sidebar.EyesProducts===true ? <div className="categoryDiv">
           <p onClick={()=>navigate("/product/eyes-products")}>Mascara</p>
           <p onClick={()=>navigate("/product/eyes-products")}>Eye Shadow</p>
           <p onClick={()=>navigate("/product/eyes-products")}>Eye Liner</p>
        </div>:null}
            </div>

            <div  id="LipCare" className="categorysMainDiv"  onClick={(e)=>updateSidebar(e.target)}>
            <div className="sidebarDivs">
            <div>
                <p onClick={()=>navigate("/product/lipcare")} className="sidebarPageHead">LipCare</p> 
                {sidebar.LipCare===false ? <p className="sidebarAvailable">2 products available</p>:null}
            </div> 
            {sidebar.LipCare===true ? <img id="LipCare"  className="selectImg" src={up}/>:<img id="LipCare" className="selectImg" src={down}/>}
            </div>
            {sidebar.LipCare===true ? <div className="categoryDiv">
            <p onClick={()=>navigate("/product/lipcare")}>Lip Balm</p>
            <p onClick={()=>navigate("/product/lipcare")}>Lip Gaurd</p>
        </div>:null}
            </div>

            <div  id="TraditionalItems" className="categorysMainDiv"  onClick={(e)=>updateSidebar(e.target)}>
            <div className="sidebarDivs">
            <div>
                <p onClick={()=>navigate("/product/traditional-items")} className="sidebarPageHead">  Traditional Items</p> 
               {sidebar.TraditionalItems===false ? <p className="sidebarAvailable">2 products available</p>:null}
            </div> 
            {sidebar.TraditionalItems===true ? <img id="TraditionalItems"  className="selectImg" src={up}/>:<img id="TraditionalItems" className="selectImg" src={down}/>}
            </div>
            {sidebar.TraditionalItems===true ? <div className="categoryDiv">
            <p  onClick={()=>navigate("/product/traditional-items")}>Sindoor</p>
            <p  onClick={()=>navigate("/product/traditional-items")}>Kajal</p>
        </div>:null}
            </div>
          
       <div className="sidebarViewAll"><h3>+View All</h3></div>
    </div>
}