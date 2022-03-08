import { applyMiddleware, createStore, compose } from "redux";
import rootReducer from './reducers';
import ReduxThunk from 'redux-thunk';

declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const REDUX_MIDDLEWARES = [ReduxThunk];

export default createStore(rootReducer, {}, composeEnhancers(applyMiddleware(...REDUX_MIDDLEWARES)));