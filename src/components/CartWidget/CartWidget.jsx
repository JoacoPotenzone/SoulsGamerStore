import React, { useContext } from 'react';
import {BsCart3} from 'react-icons/bs';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {

    const {totalQuantity} = useContext(CartContext)


    const visibilityClass = totalQuantity() > 0 ? '' : 'hidden';

    return (
        <Link to='/cart' className={`cart-widget ${visibilityClass}`}>
            <BsCart3 size='2.5rem' color='white'></BsCart3>
            <p>{totalQuantity()}</p>
        </Link>
    )
}

export default CartWidget;