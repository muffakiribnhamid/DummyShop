import React from 'react'
import '../App.css'


function ProductCard({thumbnail,title}) {
  return (
   <>
   <div className="main-card-div">

    <div className="card">
    <img className='thumbnail' src={thumbnail} alt="" />
    <h3 className='title'>{title}</h3>
    <button className='btn'>Buy Now</button>
    </div>
   </div>
   </>
  )
}

export default ProductCard