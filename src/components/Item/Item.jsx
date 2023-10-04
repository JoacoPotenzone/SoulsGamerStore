import './item.css';
import { Link} from 'react-router-dom'

const Item = ({id, name, img, price, stock}) => {
    
    return (
        <article className="CardItem">
            <header clasName="Header">
                <h2 className='Title'>
                    {name}
                </h2>
            </header>
            <picture >
                <img src={img} alt={name} className ="ItemImg" width='150px'/>
            </picture>
            <section>
                <p className="Info">
                    Price: U$D{price}
                </p>
                <p className="Info">
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