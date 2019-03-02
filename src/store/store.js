import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootModule from '../redux/rootModule';

const middleware = applyMiddleware(thunk);
const enhancer = composeWithDevTools(middleware);

const store = createStore(rootModule, enhancer);

export default store;
