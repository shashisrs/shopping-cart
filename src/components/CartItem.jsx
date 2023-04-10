import {MdDelete} from "react-icons/md"
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({item, itemIndex}) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item Removed from Cart");
  }

  return (
    <div>

      <div className=
     "flex flex-col md:flex-row p-0 w-2/3 mt-5 mx-auto md:p-3 justify-between gap-5 items-center border-b-2 border-slate-700"
      >

        <div>
          <img className="h-[180px] w-[162px] object-contain" src={item.image} alt="" />
        </div>
        <div className="">
          <h1 className="font-semibold text-lg">{item.title}</h1>
          <h1 className="w-80 text-gray-900 font-normal text-[16px] mt-5">{item.description.split(" ").slice(0,18).join(" ")+"..."}</h1>
          <div className="flex items-center justify-between ">
          <div>

            <p className="font-bold text-md text-green-600">${item.price}</p>
          </div>
            <div
            onClick={removeFromCart} 
            className="bg-gray-300 rounded-full p-3 mb-11 hover:bg-gray-500 duration transition cursor-pointer">
              <MdDelete/>
            </div>
          </div>

        </div>


      </div>

    </div>
  );
};

export default CartItem;

