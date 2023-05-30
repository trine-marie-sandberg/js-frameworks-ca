import * as storage from "../../hooks/storage";

export default function reducer(state, action) {

    let amount = state.count;
    if (amount < 0) {
      amount = 0
    }

    switch (action.type) {

        case 'increment':
          console.log(amount)
          return { count: state.count + 1 };

        case 'decrement':
          if (amount < 0) {
            amount = 0
          }
          console.log(amount)
          return { count: amount - 1 };

        case 'reset':
          console.log(amount)
          return { count: 0 };

        default:
          throw new Error();
    }
}