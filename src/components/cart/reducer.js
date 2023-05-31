export default function reducer(state, action) {

    let amount = state.count;
    if (amount < 0) {
      amount = 0
    }

    switch (action.type) {

        case 'increment':
          return { count: state.count + 1,
            item: ['test']
           };

        case 'decrement':
          if (amount < 0) {
            amount = 0
          }
          return { count: amount - 1 };

        case 'reset':
          return { count: 0 };

        default:
          throw new Error();
    }
}