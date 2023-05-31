import React, { useReducer } from 'react';
import cartReducer from '../../hooks/cartreducer';
import * as storage from "../../hooks/storage";
import { Icon } from "./style";

export default function CartBtns() {
    storage.save("product", 1)
    let product = storage.load("product")
    const productId = product.id;

    let cartState = {
        id: productId,
        count: 0,
        totalItems: 0,
        totalPrice: 0,
    }
    
    const [state, setState] = useReducer(cartReducer, cartState);
    let updateCartState = {
        productId: productId,
        count: state.count,
        totalPrice: 0,
    }
    if (state.count > 0) {
        storage.save(productId, updateCartState);
    }
    
    function cartAdd() { 
        setState({ type: 'increment' });

    }
    function cartRemove() {
        setState({ type: 'decrement' });
        if(state.count <= 1) {
            //NB: 1 works as 0 for some reason
            storage.remove(productId);
        }
    }
    function cartClear() {
        setState({ type: 'reset' });
        storage.remove(productId);
    }
    
    let currentCount;
    if(storage.load(productId)) {
        let getCurrentCount = storage.load(productId)
        currentCount = getCurrentCount.count;
    } else {
        currentCount = 0;
    }
    
    return (
        <div>
          <p>Currently {currentCount} in cart <Icon className="fa-solid fa-cart-shopping"></Icon></p>
          <button onClick={cartRemove}>-</button>
          <button onClick={cartAdd}>+</button>
          <button onClick={cartClear}>Remove</button>
        </div>
      );
};