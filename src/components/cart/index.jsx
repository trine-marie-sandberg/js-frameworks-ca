import React, { useReducer } from 'react';
import { useParams } from "react-router-dom";
import reducer from "./reducer";
import * as storage from "../../hooks/storage";
import { Button, Icon } from "./style";

export default function CartBtn() {
    let params = useParams();
    const id = params.id;

    let cartState = {
        id: id,
        count: 0,
        item: [],
        totalItems: 0,
        totalPrice: 0,
    }
    
    const [state, setState] = useReducer(reducer, cartState);
    let updateCartState = {
        id: id,
        count: state.count,
        item: [],
        totalPrice: 0,
    }

    function cartAdd() { 
        setState({ type: 'increment' });
        storage.save(id, updateCartState);
    }
    function cartRemove() {
        setState({ type: 'decrement' });
        storage.save(id, updateCartState);
    }
    function cartClear() {
        setState({ type: 'reset' });
        storage.remove(id);
    }

    const cartItem = storage.load(id);
    console.log(cartItem)
    
    return (
        <div>
            <Button onClick={cartAdd}>
                Add to cart + 
                <Icon className="fa-solid fa-cart-shopping"></Icon>
            </Button>
          <div>Count: {state.count}</div>
          <button onClick={cartRemove}>-</button>
          <button onClick={cartAdd}>+</button>
          <button onClick={cartClear}>Remove</button>
        </div>
      );
};