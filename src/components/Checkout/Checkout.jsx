import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import React, { useState, useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { db } from '../../firebase/firebase'

const Checkout = () =>{
    const [user, setUser] = useState({})

    const[validateEmail, setValidateEmail] = useState('')
    const[orderId, setOrderId] = useState('')

    const{cart, cartTotal, clearCart }= useContext(CartContext)

    const dataUser = (e) =>{
        setUser({
            ...user,
            [e.target.name]:e.target.value
        })
    }
    const finishPurchase = (e) =>{
        e.preventDefault()
        if(!user.name && !user.mail){
            alert('Complete this input please.')
        }else{
            let order ={
                user,
                item:cart,
                total:cartTotal(),
                date:serverTimestamp()
            }
            const sells = collection(db, "orders")
            addDoc(sells, order)
            .then((res)=> {
                setOrderId(res.id)
                clearCart()
            })
            .catch((error)=> console.log(error))
        }
    }

    console.log(user)
    return(
        <div>
            {orderId !== ''
            ? <div>
                <h2>¡Congratulations! Your order was generated succesfully.</h2>
                <h4>Your purchase id is: <strong>{orderId}</strong></h4>
            </div>
            : <div>
                <h2>Finish purchase</h2>
                <h4>Please complete with your information</h4>
                    <form onSubmit={finishPurchase}>
                        <div className='mb-3'>
                            <label>Complete Name</label>
                            <input type="text" placeholder='Name & Surname'onChange={dataUser} name='name' className='form-control' required/>
                        </div>
                        <div className='mb-3'>
                            <label>Phone Number</label>
                            <input type="number" placeholder='+xx xxxx-xxxx'onChange={dataUser}  name='phone' className='form-control' />
                        </div>
                        <div className='mb-3'>
                            <label>Email</label>
                            <input type="email" placeholder='email@email.com'onChange={dataUser}  name='mail' className='form-control' required/>
                        </div>
                        <div className='mb-3'>
                            <label>Validate Email</label>
                            <input type="email" placeholder='email@email.com' onChange={((e)=>setValidateEmail(e.target.value))} name='mail' className='form-control' required />
                        </div>
                        <button className='btn btn-dark' type='submit' disabled={validateEmail !== user.mail}>Finalize Purchase</button>
                    </form>
                </div> }
        </div>
    )
}

export default Checkout