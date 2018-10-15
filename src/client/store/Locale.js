import { addLocaleData } from 'react-intl'
import en from 'react-intl/locale-data/en'
import ru from 'react-intl/locale-data/ru'
import pt from 'react-intl/locale-data/pt'
import it from 'react-intl/locale-data/it'
import es from 'react-intl/locale-data/es'
import vi from 'react-intl/locale-data/vi'
import ja from 'react-intl/locale-data/ja'
import chinese from 'react-intl/locale-data/zh'
/*
russian
3. chinese ( simplified )
4. portuguese
5. italian 
6. Spanish
7. vietnamese 
8. jap
*/

addLocaleData([...en, ...ru, ...pt, ...it, ...es, ...vi, ...ja, ...chinese])

const createAction = str => `LOCALE_${str}`

const INITIAL_STATE = {
  locale: 'en'
}

const CHANGE_LOCALE = createAction('CHANGE_LOCALE')
const changeLocale = newLocale => ({
  type: CHANGE_LOCALE,
  locale: newLocale
})

export const actions = {
  changeLocale
}

export default function LocaleReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case CHANGE_LOCALE:
      return { ...state, locale: action.locale }
    default:
      return state
  }
}
