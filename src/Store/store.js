// It is must be one store in the project


import { createStore } from "redux";
// import languageReducer from "./Reducers/changLangReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import combineReducers from "./Reducers/combineReducers";


// const store = createStore(languageReducer, composeWithDevTools())
const store = createStore(combineReducers, composeWithDevTools())


export default store