import * as types from '../actions/action-types'

const initialState = {
    items: [
      {
        english: 'To dare',
        spanish: 'Atrever',
        dictionary: 'Harry Potter',
        index: 0
      }
    ],
    test: 'none'
}

const dictionaryMainReducer = function(state = initialState, action) {
    let newState = null
    switch(action.type) {
        case types.ADD_WORD: {
            const {items} = state
            const {values, name} = action
            let newItems // ask: Why does this still exist?
            let existingItemIndex = items.findIndex(word => word.english === values.English)
            if (existingItemIndex !== -1) {
                if (confirm("Overrite existing?") === false) {// ASK is using the key as a label bad?
                    newState = state
                    break
                }
                newItems = items.slice()
                newItems[existingItemIndex].spanish = values.Spanish
            } else {
              newItems = [
                ...items,
                {
                  english: values.English,
                  spanish: values.Spanish,
                  dictionary: name,
                  index: Date.now()
                }
              ]
            }

            newState = {
                ...state,
                items: newItems
            }
            break
        }
        case types.DELETE_WORD: {
            let {items} = state

            newState = {
                ...state,
                items: items.filter(item => item.english !== action.value)
            }
            break
        }
        case types.FETCH_DATA:
            newState = state
            break
        case types.FETCH_SUCCESS:
            newState = {...state, test: action.data}
            break
        case types.FETCH_FAIL:
            newState = {...state, test: 'fail'}
            break
        default:
            newState = state
    }

    return newState
}

export default dictionaryMainReducer
