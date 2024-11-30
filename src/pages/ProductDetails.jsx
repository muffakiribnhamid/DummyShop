import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function ProductDetails() {
    const { id } = useParams()
    const [title,setTitle] = useState('')
    const [description,setDescription] = useState('')
    const [price,setPrice] = useState('')
    const [image,setImage] = useState('img')
    const [rating,setRating] = useState('img')

        useEffect(() => {
            const setData = async () => {
               try {
                const response = await fetch(`https://dummyjson.com/products/${id}`);
                if (!response.ok) throw new Error('Failed to fetch products');
                const data = await response.json();
                setTitle(data.title);
                setDescription(data.description)
                setPrice(data.price)
                setImage(data.images)
                setRating(data.rating)
                
                
                
               }
                catch (error) {
                    console.log(error);
            
                
               }
               finally {
                console.log('done');
                
               }
            }

            setData()

        })
    
  return (
    <>
    <div className="main-details">
        <div className="left-product">
            <img src={image} alt="" />
            
        </div>
        <div className="right-details">
            <h1>{title}</h1>
            <p>{description}</p>
            <div className="inner-details">
            <h3>${price}</h3>
            <h2 className="rating">⭐{rating}</h2>

            </div>
        </div>

    </div>
    </>
  )
}

export default ProductDetails