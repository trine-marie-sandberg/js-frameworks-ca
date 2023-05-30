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
    let amount = state.count;

    function cartAdd() { 
        setState({ type: 'increment' });
    }
    function cartRemove() {
        setState({ type: 'decrement' });
    }
    function cartClear() {
        setState({ type: 'reset' });
    }

    const cartItem = storage.load(id);
    console.log(cartItem)
    storage.save(id, state.count);
    
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