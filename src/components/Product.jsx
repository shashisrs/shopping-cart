import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import {add,remove} from '../redux/Slices/CartSlice'
const Product = ({ item }) => {
  const { cart } = useSelector((state) => state);

  const dispatch=useDispatch();
 const removeFromCart=()=>{
  dispatch(remove(item.id));
  toast.error("Item removed from cart")
 }
 const addToCart=()=>{
  dispatch(add(item));
  toast.success("Item added to cart")
 }
  return (
    <div className="flex flex-col justify-between items-center
    hover:scale-110 shadow-[0_3px_10px_rgb(0,0,0,0.2)] transition gap-3 p-4 mt-10 rounded-xl duration-300 ease-in hover:shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]">
      <div className="text-gray-900 font-semibold text-lg w-40 truncate mt-1">{item.title.split(" ").slice(0,3).join(" ")+"..."}</div>
      <div className="w-40 text-gray-400 font-normal text-[12px]">{item.description.split(" ").slice(0,10).join(" ")+"..."}</div>
      <div>
        <img className="h-[180px] w-full" src={item.image} alt="item_pic" />
      </div>
      <div className="flex justify-between w-full">
        <p className="text-green-600 font-semibold">${item.price}</p>
        {cart.some((p) => p.id === item.id) ? (
          <button
          className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold
          text-[14px] p-1 px-3 uppercase hover:bg-gray-700 transition duration-300 ease-in hover:text-white"
          onClick={removeFromCart}>Remove Item</button>
        ) : (
          <button
          className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold
          text-[14px] p-1 px-3 uppercase hover:bg-gray-700 transition ease-in duration-300 hover:text-white"
          onClick={addToCart}>Add to Cart</button>
        )}
      </div>
    </div>
  );
};

export default Product;
