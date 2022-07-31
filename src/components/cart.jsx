import { Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';


const Cart = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        handleFetch()
    }, [])
    const handleFetch = () => {
        fetch(`http://localhost:8080/cartData`)
            .then((res) => res.json())
            .then((res) => setData(res))
            .catch((err) => console.log(err))
    }
    const handleDelete = (id) => {
        // fetch(`http://localhost:8080/cartData?id=${id}`,{
        //     method:"DELETE"
        // })
        // .then((res) => res.json())
        // .then((res) => console.log("res" , res))
        // .catch((err) => console.log(err))
        const newData = data.filter((el) => el.id !== id)
        setData(newData)
    }
    let totPrice = 0
    const totalPrice = () => {
        for (let i = 0; i < data.length; i++) {
            totPrice = totPrice + (data[i].data.price) * (data[i].count)
        }
        return totPrice
    }
    totalPrice()
    return (
        <div>
            <h1>Cart Details</h1>
            {
                data.map((el) => (
                    <div className='cartdata'>
                        <div>
                            <h2>{el.data.title}</h2>
                            <p>{el.data.price}</p>
                        </div>
                        <div>
                            <h4>{el.count}</h4>
                        </div>
                        <div>
                            <h3>Rs.{el.data.price * el.count}</h3>
                        </div>
                        
                        <Button onClick={() => handleDelete(el.id)} ><DeleteIcon /></Button>
                    </div>
                ))
            }
            <h3>Total Price : Rs.{totPrice }</h3>
            <Button variant="contained" >Checkout</Button>
        </div>
    )
}

export default Cart