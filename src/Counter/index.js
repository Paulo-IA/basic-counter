import * as events from './events.js'
import * as el from './elements.js'
import { state } from './state.js'

export function start(number) {
    setDefaultCounterNumber(number)
    setCounter(number)

    events.registerControlers()
}

export function setDefaultCounterNumber(number) {
    state.defaultCounterValue = number   
}

export function setCounter(number) {
    state.counterValue = number
    el.number.textContent = state.counterValue
}