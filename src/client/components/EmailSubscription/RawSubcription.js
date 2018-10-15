import React, { Component } from 'react'
import PropTypes from 'prop-types'
import jsonp from 'jsonp'

const getAjaxUrl = url => url.replace('/post?', '/post-json?')

class SubscribeForm extends Component {
  constructor(props, ...args) {
    super(props, ...args)
    this.state = {
      status: null,
      msg: null
    }
  }
  onSubmit = e => {
    e.preventDefault()
    if (
      !this.input.value ||
      this.input.value.length < 5 ||
      this.input.value.indexOf('@') === -1
    ) {
      this.setState({
        status: 'error'
      })
      return
    }
    const url =
      getAjaxUrl(this.props.action) +
      `&EMAIL=${encodeURIComponent(this.input.value)}`
    this.setState({ status: 'sending', msg: null }, () =>
      jsonp(url, { param: 'c' }, (err, data) => {
        if (err) {
          this.setState({
            status: 'error',
            msg: err
          })
        } else if (data.result !== 'success') {
          this.setState({
            status: 'error',
            msg: data.msg
          })
        } else {
          this.setState({
            status: 'success',
            msg: data.msg
          })
        }
      })
    )
  }
  render() {
    const {
      action,
      messages,
      className,
      style,
      // styles,
      formClassName = '',
      buttonClassName = '',
      formInnerClassName = '',
      inputClassName
    } = this.props
    const { status, msg } = this.state
    return (
      <div className={className} style={style}>
        <form
          className={formClassName}
          action={action}
          method="post"
          noValidate>
          <div className={formInnerClassName}>
            <input
              ref={node => (this.input = node)}
              type="email"
              defaultValue=""
              name="EMAIL"
              required={true}
              className={inputClassName}
              placeholder={messages.inputPlaceholder}
            />
          </div>
          <button
            disabled={
              this.state.status === 'sending' || this.state.status === 'success'
            }
            onClick={this.onSubmit}
            className={buttonClassName}
            type="submit">
            {messages.btnLabel}
          </button>
        </form>
        {status === 'sending' && (
          <div
            className="subscription-message is-sending"
            dangerouslySetInnerHTML={{ __html: messages.sending }}
          />
        )}
        {status === 'success' && (
          <div
            className="subscription-message is-success"
            dangerouslySetInnerHTML={{ __html: messages.success || msg }}
          />
        )}
        {status === 'error' && (
          <div
            className="subscription-message is-error"
            dangerouslySetInnerHTML={{ __html: msg || messages.error }}
          />
        )}
      </div>
    )
  }
}

SubscribeForm.propTypes = {
  messages: PropTypes.object,
  styles: PropTypes.object
}

SubscribeForm.defaultProps = {
  messages: {
    inputPlaceholder: 'Votre email',
    btnLabel: 'Envoyer',
    sending: 'Envoi en cours...',
    success:
      "Merci de votre intérêt!<p>Nous devons confirmer votre adresse e-mail. Pour compléter le processus d'abonnement, veuillez cliquer sur le lien contenu dans l'e-mail que nous venons de vous envoyer.</p>",
    error: "Oops, impossible d'enregistrer cette adresse"
  },
  styles: {
    sending: {
      fontSize: 18,
      color: 'auto'
    },
    success: {
      fontSize: 18,
      color: 'green'
    },
    error: {
      fontSize: 18,
      color: 'red'
    }
  }
}

export default SubscribeForm
