import React from 'react'

import Header from 'components/Header'
import CanvasWaves from 'components/CanvasWaves'
import ParallaxContainer from 'components/ui/ParallaxContainer'
import InputField from 'components/ui/InputField'

import EmailSubscription from 'components/EmailSubscription/EmailSubscription'

import Translate, { translateToString } from 'components/Translate'
import CountDown from 'components/ui/CountDown'

const HeroComponent = ({ id, locale }) => (
  <ParallaxContainer
    id={id}
    className="top-parallax-section flex-vertical"
    backgroundContent={<CanvasWaves />}>
    <div className="flex-vertical fill">
      <Header inCenter showDonateButton scrollspy />
      <div className="container fill flex-vertical">
        <div className="row fill align-items-center justify-content-center">
          <div className="col-md-9 col-sm-12 col-xs-12 flex-vertical text-center justify-content-center">
            <h1 className="hero-title">
              <Translate id="homepage.hero.title" />
            </h1>
            <p className="hero-subtitle mb-3">
              <Translate id="homepage.hero.subtitle" />
            </p>
            <p className="mb-3">
              <Translate id="homepage.hero.content" />
            </p>
            <div className="row  justify-content-center">
              <div className="col-md-8">
                <EmailSubscription />
              </div>
            </div>
            <CountDown title="Lorem ipsum solor di amet, lorem ipsum solor di amet" />
          </div>
        </div>
      </div>
    </div>
    {/*<div className="hero-bottom-wrapper flex-horizontal align-items-center justify-content-center">
      <a className="appstore-icon">
        <img
          alt=""
          className="appstore-img"
          src="/public/img/appstore/mac_appstore.svg"
        />
      </a>
      <a className="appstore-icon">
        <img
          alt=""
          className="appstore-img"
          src="/public/img/appstore/ios_appstore.svg"
        />
      </a>
      <a className="appstore-icon">
        <img
          alt=""
          className="appstore-img"
          src="/public/img/appstore/google-play-badge.png"
        />
      </a>
      <a className="appstore-icon">
        <img
          alt=""
          className="appstore-img"
          src="/public/img/appstore/microsoft-store.png"
        />
      </a>
    </div>*/}
  </ParallaxContainer>
)

export default HeroComponent
