import {createStore,applyMiddleware} from 'redux';
import reducer from 'redux/reducer';
import { composeWithDevTools } from 'redux-devtools-extension'; //for devtools
import thunk from 'redux-thunk';
import testShema from '../middlewares/stateValidator'


const middleware = [thunk,testShema];

// const store = createStore(reducer,{},composeWithDevTools(applyMiddleware(...middleware)));

const storeWithState = (state) =>{
return createStore(reducer,state,composeWithDevTools(applyMiddleware(...middleware)));
} 

export default storeWithState;

