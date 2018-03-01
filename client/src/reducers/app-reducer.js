import React from 'react'
import * as types from '../actions/action-types'

import Home from '../components/Home'
import DictionaryMain from '../components/DictionaryMain'

const initialState = {
  dictionaries: [
    {
      path: '/',
      exact: true,
      name: 'Home',
      main: Home
    },
    {
      path: '/harry-potter',
      name: 'Harry Potter',
      main: ({match}) => (<DictionaryMain name="Harry Potter" match={match} />)
    },
    {
      path: '/things-ive-heard',
      name: 'Things I\'ve heard',
      main: ({match}) => (<DictionaryMain name="Things I've heard" match={match} />)
    },
    {
      path: '/woofing',
      name: 'Woofing',
      main: ({match}) => (<DictionaryMain name='Woofing' match={match} />)
    }
  ]
}

const AppReducer = function(state = initialState, action) {
    let newState = null
    let {dictionaries} = state
    switch(action.type) {
        case types.ADD_DICTIONARY:
            const {value} = action
            const valueCapped = value.charAt(0).toUpperCase() + value.slice(1)
            newState = {
                ...state,
                dictionaries: [...dictionaries, {
                    path: '/' + encodeURI(value),
                    name: valueCapped,// TODO need to format the value (caps first here, no space above) and caps below
                    main: ({match}) => (<DictionaryMain name={valueCapped} match={match} />)
                }]
            }
            break
        case types.DELETE_DICTIONARY:
            dictionaries = dictionaries.filter(function(dictionary, index) {
              return action.value !== dictionary.name
            })
            newState = {...state, dictionaries}
            break
        default:
            newState = state
    }
    return newState
}

export default AppReducer
