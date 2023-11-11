import {useState, useEffect} from 'react';
import ItemList from '../ItemList/ItemList';
import {useParams} from 'react-router-dom';
import React from 'react';
import './itemListContainer.css'
import { collection, getDocs, where, query } from 'firebase/firestore';
import { db } from '../../firebase/firebase';

const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState ([])
    const [loading, setLoading] = useState(false)
    const {categoryId} = useParams()

    useEffect(()=>{
        setLoading(true)
        const collecProducts = categoryId ? query(collection(db, "products"), where("category", "==", categoryId)):collection(db, "products")
        getDocs(collecProducts)
        .then((res)=> {
            const list = res.docs.map((products)=>{
                return{
                    id:products.id,
                    ...products.data()
                }
            })
            console.log(list)
            setProducts(list)
        })
        .catch((error)=> console.log(error))
        .finally(()=> setLoading(false))
    },[categoryId])

    return (
        <div>
            { 
            loading ? <p>Cargando...</p>
            : <div>
            <h1>{greeting}</h1>
            <h2>Categories</h2>
            <ItemList products={products}></ItemList>
            </div>
            }
        </div>
    )
} 


export default ItemListContainer