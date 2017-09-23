import React from 'react'
import ReactDom from 'react-dom'

import configureStore from './state/configureStore'
import initialState from './state/reducers'
import AppRoot from 'components/AppRoot'

const store = configureStore(window.__INITIAL_STATE__)

window.__app_root = document.getElementById('app')

let render = () => {  
  ReactDom.render(
    <AppRoot store={ store } />,
    window.__app_root
  )
}

// set up hotmodule replacement 
if (module.hot) {
  module.hot.accept()
}

// Boom
render()
