import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import { useEffect, useState } from "react";
const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);
  useEffect(() => {
    setTotalAmount(
      cart.reduce((accumulator, currentValue) => accumulator + currentValue.price, 0)
    );
    // eslint-disable-next-line 
  }, [cart]);
  return (
    <div >
      {cart.length > 0 ? (
        <div className="w-[100%] md:w-[60%] flex flex-col p-2 mx-auto">
          <div>
            {cart.map((item, index) => {
              return <CartItem key={item.id} item={item} itemIndex={index}/>;
            })}
          </div>
          <div className="flex flex-col mt-10 lg:w-[100%] md:w-[60%]">
            <div className="flex flex-col justify-center gap-5">
            <p className="font-semibold text-2xl text-green-800 uppercase">Your Cart</p>
            <p className="font-semibold text-5xl text-green-700 mt-1 uppercase">Summary</p>
            <p className="text-gray-700 text-xl font-semibold">Total Items:{cart.length}</p>
            </div>
            <div className="mb-16 flex flex-col space-y-5">
              <p className="font-semibold text-gray-700">Total Amount:<span className="text-black">${totalAmount}</span></p>
              <Link to="/">
                <button className="bg-green-700 w-3/5  p-4 font-semibold text-xl border border-green-700 hover:bg-purple-50 
                rounded-lg hover:text-green-700 text-white transition duration-300 ">Checkout Now</button>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center ml-11 w-screen h-screen">
          <p className="text-gray-700 font-semibold text-xl mb-2">Your cart is empty!</p>
          <Link to="/">
            <button className="bg-green-700 p-3 font-semibold text-xl border border-green-700 hover:bg-purple-50 
                rounded-lg hover:text-green-700 text-white transition duration-300 ">Shop Now</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
