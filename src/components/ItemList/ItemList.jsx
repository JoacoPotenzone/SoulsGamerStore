import Item from '../Item/Item';
import './itemList.css';
import { products } from '../../mock/asyncMock';

const ItemList = () => {
    return(
        <div className='ListGroup'>
            {products.map(prod => <Item key={prod.id} {...prod} />)}
        </div>
    )
}

export default ItemList