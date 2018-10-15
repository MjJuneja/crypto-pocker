import React from 'react'
import classnames from 'classnames'

import Translate from 'components/Translate'

const WhyusSection = props => {
  const cx = classnames(props.className, 'about-section','whyus-section')

  return (
    <div className={cx} id={props.id}>
      <div className="container page-section pb-0">
        <h4 className="section-title text-center mb-3">
          <Translate id="homepage.whyus.title" />
        </h4>
        <p className="mb-5">
          <Translate id="homepage.whyus.text_1" />
        </p>
        <div className="row mb-5">
          <div className="col-8 mx-auto mb-2">
            <div className="embed-responsive embed-responsive-16by9 about-video-container">
              <iframe
                title="status-video"
                className="embed-responsive-item"
                src="https://www.youtube.com/embed/FWoYfcSZzzY?rel=0&amp;controls=0&amp;showinfo=0"
                frameBorder="0"
                allow="encrypted-media"
                allowFullScreen
              />
            </div>
          </div>
        </div>
        <p className="mb-5">
          <Translate id="homepage.whyus.text_2" />
        </p>
        <p>
          <Translate id="homepage.whyus.text_3" />
        </p>
      </div>
    </div>
  )
}

export default WhyusSection
