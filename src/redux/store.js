import {createStore,applyMiddleware} from 'redux';
import reducer from 'redux/reducer';
import { composeWithDevTools } from 'redux-devtools-extension'; //for devtools
import thunk from 'redux-thunk';


const middleware = [thunk];

const store = createStore(reducer,{},composeWithDevTools(applyMiddleware(...middleware)));

export default store;

