import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers'
import thunk from 'redux-thunk'

const Store = createStore(
   reducers, /* preloadedState, */
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
   applyMiddleware(thunk)
 );
export default Store


// // Debugging
// import { createStore, compose, applyMiddleware } from 'redux'
// import reducers from './reducers'
// var Debug = require('redux-debug')
// var debug = require('debug')('redux')
// const Store = compose(
//   applyMiddleware(Debug(debug))
// )(createStore(reducers))
// export default Store



// // Logging
// import { applyMiddleware, createStore } from 'redux'
// import reducers from './reducers'
//
// import logger from 'redux-logger'
// const Store = createStore(
//   reducers,
//   applyMiddleware(logger)
// )
// export default Store
