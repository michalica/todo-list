import {applyMiddleware, createStore, compose} from 'redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';
import DevTools from '../containers/DevTools';



export function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        compose(
            applyMiddleware(thunk),
            DevTools.instrument()
        ));
}
