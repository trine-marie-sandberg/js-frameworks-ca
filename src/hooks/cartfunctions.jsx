import React, { useReducer } from "react";
import cartReducer from "./cartreducer";
import * as storage from "./storage";
import { Icon } from "../pages/product/style";

export function cartBtns(id, title, price, img) {

    const getCurrentCount = storage.load(id);
    let setInitialCount = 0;
    if(getCurrentCount) {
        setInitialCount = getCurrentCount.count;
    }

    let initialCartState = {
        id: id,
        count: setInitialCount,
        title: "",
        price: "",
        imgUrl: "",
    }
    const [state, setState] = useReducer(cartReducer, initialCartState);

    let updateCartState = {
        id: id,
        count: state.count,
        title: title,
        price: price,
        imgUrl: img,
      };
      if (state.count > 0) {
        storage.save(id, updateCartState);
    }
    function add() { 
        window.dispatchEvent(new Event('storage'));
        setState({ type: 'increment' });
    }
    function remove() {
        window.dispatchEvent(new Event('storage'));
        setState({ type: 'decrement' });
        if(state.count <= 1) {
            //NB: 1 works as 0 for some reason
            storage.remove(id);
        }
    }
    function clear() {
        window.dispatchEvent(new Event('storage'));
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
    const displayCount = <p>{currentCount} in cart <Icon className="fa-solid fa-cart-shopping"></Icon></p>

    return {add, remove, clear, displayCount};
}