import React, { Component } from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

import take from 'lodash/take'

const getInitials = str => {
  return take(str.split(' '), 2)
    .filter(x => x)
    .map(x => x[0])
}

const Avatar = props => {
  const { className, name, image } = props

  if (!name && !image) {
    throw new Error(`<Avatar> requires either 'name' props or 'image' prop`)
  }

  return (
    <div className={cx}>
      {image ? (
        <img className="avatar-image" alt="" src={image} />
      ) : (
        <div className="avatar-name">{this.getInitials(name)}</div>
      )}
    </div>
  )
}

Avatar.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string
}

export default Avatar
