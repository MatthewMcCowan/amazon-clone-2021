import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";
import NumberFormat from "react-number-format";
import { useDispatch } from "react-redux";
import { addToBasket, removeFromBasket } from "../slices/basketSlice";

const CheckoutProduct = ({
  id,
  title,
  price,
  rating,
  description,
  category,
  image,
  hasPrime,
}) => {
  const dispatch = useDispatch();

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

  const removeItemFromBasket = () => {
    dispatch(removeFromBasket({ id }));
  };
  return (
    <div className="flex flex-col space-y-10 md:grid md:grid-cols-5">
      <Image src={image} height={200} width={200} objectFit="contain" />
      <div className="col-span-3 mx-5 bg-gray-100 p-5">
        <p>{title}</p>
        <div className="flex items-center">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon key={i} className="h-5 text-yellow-500" />
            ))}
        </div>
        <p className="text-xs my-2 line-clamp-3">{description}</p>
        <div className="">
          <NumberFormat
            value={price}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
          />
        </div>
        {hasPrime && (
          <div className="flex items-center divide-x divide-gray-600 mt-5">
            <img
              loading="lazy"
              src="https://links.papareact.com/fdw"
              alt=""
              className="w-12 pr-5"
            />
            <p className="pl-5 text-xs text-gray-500">FREE Next-day Deliver</p>
          </div>
        )}
      </div>
      <div className="flex flex-col space-y-3 justify-end ">
        <button onClick={addItemToCart} className="button">
          Add Quantity
        </button>
        <button onClick={removeItemFromBasket} className="button">
          Remove From Basket
        </button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
