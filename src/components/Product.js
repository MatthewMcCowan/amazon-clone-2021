import Image from "next/image";
import { StarIcon } from "@heroicons/react/solid";
import { useState } from "react";
import NumberFormat from "react-number-format";
import { useDispatch } from "react-redux";
import { addToBasket } from "../slices/basketSlice";

const MAX_RATING = 5;
const MIN_RATING = 1;

const Product = ({ id, title, price, description, category, image }) => {
  const dispatch = useDispatch();
  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1) + MIN_RATING)
  );
  const [hasPrime] = useState(Math.random() > 0.5);

  const addItemToCart = () => {
    const product = {
      id,
      title,
      price,
      rating,
      description,
      category,
      image,
      hasPrime,
    };

    dispatch(addToBasket(product));
  };
  return (
    <div className="relative flex flex-col bg-white m-5 z-30 p-10">
      <p className="absolute top-2 right-2 uppercase text-xs italic text-gray-400">
        {category}
      </p>
      <Image src={image} height={200} width={200} objectFit="contain" />
      <h4 className="my-5 text-xl">{title}</h4>
      <div className="flex items-center">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <StarIcon key={i} className="h-5 text-yellow-500" />
          ))}
      </div>
      <p className="text-xs my-2 line-clamp-2">{description}</p>
      <div className="mb-5">
        <NumberFormat
          decimalScale={2}
          value={price}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$"}
        />
      </div>

      {hasPrime && (
        <div className="flex items-center divide-x divide-gray-600">
          <img
            src="https://links.papareact.com/fdw"
            alt=""
            className="pr-5 w-16"
          />
          <p className="pl-5 text-xs text-gray-500">FREE Next-day Deliver</p>
        </div>
      )}

      <button onClick={addItemToCart} className="mt-auto button">
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
