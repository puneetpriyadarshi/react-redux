// Multiple Reducers

// import dependency
const redux = require("redux");

// create store
const createStore = redux.createStore;

// combine reducers
const combineReducers = redux.combineReducers;

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
const initialCakeState = {
  numOfCakes: 10,
};

const initialIcecreamState = {
  numOfIcecreams: 20,
};

const cakeReducer = (state = initialCakeState, action) => {
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
const icecreamReducer = (state = initialIcecreamState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numOfIcecreams: state.numOfIcecreams - 1,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  cake: cakeReducer,
  icecream: icecreamReducer,
});

// create store continues

const store = createStore(rootReducer);
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
