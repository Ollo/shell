import React, { Component } from 'react'

class Home extends Component {
  componentDidMount () {
    setTimeout(() => { this.props.appLoading(false) }, 500) // emulate server latency
  }
  render () {
    const { loading } = this.props
    return (
      <div>
        { loading
          ? <h1>... Loading</h1>
          : <h1>Home</h1>
        }
      </div>
    )
  }
}

export default Home
