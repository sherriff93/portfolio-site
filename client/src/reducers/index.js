import { combineReducers } from 'redux'

// Reducers
import dictionaryMainReducer from './dictionary-main-reducer'
import appReducer from './app-reducer'
import testWrapperReducer from './test-wrapper-reducer'

// Combine Reducers
var reducers = combineReducers({
    dictionaryMainState: dictionaryMainReducer,
    appState: appReducer,
    testWrapperState: testWrapperReducer
})

export default reducers
