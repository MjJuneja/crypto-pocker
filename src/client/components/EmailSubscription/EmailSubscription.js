import React from 'react'
import RawSubscription from './RawSubcription'

import { connect } from 'react-redux'

import { translateToString } from 'components/Translate'

const FORM_ACTION =
  'https://facebook.us17.list-manage.com/subscribe/post?u=686fbc6ee984dd9fb86b82189&amp;id=12dcf3f345'

const EmailSubscription = props => {
  const locale = props.locale
  const formProps = {
    action: FORM_ACTION,
    className: 'flex-1',
    formClassName:
      'subscription-form flex-1 flex-horizontal align-items-center vertical-on-mobile',
    formInnerClassName: 'ui-input-field is-dark is-transparent is-rounded',
    inputClassName: 'flex-1 ui-input-field-input hero-email-input',
    buttonClassName: 'ui-button btn btn-default hero-subscribe-btn',
    messages: {
      inputPlaceholder: translateToString(
        'homepage.hero.input_placeholder',
        locale
      ),
      btnLabel: 'Subscribe',
      sending: 'Subscribing...',
      success: 'Subscribed Succesfully',
      error: 'Oops, there was a problem with subsciption'
    }
  }

  return <RawSubscription {...formProps} />
}

const mapStateToProps = state => ({
  locale: state.Locale.locale
})

export default connect(mapStateToProps)(EmailSubscription)
