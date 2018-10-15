import React, { Component } from 'react'
import classnames from 'classnames'
import s from './CountDown.scss'

//eslint-disable-next-line
import { DateTime, Duration, Interval } from 'luxon'

// [TODO:LAKSHAY]
// Change the countdown target by modifying this
const COUNTDOWN_TARGET = DateTime.fromObject({
  day: 24,
  month: 2,
  year: 2018,
  hour: 0,
  minute: 0,
  second: 0
})

export default class CountdownTimer extends Component {
  state = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  }

  componentDidMount = () => {
    if (this.interval) {
      window.clearInterval(this.interval)
    }
    this.interval = window.setInterval(() => this.updateTime(), 1000)
    this.updateTime()

    // window.lux = { DateTime, Duration, Interval }
  }

  updateTime = () => {
    const start = DateTime.local()
    const duration = COUNTDOWN_TARGET.diff(start, [
      'days',
      'hours',
      'minutes',
      'seconds'
    ])
    const diff = duration.toObject()
    const _update = Object.keys(diff).reduce((result, key) => {
      var v = Math.floor(diff[key])
      result[key] = v.toString().length === 1 ? `0${v}` : v
      return result
    }, {})

    this.setState(_update)
    // console.log('updating time', _update)
  }

  render() {
    const { title, className } = this.props
    const cx = classnames(s.container, className)
    return (
      <div className={cx}>
        <div className="time-value-container flex-horizontal align-items-center justify-content-around">
          <div className="time-section">
            <div className="time-value">{this.state.days}</div>
            <div className="time-label">d</div>
          </div>
          <div className="time-section">
            <div className="time-value">{this.state.hours}</div>
            <div className="time-label">h</div>
          </div>
          <div className="time-section">
            <div className="time-value">{this.state.minutes}</div>
            <div className="time-label">m</div>
          </div>
          <div className="time-section">
            <div className="time-value">{this.state.seconds}</div>
            <div className="time-label">s</div>
          </div>
        </div>
        <div className="time-title"> {title} </div>
      </div>
    )
  }
}
