// import dependency
const redux = require("redux");

// create store
const createStore = redux.createStore;

// actions
const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";

const buyCake = () => {
  return {
    type: BUY_CAKE,
    info: "First Redux action",
  };
};

const buyIcecream = () => {
  return {
    type: BUY_ICECREAM,
  };
};

// create reducer
const initialState = {
  numOfCakes: 10,
  numOfIcecreams: 20,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    case BUY_ICECREAM:
      return {
        ...state,
        numOfIcecreams: state.numOfIcecreams - 1,
      };
    default:
      return state;
  }
};

// create store continues

const store = createStore(reducer);
console.log("Initial State", store.getState());

const unsubscribe = store.subscribe(() => {
  console.log("Initial State", store.getState());
});

store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIcecream());
store.dispatch(buyIcecream());

unsubscribe();
