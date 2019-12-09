import { combineReducers, createStore } from 'redux'

import { WhatsAppShellReducer  } from '../components/store/ShellReducers'


export const rootReducer = combineReducers({
    shell: WhatsAppShellReducer
})