import React from "react";
import "./style.scss";
import { Rating } from "react-simple-star-rating";
import Button from "../Button";

interface CardProps {
  id: number;
  title: string;
  image: string;
  category: string;
  rate: number;
  count: number;
  price: number;
  onClick: () => void;
}

const CardCart: React.FC<CardProps> = ({
  category = "",
  id = 0,
  image = "",
  price = 1,
  rate = 1,
  count = 1,
  title = "",
  onClick,
}) => {
  const s = () => {
    for (let index = 1; index === count; index++) {
      <>AHMED</>;
    }
  };

  return (
    <div className="card-cart">
      <div className="image">
        <img src={image} alt={title} />
      </div>
      <div className="detals">
        <h3>{title.length >= 30 ? title.substring(0, 30) + "..." : title}</h3>
        <p className="cat">Category : {category}</p>
        <Rating readonly initialValue={rate} size={15} />
        <span>{rate}</span>
        <p className="price">{price} EGY</p>
        <div className="count">
          <select name="" id="">
            <option value="1">1</option>
            <option value="1">2</option>
          </select>
        </div>
      </div>
      <div className="action">
        <Button text="Delete" onClick={onClick} />
      </div>
    </div>
  );
};

export default CardCart;
