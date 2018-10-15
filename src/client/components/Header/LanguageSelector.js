import React, { Component } from 'react'
import { connect } from 'react-redux'

import Dropdown from 'components/ui/Dropdown'
import findIndex from 'lodash/findIndex'
import { actions as localeActions } from 'store/Locale'

import find from 'lodash/find'

const ITEMS = [
  { label: 'EN', value: 'en' },
  { label: 'Chinese', value: 'zh' },
  { label: 'Japanese', value: 'ja' },
  { label: 'Russian', value: 'ru' },
  { label: 'Portuguese', value: 'pt' },
  { label: 'Vietnamese', value: 'vi' },
  { label: 'Italian', value: 'it' },
  { label: 'Spanish', value: 'es' }

]

class LanguageSelector extends Component {
  onLanguageSelect = (item, index) => {
    console.log('Selected language: ', item, index)
    this.props.changeLocale(item.value)
  }
  getCurrentIndex = () => {
    return findIndex(ITEMS, { value: this.props.locale })
  }
  getCurrentItem = () => {
    return find(ITEMS, { value: this.props.locale })
  }
  render() {
    const selectedItem = this.getCurrentItem() || {}

    return (
      <Dropdown
        id="language-selector"
        buttonText={selectedItem.label}
        buttonClassName="btn-link"
        items={ITEMS}
        onItemClick={this.onLanguageSelect}
        selectedIndex={this.getCurrentIndex()}
      />
    )
  }
}

const mapStateToProps = state => ({
  locale: state.Locale.locale
})
const mapDispatchToProps = dispatch => ({
  changeLocale(locale) {
    return dispatch(localeActions.changeLocale(locale))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(LanguageSelector)
