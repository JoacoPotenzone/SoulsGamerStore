import {useState, useEffect} from 'react';
import {getProducts, getProductsByCategory} from '../../asyncMock';
import ItemList from '../ItemList/ItemList';
import {useParams} from 'react-router-dom';
import React from 'react';
import { NavLink} from 'react-router-dom'
import './itemListContainer.css'

const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState ([])

    const {categoryId} = useParams()

    useEffect(()=>{
        const asynFunc = categoryId ? getProductsByCategory : getProducts

        asynFunc(categoryId)
            .then(response => {
                setProducts(response);
            })
            .catch(error => {
                console.error(error)
            })
    }, [categoryId])

    return (
        <div>
            <h1>{greeting}</h1>
            <h2>Categories</h2>
            <div className="Categories">
                <NavLink to={`/category/videogames`} className={({isActive}) => isActive ? 'ActiveOption1' : 'Option1'}><h3>VideoGames</h3></NavLink>
                <NavLink to={`/category/console`} className={({isActive}) => isActive ? 'ActiveOption1' : 'Option1'}><h3>Console</h3></NavLink>
                <NavLink to={`/category/accesories`} className={({isActive}) => isActive ? 'ActiveOption1' : 'Option1'}><h3>Accesories</h3></NavLink>
            </div>
            <ItemList products={products}></ItemList>
        </div>
    )
} 


export default ItemListContainer