import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const DropdownItemShape = {
  label: PropTypes.string,
  value: PropTypes.string
}

class UIDropdown extends Component {
  static propTypes = {
    className: PropTypes.string,

    selectedIndex: PropTypes.number.isRequired,
    items: PropTypes.arrayOf(PropTypes.shape(DropdownItemShape)),
    itemRenderer: PropTypes.func,
    itemClassName: PropTypes.string,
    buttonText: PropTypes.string,
    buttonIcon: PropTypes.string,
    buttonIconInLeft: PropTypes.bool,
    itemLabelKey: PropTypes.string,
    itemValueKey: PropTypes.string,
    menuClassName: PropTypes.string
  }

  static defaultProps = {
    items: [],
    itemRenderer: this.defaultItemRenderer,
    itemClassName: 'ui-dropdown-item',
    buttonText: 'Dropdown',
    buttonIcon: '',
    buttonIconInLeft: false,
    buttonClassName: 'btn-default',
    itemLabelKey: 'label',
    itemValueKey: 'value'
  }

  defaultItemRenderer = (item, index) => {
    const cx = classnames('dropdown-item', this.props.itemClassName, {
      active: this.props.selectedIndex === index
    })
    const label = item[this.props.itemLabelKey]
    return (
      <div
        key={index}
        className={cx}
        data-index={index}
        onClick={this.onItemClick}>
        {label}
      </div>
    )
  }

  onItemClick = e => {
    const index = Number(e.target.dataset.index)
    const item = this.props.items[index]

    // console.log('Clicked item: ', item, index)
    if (typeof this.props.onItemClick === 'function') {
      this.props.onItemClick(item, index)
    }
  }

  render() {
    const cx = classnames('ui-dropdown btn-group', this.props.className)
    const buttoncx = classnames(
      'btn dropdown-toggle',
      this.props.buttonClassName
    )
    const menucx = classnames(
      'ui-dropdown-menu dropdown-menu dropdown-menu-right',
      this.props.menuClassName
    )

    const itemRenderer = this.props.itemRenderer || this.defaultItemRenderer

    return (
      <div className={cx}>
        <div className={buttoncx} data-toggle="dropdown">
          {this.props.buttonText}
        </div>
        <div className={menucx}>{this.props.items.map(itemRenderer)}</div>
      </div>
    )
  }
}

export default UIDropdown
