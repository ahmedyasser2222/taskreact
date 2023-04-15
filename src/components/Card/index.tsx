import React from "react";
import { Rating } from "react-simple-star-rating";
import "./style.scss";
import Button from "../Button";
import { increment } from '../../redux/slices/cart';
import {  useDispatch } from 'react-redux'

interface CardProps {
  id: number;
  title: string;
  image: string;
  category: string;
  rate: number;
  count?: number;
  price: number;
}

const Card: React.FC<CardProps> = ({
  category = "",
  id = 0,
  image = "",
  price = 1,
  rate = 1,
  title = "",
  count,
}) => {
  const dispatch = useDispatch()

  return (
    <div className="card">
      <div className="image">
        <img src={image} alt={title} />
      </div>
      <div className="details">
        <h3>{title.length >= 20 ? title.substring(0, 20) + "..." : title}</h3>
        <p className="category">Category : {category} </p>
        <Rating readonly initialValue={rate} size={15} />
        <span>{rate}</span>
        <p className="price">
          {price} <span>EGY</span>
        </p>
      </div>
      <div className="btn">
        <Button text="Add to Cart"  onClick={()=>dispatch(increment())} />
      </div>
    </div>
  );
};

export default Card;
