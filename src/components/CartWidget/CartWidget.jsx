import React from 'react';
import {BsCart3} from 'react-icons/bs';
import {useState} from 'react'

const CartWidget = ({children}) => {

    const [item, setItem] = useState(0)
    function suma() {
        setItem(item+1)
    }

    return( 
        <>
        <div>{children}</div>
            <BsCart3 size='2.5rem' color='white'>
                {item}
            </BsCart3>
            <button onClick={suma}>{item}</button>
        </>
        )
}

export default CartWidget;