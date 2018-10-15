import React, { Component } from 'react'
import classnames from 'classnames'

import s from './Footer.scss'

const FOOTER_LINKS = [{ label: 'Terms and Conditions', href: '#' }]
const SOCIAL_ICONS = [
  { icon: 'fa-twitter', href: '#' },
  { icon: 'fa-facebook', href: '#' },
  { icon: 'fa-tumblr', href: '#' },
  { icon: 'fa-instagram', href: '#' }
]

export default class Footer extends Component {
  render() {
    const cx = classnames(s.container, 'app-footer py-5')
    return (
      <div className={cx}>
        <div className="footer-inner text-center">
          <div className="social-icons-list">
            {SOCIAL_ICONS.map(item => (
              <a className="social-icon" key={item.icon}>
                <i className={`fa ${item.icon}`} />
              </a>
            ))}
          </div>
          <ul className="list-inline">
            {FOOTER_LINKS.map((x, i) => (
              <li className="list-inline-item" key={i}>
                <a className="footer-link" href={x.href}>
                  {x.label}
                </a>
              </li>
            ))}
          </ul>
          <p className="footer-copyright-info">
            &copy; 2018 Cryptonia Foundation
          </p>
        </div>
      </div>
    )
  }
}
