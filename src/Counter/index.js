import { state } from './state.js'

export function start(number) {
    setDefaultCounterNumber(number)
    setCounter(number)

    console.log(state.counterValue)
    console.log(state.defaultCounterValue)

    // listeners
}

export function setDefaultCounterNumber(number) {
    state.defaultCounterValue = number   
}

export function setCounter(number) {
    state.counterValue = number   
}