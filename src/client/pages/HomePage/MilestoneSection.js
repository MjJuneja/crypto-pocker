import React from 'react'
import classnames from 'classnames'
import Translate from 'components/Translate'

const LIST = [
  {
    title: 'App launch for all platforms',
    date: '06/20/2018',
    status: 'done'
  },
  {
    title: 'Cryptonia pre-ICO',
    date: '06/20/2018',
    status: 'done'
  },
  {
    title: 'Cryptonia ICO',
    date: '06/20/2018',
    status: 'pending'
  },
  {
    title: 'Cryptonia listed in Exchanges',
    date: '06/20/2018',
    status: 'pending'
  },
  {
    title: 'Cryptonia launch on Cryptonia Poker',
    date: '06/20/2018',
    status: 'pending'
  },

  {
    title: 'Cryptonia Opening tournament',
    date: '06/20/2018',
    status: 'pending'
  },
  {
    title: 'Decentralised, random number generating solution',
    date: '06/20/2018',
    status: 'pending'
  },
  {
    title: 'Cryptonia’s referral and partner programme',
    date: '06/20/2018',
    status: 'pending'
  },
  {
    title: 'Cryptonia’s fair play programme completion',
    date: '06/20/2018',
    status: 'pending'
  },
  {
    title: 'Launch of Cryptonia’s Android and iOS apps',
    date: '06/20/2018',
    status: 'pending'
  }
]

const MilestoneSection = props => {
  const cx = classnames(props.className, 'milestone-section')
  return (
    <div className={cx} id={props.id}>
      <div className="container page-section">
        <h4 className="section-title with-line text-center mb-3">
          <span><Translate id="homepage.milestones.title" /></span>
        </h4>
        <p className="text-center mb-4">
          <Translate id="homepage.milestones.text_1" />
        </p>
        <div className="milestone-ladder mt-2">
          {LIST.map((item, index) => {
            const cx = classnames('milestone-item', {
              'bg-success is-done': item.status === 'done',
              'bg-primary is-pending': item.status === 'pending'
            })
            const wrapperClass = classnames('milestone-item-wrapper', {
              'in-right': index % 2
            })
            return (
              <div className={wrapperClass} key={index}>
                <div className={cx}>
                  <div className="milestone-count">{index + 1}</div>
                  <div className="milestone-title">
                    <Translate
                      id={`homepage.milestones.item_${index + 1}_title`}
                    />
                  </div>
                  <div className="milestone-stamp">{item.date}</div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default MilestoneSection
