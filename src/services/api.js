import React, { useEffect, useState } from 'react'

function GetData() {
    const [data,setData] = useState()
    const [error,setError] = useState(null)
    const [loading,setLoading] = useState(false)


    useEffect(() => {

        const fetchData = async () => {

            try {
                setLoading(true)
                setError(null)
                //fetches data 
                const productsResponse = await fetch('https://dummyjson.com/products');
                if(!productsResponse.ok) throw new Error('No data')
                const productsData = await productsResponse.json()


                //set data
                
                setData(productsData)

            } catch (error) {
                setError(error)
            }
            finally {
                setLoading(false)
            }

        }

        fetchData()
       
    },[])

    return {data,loading,error}
}

export default GetData