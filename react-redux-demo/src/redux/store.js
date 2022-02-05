import { createStore } from "redux";

import cakeReducers from "./cake/CakeReducers";

const store = createStore(cakeReducers);

export default store;
