import styled from "styled-components";
import { Link } from "react-router-dom";

const ProductSingleCard = styled.div`
  border: 1px solid #d7d1d17d;
  padding: 20px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: auto;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }

  & img {
    height: 250px;
    margin-bottom: 20px;
  }
  & h2 {
    color: navy;
    margin-bottom: 5px;
  }
  & h2:hover {
    border-bottom: 2px solid navy;
  }

  & p {
    color: #a9a0a0;
    margin: 5px 0px;
  }
  & P:hover {
    color: black;
  }

  & a {
    color: teal;
    font-weight: bold;
    text-decoration: none;
    margin-bottom: 10px;
    font-size: 1.1rem;
  }

  & a:hover {
    border-bottom: 2px solid teal;
  }
`;

export const ProductCard = ({ el }) => {
  return (
    <ProductSingleCard key={el.id}>
      <img src={el.image} alt="" />
      <h2>{el.name}</h2>
      <p>{el.para1}</p>
      <p>{el.para2}</p>
      <p>{el.para3}</p>
      <Link to={`/product/${el.category}`}>View Details &gt;</Link>
    </ProductSingleCard>
  );
};
