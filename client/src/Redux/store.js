import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./Reducer/rootReducer";

const middlewares = [thunk];

// if (process.evn.NODE_ENV === "development") {
    const { logger } = require("redux-logger");
    middlewares.push(logger);
// }

const Store = createStore(rootReducer, {}, applyMiddleware(...middlewares));

export default Store;