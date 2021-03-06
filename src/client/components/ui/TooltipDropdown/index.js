import React, { Component } from 'react'
import classnames from 'classnames'

import s from './TooltipDropdown.scss'

import * as bsutils from 'utils/bsutils'

const debug = require('debug')('cryptonia:comp:ui/TooltipDropdown')

export default class TooltipDropdown extends Component {
  state = {
    isOpen: false
  }

  componentDidMount = () => {
    document.addEventListener('mousedown', this.handleClick, false)
  }

  componentWillUnmount = () => {
    document.removeEventListener('mousedown', this.handleClick, false)
  }

  getSelectedItem = () => {
    return this.props.items[this.props.selectedIndex] || {}
  }

  onItemClick = (item, index) => e => {
    debug('Clicked ', index, item)
    this.props.onItemClick(item, index)
    this.hideTooltip()
  }

  handleClick = e => {
    if (this.containerEl.contains(e.target)) {
      return
    }
    // On outside click
    // this.hideTooltip()
  }

  hideTooltip = () => {
    if (this.state.isOpen) this.setState({ isOpen: false })
  }

  showTooltip = () => {
    if (!this.state.isOpen) this.setState({ isOpen: true })
  }

  toggleTooltip = () => {
    this.setState({ isOpen: !this.state.isOpen })
  }

  render() {
    const {
      className,
      items = [],
      showIcon = true,
      noMargins = false,
      btnIsLink = false
    } = this.props

    const selectedItem = this.getSelectedItem()

    const cx = classnames(s.container, 'ui-tooltip-dropdown', className)
    const menuClassName = classnames(
      'ui-tooltip-dropdown-menu tooltip bs-tooltip-bottom',
      { show: this.state.isOpen }
    )

    const btnClassName = classnames(
      'btn ui-tooltip-dropdown-btn',
      noMargins ? '' : bsutils.toStringWithPrefix('mx', [1, 2, 3, 3, 3]),
      btnIsLink ? 'btn-link' : 'btn-light'
    )

    return (
      <div className={cx} ref={node => (this.containerEl = node)}>
        <div className={btnClassName} tabIndex="0">
          <span className="text"> {selectedItem.label} </span>
          {showIcon && (
            <span className="icon">
              <i className="fa fa-chevron-down" />
            </span>
          )}
        </div>
        <div className={menuClassName} role="menu">
          <div className="arrow" />
          <div className="tooltip-inner">
            {items.map((item, index) => (
              <div
                key={index}
                className="ui-tooltip-dropdown-item"
                onClick={this.onItemClick(item, index)}>
                {item.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
}
