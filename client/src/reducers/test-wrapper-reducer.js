import * as types from '../actions/action-types'

const initialState = {
  items: [],
  score: 0
}

const testWrapperReducer = function(state = initialState, action) {
    let newState = null
    switch(action.type) {
        case types.QUESTION_ANSWERED: {
            console.log('state');console.log(state)
            let {items, score} = state
            newState = {
              ...state,
              items: items.filter(item => item.english !== action.english),
              score: score + action.isCorrect
            }
            break
        }
        case types.SET_ITEMS: {
            const items = action.items
            newState = {...state, items}
            break
        }
        case types.RESET_SCORE: { // Ask: is this needed? Can we not get it to remount (i.e. call the constructor as opposed to render) again?
            newState = {
              ...state,
              score: 0
            }
            break
        }
        default:
            newState = state
    }
console.log(newState)
    return newState
}

export default testWrapperReducer
