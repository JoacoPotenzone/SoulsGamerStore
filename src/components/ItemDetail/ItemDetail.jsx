import './itemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import {useState, useContext} from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

const ItemDetail = ({id, name, img, category, stock, description, price}) => {
        const [quantityAdded, setQuantityAdded] = useState('');
        const context = useContext(CartContext)
        console.log(context)

            const onAdd = (quantity) => {
                console.log(`Compraste ${quantity} productos`)
                setQuantityAdded(quantity);
            }
        
        return (
            <article className="CardItem1">
                <header className="Header">
                    <h2 className='Title'>
                        {name}
                    </h2>
                </header>
                <picture >
                    <img src={img} alt={name} className ="ItemImg" width='150px'/>
                </picture>
                <section>
                    <p className="Info1">
                        Category: {category}
                    </p>
                    <p className="Info">
                        Description: {description}
                    </p>
                    <p className="Info1">
                        Price: U$D{price}
                    </p>
                </section>
                <footer className='ItemFooter'>
                    {
                    quantityAdded > 0 ? (
                        <Link to='/cart' className='Option2'> Finalize Purchase</Link>
                    ) : (
                        <ItemCount initial ={1} stock={stock} onAdd={onAdd} />
                    )
                    }  
                </footer>
            </article>
    )
}

export default ItemDetail