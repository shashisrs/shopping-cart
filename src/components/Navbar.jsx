import {HiShoppingCart} from 'react-icons/hi';
import img from '../assets/logo.png';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Navbar = () => {
  const{cart}=useSelector((state)=>state)
  return <div>
    <nav className='flex justify-between items-center h-20 max-w-6xl mx-auto'>
    <NavLink to="/">
    <img src={img} alt="logo" height="100" width="100"/>
    </NavLink>
      
      <div className='flex ml-5 items-center font-medium text-slate-900 mr-5 space-x-6'>
      <NavLink to="/">
      <p>Home</p>
      </NavLink>
        <NavLink to="/cart">
        <div className='relative '>
        <HiShoppingCart className='text-3xl'/>
      {
        cart.length>0 && 
        <span className='absolute -top-1 right-0 bg-green-600 text-xs w-5 h-5
        flex justify-center items-center rounded-full text-white animate-bounce'>{cart.length}</span>
      }
        </div>
        </NavLink>
        
      </div>
    </nav>
  </div>;
};

export default Navbar;
