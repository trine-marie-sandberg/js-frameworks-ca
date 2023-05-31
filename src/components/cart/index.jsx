import React, { useReducer } from 'react';
import { useParams } from "react-router-dom";
import reducer from "./reducer";
import * as storage from "../../hooks/storage";
import { Button, Icon } from "./style";
//import { cartAdd, cartRemove, cartClear } from './cartfunctions';

export default function CartBtn() {
    let params = useParams();
    const id = params.id;

    let cart;
    let cartState = {
        id: id,
        count: 0,
        cart: [1,2],
        totalItems: 0,
        totalPrice: 0,
    }
    
    const [state, setState] = useReducer(reducer, cartState);
    //cart = [...state.cart];
    let updateCartState = {
        id: id,
        count: state.count,
        cart: [1,2],
        totalPrice: 0,
    }
    if (state.count > 0) {
        storage.save(id, updateCartState);
    }
    
    function cartAdd() { 
        setState({ type: 'increment' });

    }
    function cartRemove() {
        setState({ type: 'decrement' });
        if(state.count <= 1) {
            //NB: 1 works as 0 for some reason
            storage.remove(id);
        }
    }
    function cartClear() {
        setState({ type: 'reset' });
        storage.remove(id);
    }
    
    let currentCount;
    if(storage.load(id)) {
        let getCurrentCount = storage.load(id)
        currentCount = getCurrentCount.count;
    } else {
        currentCount = 0;
    }
    
    return (
        <div>
            <Button onClick={cartAdd}>
                Add to cart + 
                <Icon className="fa-solid fa-cart-shopping"></Icon>
            </Button>
            <h3>Add or remove products's</h3>
          <p>Currently {currentCount} in cart <Icon className="fa-solid fa-cart-shopping"></Icon></p>
          <button onClick={cartRemove}>-</button>
          <button onClick={cartAdd}>+</button>
          <button onClick={cartClear}>Remove</button>
        </div>
      );
};