import { connect } from 'react-redux'

import { appLoading } from 'state/app/actions'
import { selectLoadingApp } from 'state/app/selectors'

import Home from '../Home'

const mapDispatchToProps = {
  appLoading
}

const mapStateToProps = state => ({
  loading: selectLoadingApp(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
