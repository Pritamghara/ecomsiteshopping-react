import React from 'react';
import { Link } from 'react-router-dom';
const Cart = ({ cart, setcart }) => {
  return (
    <>
   
    <div className="container my-5" style={{width:"53%"}}>
      {
      cart.length==0?(
        <>
        <div className="text-center">
          <h1>Empty Cart</h1>
          <Link className='btn btn-warning'>Continue Shopping..</Link>
        </div>
        </>

      ):
      cart.map((product, index) => (
        <div className="card mb-3 my-5" style={{ width: '700px' }} key={index}>
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={product.imgSrc} 
                className="img-fluid rounded-start"
                alt={product.title} 
              />
            </div>
            <div className="col-md-8">
              <div className="card-body text-center">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.description}</p>
                <button className='btn btn-primary mx-3'>{product.price} ₹</button>
                <button  className='btn btn-warning'>BUY NOW</button>
              </div>
            </div>
          </div>
        </div>
      ))}
      
    </div>
    {
        cart.length!=0 &&( <div className="container text-center my-5" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
        <button className='btn btn-warning '>Check out</button>
        <button onClick={()=>setcart("")} className='btn btn-danger mx-5'>Clear cart</button>
  
      </div>)
      }
   

    </>
    

  );
};

export default Cart;
