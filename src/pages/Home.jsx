import React from 'react'
import GetData from '../services/api'
import ProductCard from '../components/ProductCard'

function Home() {
    const {data,loading,error} = GetData()
  return (
    <div>
        {(
            data.map((products) => {
                <ProductCard />
            })
        )}
    </div>
  )
}

export default Home