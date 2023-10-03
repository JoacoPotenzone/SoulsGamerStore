import './itemDetail.css'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({id, name, img, category, description, price, stock}) => {
        return (
            <article className="CardItem1">
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
                        Category: {category}
                    </p>
                    <p className="Info">
                        Description: {description}
                    </p>
                    <p className="Info">
                        Price: U$D{price}
                    </p>
                </section>
                <footer className='ItemFooter'>
                    <ItemCount initial ={1} stock={stock} onAdd={(quantity) => console.log('Cantidad agregada: ', quantity) } />
                </footer>
            </article>
    )
}

export default ItemDetail