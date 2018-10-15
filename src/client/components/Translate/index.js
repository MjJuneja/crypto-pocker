import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import get from 'lodash/get'
import translations from 'translations/index'

window.tt = translations

export const translateToString = (id, locale) => {
  if (!locale) console.warn(id, ' - no locale given, `en` will be used')
  locale = locale || 'en'
  const translationKey = (id + '').toLowerCase()
  const keyWithLocale = `${translationKey}.${locale}`
  const translatedMessage = get(translations, keyWithLocale, '_NT_')
  return translatedMessage
}

const Translate = ({ id, locale }) => {
  return translateToString(id, locale)
}

Translate.propTypes = {
  id: PropTypes.string.isRequired
}

const mapStateToProps = state => ({
  locale: state.Locale.locale
})

export default connect(mapStateToProps)(Translate)
