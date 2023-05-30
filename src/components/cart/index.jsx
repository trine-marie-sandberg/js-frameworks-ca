import { createContext, useState, useEffect, useReducer } from "react";
import { useParams } from "react-router-dom";
import reducer from "./reducer";
import * as storage from "../../hooks/storage";
import { Button, Icon } from "./style";

export default function CartBtn() {

    const cartState = {
        count: 0,
        item: [],
        totalItems: 0,
        totalPrice: 0,
    }
    
    const [state, setState] = useReducer(reducer, cartState);
    let params = useParams();
    const id = params.id;
    let count = state.count;
    
    return (
        <div>
            <Button onClick={
                function cartAdd() { 
                    setState({ type: 'increment' });
                    storage.save("id", id);
                    storage.save("amount", count);
                }
            }>
                Add to cart + 
                <Icon className="fa-solid fa-cart-shopping"></Icon>
            </Button>
          <div>Count: {state.count}</div>
          <button onClick={() => setState({ type: 'decrement' })}>-</button>
          <button onClick={() => setState({ type: 'increment' })}>+</button>
          <button onClick={() => setState({ type: 'reset' })}>Reset</button>
        </div>
      );
};