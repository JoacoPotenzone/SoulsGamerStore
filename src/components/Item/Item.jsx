import './item.css';
import { Link} from 'react-router-dom'
import {products} from '../../mock/asyncMock'

const Item = ({id, name, img, price, stock}) => {  
    
    return (
        <article className="CardItem">
            <header className="Header">
                <h2 className='Title'>
                    {name}
                </h2>
            </header>
            <picture >
                <img src={img} alt={name} className ="ItemImg" width='150px'/>
            </picture>
            <section>
                <p className="InfoItem">
                    Price: U$D{price}
                </p>
                <p className="InfoItem">
                    Stock: {stock}
                </p>
            </section>
            <footer className='ItemFooter'>
                <Link to={`/item/${id}`} className='Option2'>Details</Link>
            </footer>
        </article>
    )
}

export default Item