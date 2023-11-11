import { createContext, useState} from 'react';

export const CartContext = createContext()

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])

    console.log(cart)
    const addItem = (item, quantity) =>{

        if(isInCart(item.id)){
            setCart(cart.map((product)=>{
                if(product.id === item.id){
                    return({...product, quantity : product.quantity + quantity})
                }else{
                    return product
                }
            }))
        }else{
            setCart([...cart, {...item, quantity}])
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

    const totalQuantity = () => {
        return cart.reduce((totalQuant, item) => totalQuant + item.quantity, 0)
    }

    return(
        <CartContext.Provider value={{cart, addItem, removeItem, clearCart, totalQuantity}}>
            {children}
        </CartContext.Provider>
    )
}
