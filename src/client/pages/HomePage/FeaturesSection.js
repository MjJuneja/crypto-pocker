import React from 'react'
import classnames from 'classnames'

import Translate from 'components/Translate'

const LIST = [
  {
    id: 1,
    icon: '/public/img/png/accessibility_icon.png',
    title: 'Accessibility',
    description:
      'Substantial disagreement exists concerning how  designers in many fields, whether amateur'
  },
  {
    id: 2,
    icon: '/public/img/png/transparency_icon.png',
    title: 'Transparency',
    description:
      'Substantial disagreement exists concerning how  designers in many fields, whether amateur'
  },
  {
    id: 3,
    icon: '/public/img/png/privacy_icon.png',
    title: 'Privacy',
    description:
      'Substantial disagreement exists concerning how  designers in many fields, whether amateur'
  },
  {
    id: 4,
    icon: '/public/img/png/distribution_icon.png',
    title: 'Distribution',
    description:
      'Substantial disagreement exists concerning how  designers in many fields, whether amateur'
  },
  {
    id: 5,
    icon: '/public/img/png/fairplay_icon.png',
    title: 'Fairplay',
    description:
      'Substantial disagreement exists concerning how  designers in many fields, whether amateur'
  }
]

const FeatureItem = ({
  className,
  icon,
  title,
  description,
  id,
  descriptionClass=''
}) => (
  <div className={`feature-item ${className} feature-item-${id}`}>
    <div className="feature-icon-container">
      <img alt="" className="feature-icon-img" src={icon} />
    </div>
    <div className="feature-title">
      <Translate id={`homepage.features.item_${id}_title`} />
    </div>
    <p className={`feature-description ${descriptionClass} `}>
      <Translate id={`homepage.features.item_${id}_description`} />
    </p>
  </div>
)

const FeaturesSection = props => {
  const cx = classnames(props.className, 'features-section')

  const list_1 = LIST.filter(x => [1, 2].includes(x.id))
  const list_2 = LIST.filter(x => [3, 4, 5].includes(x.id))

  return (
    <div className={cx} id={props.id}>
      <div className="feature-section-bg" />
      <div className="container page-section">
        <h4 className="section-title with-line text-center mb-3">
          <span><Translate id="homepage.features.title" /></span>
        </h4>
        <div className="row">
          {list_1.map(item => (
            <FeatureItem
              className="col-md-6"
              key={item.id}
              title={item.title}
              icon={item.icon}
              id={item.id}
              description={item.description}
            />
          ))}
        </div>
        <div className="row">
          {list_2.map(item => (
            <FeatureItem
              className="col-md-4"
              key={item.id}
              title={item.title}
              icon={item.icon}
              id={item.id}
              description={item.description}
            />
          ))}
        </div>
        <div className="row align-items-center justify-content-around download-buttons">
          {/* [TODO:Lakshay] change download button files here */}
          <div className="col-lg-3 mt-2">
            <a download="filename.pdf" href="#" className="btn btn-primary">
              <i className="material-icons">file_download</i>&nbsp; Download
              White Paper
            </a>
          </div>
          <div className="col-lg-6 mt-2">
            <a download="filename.pdf" href="#" className="btn btn-primary">
              <i className="material-icons">file_download</i>&nbsp; Download
              Executive Summary
            </a>
          </div>
          <div className="col-lg-3 mt-2">
            <a download="filename.pdf" href="#" className="btn btn-primary">
              <i className="material-icons">file_download</i>&nbsp; Download One
              Paper
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturesSection
