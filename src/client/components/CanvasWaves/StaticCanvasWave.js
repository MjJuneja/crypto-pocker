import React, { Component } from 'react'
import classnames from 'classnames'

import uniqueId from 'lodash/uniqueId'

import s from './CanvasWaves.scss'

import WaveMaker from './waves'

export default class StaticCanvasWave extends Component {
  constructor(props) {
    super(props)
    this.id = uniqueId('ui-canvas-waves-canvas-')
  }

  componentDidMount = () => {
    this.createWaves({ dynamic: false, ...this.props.waveProps })
  }

  createWaves = options => {
    this.createWaveInCanvas(this.id, {
      shapeFill: 'rgba(0,0,0,0.1)',
      duration: { min: 60, max: 120 },
      range: { x: 30, y: 140 },
      ...options
    })
  }

  fitCanvas = canvasId => {
    if (!this.containerEl) return
    const {
      width,
      height
    } = this.containerEl.parentElement.getBoundingClientRect()
    const canvas = document.getElementById(canvasId)
    canvas.width = width
    canvas.height = height
  }

  createWaveInCanvas = (canvasId, options) => {
    $(window).one('load', () => {
      this.fitCanvas(canvasId)
      var waves = WaveMaker(canvasId, options)
      waves.start()
    })
  }

  render() {
    const { className } = this.props

    const cx = classnames(s.container, 'ui-canvas-waves', className)

    return (
      <div className={cx} ref={node => (this.containerEl = node)}>
        <canvas id={this.id} className="ui-canvas-waves-canvas canvas-1" />
      </div>
    )
  }
}
