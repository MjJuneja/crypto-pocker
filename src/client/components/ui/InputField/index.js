import React, { Component } from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import './InputField.scss'

export default class InputField extends Component {
  static propTypes = {
    /**
     * Show this field in dark variation
     */
    dark: PropTypes.bool,
    /**
     * Make background transparent
     */
    transparent: PropTypes.bool
  }

  static defaultProps = {
    icon: null,
    iconInLeft: false,
    dark: false,
    transparent: false,
    rounded: false
  }

  render() {
    const {
      className,
      placeholder,
      icon,
      iconInLeft,
      dark,
      transparent,
      rounded
    } = this.props

    const cx = classnames(
      'ui-input-field',
      {
        'icon-in-left': iconInLeft,
        'is-dark': dark,
        'is-transparent': transparent,
        'is-rounded': rounded
      },
      className
    )

    return (
      <div className={cx}>
        <input
          className="ui-input-field-input form-control"
          placeholder={placeholder}
        />
        {icon && <span className="ui-input-field-icon">{icon}</span>}
      </div>
    )
  }
}
