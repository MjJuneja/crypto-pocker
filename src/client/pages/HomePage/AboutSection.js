import React from 'react'
import classnames from 'classnames'

import Translate from 'components/Translate'

const AboutSection = props => {
  const cx = classnames(props.className, 'about-section')

  return (
    <div className={cx} id={props.id}>
      <div className="container page-section pb-0">
        <h4 className="section-title with-line text-center mb-3">
          <span><Translate id="homepage.about.title" /></span>
        </h4>
        <p className="mb-5">
          <Translate id="homepage.about.text_1" />
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
          <Translate id="homepage.about.text_2" />
        </p>
        <p>
          <Translate id="homepage.about.text_3" />
        </p>
      </div>
    </div>
  )
}

export default AboutSection
