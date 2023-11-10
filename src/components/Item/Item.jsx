import './item.css';
import {Link} from 'react-router-dom'

const Item = (products) => {  


    
    return (
        <article className="CardItem">
            <header className="Header">
                <h2 className='Title'>
                    {products.name}
                </h2>
            </header>
            <picture >
                <img src={products.img} alt={products.name} className ="ItemImg" width='150px'/>
            </picture>
            <section>
                <p className="InfoItem">
                    Price: U$D{products.price}
                </p>
                <p className="InfoItem">
                    Stock: {products.stock}
                </p>
            </section>
            <footer className='ItemFooter'>
                <Link to={`/item/${products.id}`} className='Option2'>Details</Link>
            </footer>
        </article>
    )
}

export default Item