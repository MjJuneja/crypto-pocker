import React, { Component } from 'react'
import classnames from 'classnames'

import { connect } from 'react-redux'
// import { IntlProvider } from 'react-intl'

import './App.scss'

import AppRoutes from './AppRoutes'
import AppOverlays from './AppOverlays'

class App extends Component {
  static propTypes = {}

  componentDidMount = () => {}

  componentWillUnmount = () => {}

  render() {
    const cx = classnames('app-main')
    return (
      <div className={cx}>
        {AppRoutes}
        {AppOverlays(this.props.location)}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  location: state.router.location,
  locale: state.Locale.locale
})

export default connect(mapStateToProps)(App)
