import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';


const middleWare = applyMiddleware(thunk, logger);

import {fetchImagesReducer} from './fetchImagesReducer';

const rootReducer = combineReducers({
    fetchImagesData: fetchImagesReducer,
  });

  export const store = createStore(rootReducer, middleWare)