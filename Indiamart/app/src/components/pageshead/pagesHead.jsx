import "./pagesHead.css";

export const Producthead = ({ productData, type }) => {
  return (
    <div className="pageMainDiv">
      <h2 className="pageHead">{type}</h2>
      <h5 className="pageInfo"></h5> 
      <div className="productDataDiv">
        {productData.map((e) => {
          return (
            <div className="singleProductDiv" key={e.id}>
              <img className="singleProductImg" src={e.image} />
              <p className="singleProductHead">{e.name}</p>
              <p className="singleProductAskPrice">Ask Price</p>
            </div>
          );
        })}
      </div>
    </div>
    
  );
};
