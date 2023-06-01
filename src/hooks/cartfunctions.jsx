import React, { useReducer } from "react";
import cartReducer from "./cartreducer";
import * as storage from "./storage";
import { Icon } from "../pages/product/style";

export function cartBtns(id, title, price, img) {
    let initialCartState = {
        id: id,
        count: 0,
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
        setState({ type: 'increment' });
  
    }
    function remove() {
        setState({ type: 'decrement' });
        if(state.count <= 1) {
            //NB: 1 works as 0 for some reason
            storage.remove(id);
        }
    }
    function clear() {
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
    const displayCount = <p>Currently {currentCount} in cart <Icon className="fa-solid fa-cart-shopping"></Icon></p>

    return {add, remove, clear, displayCount};
}