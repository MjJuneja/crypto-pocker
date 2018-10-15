import React, { Component } from 'react'
import classnames from 'classnames'
import { connect } from 'react-redux'

import Footer from 'components/Footer'

import './HomePage.scss'

import HeroSection from './HeroSection'
import SeenOnSection from './SeenOnSection'
import AboutSection from './AboutSection'
import FeaturesSection from './FeaturesSection'
import ICOSection from './ICOSection'
import MilestoneSection from './MilestoneSection'
import TeamSection from './TeamSection'
import FAQSection from './FAQSection'
import BountySection from './BountySection'
import WhyusSection from './WhyusSection'

class HomePage extends Component {
  render() {
    const locale = this.props.locale
    const cx = classnames('home-page')
    return (
      <div className={cx}>
        <HeroSection id="hero-section" locale={locale} />
        <SeenOnSection locale={locale} />
        <AboutSection id="about-section" locale={locale} />
        <FeaturesSection id="features-section" locale={locale} />
        <ICOSection id="ico-section" locale={locale} />
        <MilestoneSection id="milestone-section" locale={locale} />
        <TeamSection id="team-section" locale={locale} />
        <BountySection id="bounty-section" locale={locale} />
        <WhyusSection id="whyus-section" locale={locale} />
        <FAQSection id="faq-section" locale={locale} />

        <Footer />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  locale: state.Locale.locale
})

export default connect(mapStateToProps)(HomePage)
