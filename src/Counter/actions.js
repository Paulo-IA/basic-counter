import { state } from './state.js'
import { number } from './elements.js'
import { setCounter } from './index.js'

export function decreaseCounter() {
    state.counterValue -= 1
    setCounter(state.counterValue)
}

export function resetCounter() {
    setCounter(state.defaultCounterValue)
}

export function increaseCounter() {
    state.counterValue += 1
    setCounter(state.counterValue)
}