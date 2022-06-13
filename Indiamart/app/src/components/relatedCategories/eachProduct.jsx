import "./relatedCategories.css";

export const EachProductCategories = ({ el }) => {
  return (
    <div className="eachProduct">
      <img src={el.image} alt="" />
      <h3>{el.name}</h3>
    </div>
  );
};
