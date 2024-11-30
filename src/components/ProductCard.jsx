import React from 'react'
import '../App.css'
import { useNavigate } from 'react-router-dom'


function ProductCard({id,thumbnail,title}) {
    const navigate = useNavigate()

    const handleBuyNow = () => {
        navigate(`/product/${id}`)
    }
  return (
   <>
   <div className="main-card-div">

    <div className="card">
    <img className='thumbnail' src={thumbnail} alt="" />
    <h3 className='title'>{title}</h3>
    <button onClick={handleBuyNow} className='btn'>Buy Now</button>
    </div>
   </div>
   </>
  )
}

export default ProductCard