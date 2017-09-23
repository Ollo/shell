import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk';

import { createLogger } from 'redux-logger'

import { buildRootReducer } from './reducers'

export default (initialState = {}, history) => {
  
  // Logger Config
  const reduxLogger = createLogger({
    collapsed: true,
    timestamp: false
  })
  
  // Middleware Config
  const middleWare = [thunk, reduxLogger]
  
  // Enhancers 
  const enhancers = []
  
  const store = createStore(
    buildRootReducer(),
    initialState,
    compose(
      applyMiddleware(...middleWare),
      ...enhancers
    )
  )
  store.asyncReducers = {}
  
  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const reducers = require('./reducers').default
      store.replaceReducer(reducers(store.asyncReducers))
    })
  }
  
  return store
  
}