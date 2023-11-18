import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { items } from './Data'
import Product from './product'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Productdetail = (cart, setcart) => {
  const { id } = useParams()
  const [product, setproduct] = useState({})
  const [relatedproduct, setrelatetedproduct] = useState([])

  useEffect(() => {
    const filterproduct = items.filter((product) => product.id == id)

    // console.log(filterproduct)
    setproduct(filterproduct[0])
    const relatedproduct = items.filter((p) => p.category === product.category)

    setrelatetedproduct(relatedproduct)
  }, [id, product.category])
  const addtocart = (id, price, title, description, imgSrc) => {
    const obj = {
      id, price, title, description, imgSrc
    }
    console.log(cart)
    setcart([...cart, obj])

    
    toast.success('your Item is added', {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  }


  return (
    // <div>productdetail-{id}</div>
    <>

      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

      <div className="container con">
        <div className="img">
          <img src={product.imgSrc} alt="" />

        </div>
        <div className='text-center'>
          <h1 className="card-title">{product.title}</h1>
          <p className="card-text">{product.description}</p>
          <button className='btn btn-primary mx-3'>{product.price} ₹</button>
          {/* <button className='btn btn-primary mx-3'>{product.price} ₹</button> */}
          <button onClick={() => addtocart(product.id, product.price, product.title, product.description, product.imgSrc)} className='btn btn-warning'>ADD TO CART</button>
        </div>
      </div>
      <h1 className='text-center' >Related Products</h1>
      <Product cart={cart} setcart={setcart} items={relatedproduct} />
    </>

  )
}

export default Productdetail