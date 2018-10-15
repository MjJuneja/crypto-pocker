import React, { Component } from 'react'

const SubscriptionForm = props => {
  return (
    <div id="mc_embed_signup">
      <form
        action="https://facebook.us17.list-manage.com/subscribe/post?u=686fbc6ee984dd9fb86b82189&amp;id=12dcf3f345"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        className="validate"
        target="_blank"
        noValidate>
        <div
          id="mc_embed_signup_scroll"
          className="flex-horizontal align-items-center vertical-on-mobile">
          <div className="mc-field-group flex-1 ui-input-field is-dark is-rounded is-transparent">
            {/* <label htmlFor="mce-EMAIL">Email Address </label> */}
            <input
              type="email"
              defaultValue=""
              name="EMAIL"
              placeholder="Email Address"
              className="required email w-100 ui-input-field-input hero-email-input"
              id="mce-EMAIL"
            />
          </div>
          <div id="mce-responses" className="clear">
            <div
              className="response"
              id="mce-error-response"
              style={{ display: 'none' }}
            />
            <div
              className="response"
              id="mce-success-response"
              style={{ display: 'none' }}
            />
          </div>
          <div
            style={{ position: 'absolute', left: '-5000px' }}
            aria-hidden="true">
            <input
              type="text"
              name="b_686fbc6ee984dd9fb86b82189_12dcf3f345"
              tabIndex="-1"
              defaultValue=""
            />
          </div>
          <div className="clear">
            <input
              type="submit"
              defaultValue="Subscribe"
              name="subscribe"
              id="mc-embedded-subscribe"
              className="button btn btn-default hero-subscribe-btn"
            />
          </div>
        </div>
      </form>
    </div>
  )
}

export default SubscriptionForm
