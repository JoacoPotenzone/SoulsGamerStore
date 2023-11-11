import { createContext, useState} from 'react';

export const CartContext = createContext()

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])

    console.log(cart)

    const addItem = (item, quantity) => {
        if(!isInCart(item.id) & quantity!==0) {
            setCart(prev => [...prev, {...item, quantity}])
        }
        else {
            console.log('El producto ya fue agregado')
        }
    }
    
    const removeItem = (id) => {
        setCart(cart.filter((item)=> item.id !== id))
    }
    
    const clearCart = () => {
        setCart([])
    }

    const isInCart = (id) => {
        return cart.some((item) => item.id === id)
    }

    const cartTotal = () => {
        return cart.reduce((total, item) => total + (item.quantity * item.price), 0)
    }

    const totalQuantity = () => {
        return cart.reduce((totalQuant, item) => totalQuant + item.quantity, 0)
    }

    return(
        <CartContext.Provider value={{cart, addItem, removeItem, clearCart, totalQuantity, cartTotal}}>
            {children}
        </CartContext.Provider>
    )
}
