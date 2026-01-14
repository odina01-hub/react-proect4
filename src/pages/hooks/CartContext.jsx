import React, { createContext,  useState } from 'react'


export const CartContextCard = createContext();
const CartContext = ({children}) => {
    const [cart , setCart] = useState([]);

    function addToCart (el) {
        setCart((prev) => {
            return[...prev , {...el , qty:1}]
        })
    }

    function removeToCart (el) {
        setCart((prev) => {
            return prev.filter((item) => item.id !== el.id)
        })
    }

    function increase (el) {
        setCart((prev) => {
            return prev.map((item) => {
                if(item.id === el.id) {
                    return{... item , qty: item.qty + 1}
                }else {
                    return item;
                }
            })
        })
    }

    function decrease (el) {
       setCart ((prev) => {
        if (prev.find((item) => item.id === el.id)?.qty > 1) {
            return prev.map ((el1) => {
                return {...el1 , qty:el1.qty - 1 } 
            })
        }else {
            return prev.filter((el1) => el1.id !== el.id)
        }
       })
    }
    
  return <CartContextCard.Provider value={{cart , setCart , addToCart , removeToCart , increase , decrease}}>
    {children}
  </CartContextCard.Provider>
}

export default CartContext