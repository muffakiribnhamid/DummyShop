import React, { useContext, useEffect } from 'react'
import ProductCard from '../components/ProductCard'
import { useProduct } from '../context/ProductContext'
import { data } from 'autoprefixer';
import '../App.css'
import Header from '../components/Header';


function Home() {
    const { productData, loading, error } = useProduct(); // Access context


    if(loading) return <div>Loading</div>
    if(error) return <div>Error</div>
    
  return (
    <>
    <Header/>
    <div className='main-screen'>
       {productData && productData.length > 0 ? (
        productData.map((data) => (
            <ProductCard
            key={data.id}
            id={data.id}
            thumbnail={data.thumbnail}
            title={data.title}
            />
        ))
       ): (
        <div>No Products</div>
       )}
    </div>
    </>
    
  )
}

export default Home