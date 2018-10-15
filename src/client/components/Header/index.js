import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { Link, NavLink } from 'react-router-dom'
import LanguageSelector from './LanguageSelector'

import debounce from 'lodash/debounce'
import { scrollToElement } from 'utils/dom'

import Translate from 'components/Translate'

import './Header.scss'

const HEADER_ITEMS_LEFT = [
  { title: 'About', href: '/#about-section' },
  { title: 'Features', href: '/#features-section' },
  { title: 'ICO', href: '/#ico-section' },
  { title: 'Milestones', href: '/#milestone-section' }
]

const HEADER_ITEMS_RIGHT = [
  { title: 'Team', href: '/#team-section' },
  // { title: 'Freebies', href: '/#freebies-section', disabled: true },
  {title:'Bounty' , href: '/#bounty-section'},
  {title:'WhyUs', href: '/#whyus-section'},
  { title: 'FAQ', href: '/#faq-section' },
  // { title: 'Download', href: '/#download-section' }
]

export default class Header extends Component {
  static propTypes = {
    scrollspy: PropTypes.bool,
    invert: PropTypes.bool,
    inCenter: PropTypes.bool,
    showLanguageSelection: PropTypes.bool,
    className: PropTypes.string
  }

  state = {
    isFixed: false,
    isMobileNavOpen: false
  }

  componentDidMount = () => {
    if (this.props.scrollspy) this.startListeningToScroll()
  }

  componentWillUnmount = () => {
    if (this._handleScroll) this.stopListeningToScroll()
  }

  startListeningToScroll = () => {
    if (!this._handleScroll)
      this._handleScroll = debounce(this.handleScroll, 1000 / 60, {
        trailing: true
      })

    window.addEventListener('scroll', this._handleScroll, false)
  }

  stopListeningToScroll = () => {
    window.removeEventListener('scroll', this._handleScroll, false)
    this._handleScroll = null // Garbage collection
  }

  handleScroll = () => {
    let top = $(window).scrollTop()

    // add 20 because we shift header by default 20px
    let threshold = $('.app-header').height() + 20

    // console.log(top, threshold, top >= threshold);

    this.setState({ isFixed: top >= threshold })
  }

  renderOneLink = (item, index) => {
    return (
      <Link className="header-link" to={item.href} key={index}>
        {item.title}
      </Link>
    )
  }

  renderOneBSLink = (item, index) => {
    const cx = classnames('nav-item', {
      active: item.active
    })
    return (
      <li className={cx} key={index}>
        <NavLink
          className={`nav-link ${item.disabled ? 'disabled' : ''}`}
          to={item.href}
          onClick={this.handleLinkNavigation}>
          <Translate id={`header.items.${item.title}`} />
        </NavLink>
      </li>
    )
  }

  handleLinkNavigation = e => {
    if (e.target.classList.contains('disabled')) {
      return false
    }
    const strip = window.location.origin + '/'
    const href = (e.target.href || '').replace(strip, '')

    const isValid = /^#[a-zA-Z]/.test(href)

    $('.app-header .collapse.show').removeClass('show')

    if (!isValid) return

    const el = document.getElementById(href.substr(1))
    if (el) {
      scrollToElement(el, { offset: $('.app-header').height() * -1 })
    }

    // If element is not present, wait for browser to navigate
    // and then scroll again
    setTimeout(() => {
      if (el) {
        scrollToElement(href, { offset: $('.app-header').height() * -1 })
      }
    }, 500)
  }

  checkToggle = e => {
    $('.app-header').toggleClass('mobile-nav-is-open')
    this.setState({ isMobileNavOpen: !this.state.isMobileNavOpen })
  }

  render() {
    const {
      className,
      inCenter,
      invert = false,
      showLanguageSelection = true
    } = this.props

    const cx = classnames('app-header navbar navbar-expand-lg', className, {
      'in-center': inCenter,
      'navbar-light bg-head': invert || this.state.isFixed,
      'fixed-top': this.state.isFixed
    })

    return (
      <Fragment>
        <nav className={cx} id="app-header">
          <div className="container">
            <a
              className="logo-on-mobile"
              href="/#hero-section"
              onClick={this.handleLinkNavigation}>
              <img
                className="no-pointer-events img-fluid"
                alt=""
                src={
                  this.state.isFixed || this.state.isMobileNavOpen
                    ? '/public/img/logo_on_white.svg'
                    : '/public/img/logo_white.svg'
                }
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarContentContainer"
              aria-controls="navbarContentContainer"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={this.checkToggle}>
              <div className="menu-icon" />
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarContentContainer">
              <ul className="navbar-nav mx-auto align-items-center">
                {HEADER_ITEMS_LEFT.map(this.renderOneBSLink)}
                <li className="nav-item center-icon d-none d-lg-block d-xl-block">
                  <NavLink
                    className="nav-link"
                    to="/#hero-section"
                    activeClassName="active"
                    onClick={this.handleLinkNavigation}>
                    <img
                      className="no-pointer-events img-fluid"
                      alt=""
                      src={
                        this.state.isFixed
                          ? '/public/img/logo_on_white.svg'
                          : '/public/img/logo_white.svg'
                      }
                    />
                  </NavLink>
                </li>
                {HEADER_ITEMS_RIGHT.map(this.renderOneBSLink)}
              </ul>
            </div>
            {showLanguageSelection && (
              <div className="btn btn-link language-button">
                <LanguageSelector />
              </div>
            )}
          </div>
        </nav>
      </Fragment>
    )
  }
}
