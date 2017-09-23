import { combineReducers } from 'redux'

import appReducer from 'state/app/reducer'

export const buildRootReducer = asyncReducers => combineReducers({
  ...asyncReducers,
  app: appReducer
})


// For dynamic injection / code splitting
export const injectReducer = (store, { key, reducer }) => {
  store.asyncReducers[key] = reducer
  store.replaceReducer(rootReducer(store.asyncReducers))
}

export default buildRootReducer