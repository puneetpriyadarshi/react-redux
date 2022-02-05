import { BUY_CAKE } from "./CakeTypes";

const initialState = {
  numOfCakes: 10,
};

const cakeReducers = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    default:
      return state;
  }
};

export default cakeReducers;
