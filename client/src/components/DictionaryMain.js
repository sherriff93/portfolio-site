import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import '../css/DictionaryMain.css'

import DictionaryView from './DictionaryView'
import TestWrapper from './TestWrapper'

import {fetchData} from '../actions/actions'
import {fetchSuccess} from '../actions/actions'
import {fetchFail} from '../actions/actions'

class DictionaryMain extends Component {

  componentDidMount(){
    this.props.testApi()
  }

  render() {
    console.log('main rerender')
    console.log(this.props.test)
    const {name, match, items} = this.props,
      dictMainPath = match.path,
      testPath = dictMainPath + '/test',
      itemsFiltered = items.filter(item => item.dictionary === name),
      routes = [
      {
        path: dictMainPath,
        exact: true,
        component: () => (
          <DictionaryView name={name} items={itemsFiltered} linkPath={testPath} />
        )
      },
      {
        path: testPath,
        component: () => (
          <TestWrapper initialItems={itemsFiltered} linkPath={dictMainPath} />
        )
      }
    ]
    return (
      <div>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.component}
          />
        ))}
      </div>
    )
  }
}

const mapStateToProps = function(store, ownProps) {
    return {
        items: store.dictionaryMainState.items,
        test: store.dictionaryMainState.test
    }
}

const mapDispatchToProps = function(dispatch) {
    return {
        testApi: () => {
        	dispatch(fetchData())
          fetch('/api/ninjas')
            .then(response => response.json())
            .then(response => {
            	if(response.status === 200){
              	dispatch(fetchSuccess(response))
              }
              else{
              	dispatch(fetchFail())
              }
            })
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DictionaryMain)
