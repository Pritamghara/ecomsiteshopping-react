import React, { useState } from 'react';
import { items } from './Data';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaCartShopping } from "react-icons/fa6";



const Navbar = ({setdata,cart}) => {
  // console.log(useLocation())
  const location=useLocation()
  const navigate=useNavigate();
  const [searchterm, setsearchterm] = useState("")

  const filterbycategory = (category) => {
    const filteredData = items.filter((product) => product.category === category);
   
  
    setdata(filteredData);
  }
  const filterbyprice=(price)=>{
    const element=items.filter((product)=>product.price>=price)
    setdata(element)
  }
  const handlesubmit=(e)=>{
    e.preventDefault();
    navigate(`/search/${searchterm}`)
    setsearchterm("")


  }
  
  return (
    <header className='sticky-top'>
      <div className="nav-bar">
        <Link to={'/'} className="brand">E-Cart</Link>
        <form onSubmit={handlesubmit} className="search-bar">
          <input value={searchterm} onChange={(e)=>setsearchterm(e.target.value)} type="text" placeholder='search products' />
        </form>
        <Link to={'/cart'} className="cart">
        <button type="button" className="btn btn-primary position-relative">
        <FaCartShopping  style={{fontSize:"1.5rem"}}/>
  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    {cart?.length}
    <span className="visually-hidden">unread messages</span>
  </span>
</button>
        </Link>
      </div>
      {
        location.pathname=='/'&&(<div className="nav-bar-wrapper">
        <div className="items">Filter by {"->"}</div>
        <div onClick={()=>setdata(items)} className="items">No Filter</div>
        <div onClick={()=>filterbycategory('mobiles')}
         className="items">Mobiles</div>
        <div onClick={()=>filterbycategory('laptops')} className="items">Laptops</div>
        <div onClick={()=>filterbycategory('tablets')} className="items">Tablets</div>
        <div onClick={()=>filterbyprice(29999)} className="items">{">="}29999</div>
        <div onClick={()=>filterbyprice(49999)} className="items">{">="}49999</div>
        <div onClick={()=>filterbyprice(69999)} className="items">{">="}69999</div>
        <div onClick={()=>filterbyprice(89999)} className="items">{">="}89999</div>
        
      </div>)
      }
      
    </header>
  );
}

export default Navbar;
