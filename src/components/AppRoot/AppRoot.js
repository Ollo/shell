import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'

import HomeContainer from 'components/Home/HomeContainer'

class AppRoot extends Component {
  static propTypes = {
    store: PropTypes.object
  }
  render () {
    const { store } = this.props
    return (
      <Provider store={ store }>
        <HomeContainer />
      </Provider>
    )
  }
}

export default AppRoot