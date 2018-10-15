import React, { Component } from 'react'
import classnames from 'classnames'

import Chart from 'chart.js'
import debounce from 'lodash/debounce'

import Translate from 'components/Translate'

const whiteBackgroundArray = [
  'rgba(255, 255, 255, 0.25)',
  'rgba(255, 255, 255, 0.5)',
  'rgba(255, 255, 255, 0.75)',
  'rgba(255, 255, 255, 1)'
]
const primaryBackgroundArray = [
  '#365CF6',
  '#365CF6',
  '#365CF6',
  '#365CF6',
  '#365CF6',
  '#365CF6'
]

const ICOSection = props => {
  const cx = classnames(props.className, 'ico-section')

  return (
    <div className={cx} id={props.id}>
      <div className="container page-section">
        <h4 className="section-title ICO-line text-center mb-5">
          <span><Translate id="homepage.ico.title" /></span>
        </h4>
        <div className="row">
          <div className="col-md-4 flex-vertical">
            <p className="content-title mb-3">
              <Translate id="homepage.ico.about_title" />
            </p>
            <p className="mb-3">
              <Translate id="homepage.ico.about_text_1" />
            </p>
            <p>
              <Translate id="homepage.ico.about_text_2" />
            </p>
            <div className="flex-1 ico-buttons flex-vertical justify-content-end">
              <button className="btn btn-primary btn-block mb-2">
                <span className="circle-icon icon-cyan" />
                <Translate id="homepage.ico.pre_ico_sold_btn" />
              </button>
              <button className="btn btn-primary btn-block">
                <span className="circle-icon icon-red" />
                <Translate id="homepage.ico.ico_starts_btn" />
              </button>
            </div>
          </div>
          <div className="col-md-8">
            <div className="row">
              <div className="col-md-12">
                <div className="info-card mt-3 mt-md-0 mt-lg-0 mt-xl-0">
                  <div className="info-content">
                    <div className="info-title">Pre-ICO</div>
                    <button className="btn btn-danger info-button mb-3">
                      Sold Out
                    </button>
                    <div className="info-price-conversion">
                      1 ETH ~ 6,600 CHP
                    </div>
                    <div className="info-price">price</div>
                  </div>
                  <div className="info-cap">
                    <div className="cap-title">100,000,000 CHP</div>
                    <div className="cap-type">Hard Cap</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6 mt-3">
                <div className="info-card">
                  <div className="info-content">
                    <div className="info-title">Pre-ICO</div>
                    <button className="btn btn-danger info-button mb-3">
                      Sold Out
                    </button>
                    <div className="info-price-conversion">
                      1 ETH ~ 6,600 CHP
                    </div>
                    <div className="info-price">price</div>
                  </div>
                  <div className="info-cap">
                    <div className="cap-title">100,000,000 CHP</div>
                    <div className="cap-type">Hard Cap</div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mt-3">
                <div className="info-card">
                  <div className="info-content">
                    <div className="info-title">Pre-ICO</div>
                    <button className="btn btn-danger info-button mb-3">
                      Sold Out
                    </button>
                    <div className="info-price-conversion">
                      1 ETH ~ 6,600 CHP
                    </div>
                    <div className="info-price">price</div>
                  </div>
                  <div className="info-cap">
                    <div className="cap-title">100,000,000 CHP</div>
                    <div className="cap-type">Hard Cap</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {props.children}
      </div>
    </div>
  )
}

class InfoChart extends Component {
  constructor() {
    super()
    this.id = 'info-chart-id-' + Math.floor(Math.random() * Date.now())
  }

  componentDidMount = () => {
    this._listenForVisibility = debounce(this.listenForVisibility, 1000 / 60)
    $(window).on('scroll', this._listenForVisibility)
    setTimeout(() => {
      this.listenForVisibility()
    }, 100)
  }

  createChart = () => {
    this.ctx = document.getElementById(this.id).getContext('2d')
    this.chart = new Chart(this.ctx, this.getOptions())
  }

  listenForVisibility = () => {
    var $el = $('#' + this.id)
    if ($el.isInViewport()) {
      if (!this.chart) this.createChart()
    } else if (this.chart) {
      this.chart.destroy()
      this.chart = null
    }
  }

  componentWillUnmount = () => {
    $(window).off('scroll', this._listenForVisibility)
    this.chart = null
  }

  getOptions = () => {
    const labels = this.props.labels || ['ICO 1', 'ICO 2', 'ICO 3', 'ICO 4']
    const datasets = this.props.datasets || [
      {
        backgroundColor: whiteBackgroundArray,
        borderColor: primaryBackgroundArray,
        data: [24, 25, 89, 12]
      }
    ]

    const options = {
      responsive: true,
      legend: {
        position: 'bottom',
        labels: {
          fontColor: '#fff',
          fontFamily: 'Montserrat',
          boxWidth: 25
        }
      },
      title: {
        display: true,
        text: this.props.title || 'ICO Chart',
        fontFamily: 'Montserrat',
        fontColor: '#fff',
        fontSize: 21
      },
      animation: {
        animateScale: true,
        animateRotate: true
      }
    }

    return {
      type: 'doughnut',
      options,
      data: { datasets, labels }
    }
  }

  render() {
    return (
      <div className="info-chart-container">
        <canvas className="info-chart-canvas" id={this.id} />
      </div>
    )
  }
}

class ICOSectionWithCharts extends Component {
  render() {
    const { id, className } = this.props
    return (
      <ICOSection id={id} className={className}>
        <div className="row">
          <div className="col-md-6">
            <InfoChart
              title="Eth Allocation"
              labels={[
                'Development',
                'World Wide Community Building',
                'Team / Advisors / Ambassadors'
              ]}
              datasets={[
                {
                  backgroundColor: whiteBackgroundArray,
                  borderColor: primaryBackgroundArray,
                  data: [60, 25, 15]
                }
              ]}
            />
          </div>
          <div className="col-md-6">
            <InfoChart
              title="CPC Allocation"
              labels={['ICO', 'Tournaments', 'Exchanges', 'Team/Advisors']}
              datasets={[
                {
                  backgroundColor: whiteBackgroundArray,
                  borderColor: primaryBackgroundArray,
                  data: [75, 15, 5, 5]
                }
              ]}
            />
          </div>
        </div>
      </ICOSection>
    )
  }
}

export default ICOSectionWithCharts
