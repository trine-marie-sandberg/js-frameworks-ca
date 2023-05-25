import { createContext, useState, useEffect, useReducer } from "react";
import reducer from "./reducer";
import { Button, Icon } from "./style";

export default function CartBtn() {

    const cartState = {
        count: 0,
        item: [],
        totalItems: 0,
        totalPrice: 0,
    }
    
    const [state, setState] = useReducer(reducer, cartState);
    return (
        <div>
            <Button onClick={() => setState({ type: 'increment' })}>
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