import './itemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import {useState, useContext} from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import { products } from '../../mock/asyncMock';

const ItemDetail = () => {
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
              {products.name}
            </h2>
          </header>
          <picture>
            <img src={products.img} alt={products.name} className="ItemImg" width='150px' />
          </picture>
          <section>
            <p className="Info1">
              Category: {products.category}
            </p>
            <p className="Info">
              Description: {products.description}
            </p>
            <p className="Info1">
              Price: U$D{products.price}
            </p>
          </section>
          <footer className='ItemFooter'>
            {quantityAdded > 0 ? (
              <Link to='/cart' className='Option2'> Finalize Purchase</Link>
            ) : (
              <ItemCount initial={1} stock={products.stock} onAdd={onAdd} />
            )}
          </footer>
        </article>
    )
}

export default ItemDetail