import { createStore } from 'redux'

const initState = {
    player: [],
    titulares: [],
    suplentes: []
}

const reducer = (state = initState, action) => {
    return state
}

export default createStore(reducer)