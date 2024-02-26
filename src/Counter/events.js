import * as actions from "./actions.js"
import * as el from "./elements.js";

export function registerControlers() {
    el.controllers.addEventListener("click", (event) => {
        let action = event.target.dataset.action

        if (typeof actions[action] != 'function') return

        actions[action]()
    })
}