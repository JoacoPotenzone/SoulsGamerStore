import {useState, useEffect} from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import {useParams} from 'react-router-dom'
import './ItemDetailContainer.css'
import { db } from '../../firebase/firebase';
import { collection, doc, getDoc } from 'firebase/firestore';


const ItemDetailContainer = () => {
    const [products, setProduct] = useState({})
    const [loader, setLoader] = useState(false)

    const { itemId } = useParams()

    useEffect(() => {
        setLoader(true)

        const docRef = doc(db, 'products', itemId)

        getDoc(docRef)
            .then(response => {
                const data = response.data()
                const productsAdapted = {id: response.id, ...data}
                setProduct(productsAdapted)
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
                setLoader(false)
            })
    }, [itemId])
return(
    <div className='ItemDetailContainer'>
       { loader? <p>...Cargando</p> :<ItemDetail {...products} />}
    </div>
)
}

export default ItemDetailContainer