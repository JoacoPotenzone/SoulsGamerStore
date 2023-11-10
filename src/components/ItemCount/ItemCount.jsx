import'./itemCount.css';
import {useState} from 'react';
import { products } from '../../mock/asyncMock';

const ItemCount = ({ initial, onAdd}) =>{
    const [quantity, setQuantity] = useState(initial);

    const increment = () => {
        if(quantity < products.stock){
            setQuantity(quantity+1)
        }
    }

    const decrement = () => {
        if (quantity > 1) {
            setQuantity (quantity -1)
        }
    }
    
    return (
        <div className='Cont'>
            <div className='Controls'>
                <button className="Button" onClick={decrement}>-</button>
                <h4 className='Number'>{quantity}</h4>
                <button className="Button" onClick={increment}>+</button>
            </div>
            <div>
                <button className='Button1' onClick={()=> onAdd(quantity)} disabled={!products.stock}>Add to Cart</button>
            </div>
        </div>
    )
}

export default ItemCount;